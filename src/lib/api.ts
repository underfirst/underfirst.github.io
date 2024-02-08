import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { glob } from 'glob';
import { load } from 'js-yaml';
import { Post } from '@/interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

export const getPostBySlug = (slugArray: string | string[]) => {
  let realSlug: string;
  if (Array.isArray(slugArray)) {
    const matchedSlug = slugArray.join('/');
    realSlug = matchedSlug.replace(/\.md$/, '');
  } else {
    realSlug = slugArray.replace(/\.md$/, '');
  }
  try {
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { ...data, slug: realSlug, content } as Post;
  } catch (e) {
    return null;
  }
};

export function getAllPosts(): Post[] {
  const slugs = glob.sync(`${postsDirectory}/**/*.md`);
  const ret: Post[] = [];
  slugs
    .map((file) => file.split('_posts').pop())
    .map((slug) => getPostBySlug(slug as string))
    .filter((item) => item != null)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1))
    .forEach((item) => ret.push(item!));
  return ret;
}

export function getCategoryPosts(category: string): Post[] {
  const slugs = glob.sync(`${postsDirectory}/${category}/*.md`);
  const posts = slugs
    .map((file) => file.split('_posts').pop())
    .map((slug) => getPostBySlug(slug as string))
    .filter((item) => item != null)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1));
  return posts;
}

export function getCategories(): string[] {
  try {
    // 指定されたパスのディレクトリ内のファイルとディレクトリの一覧を取得
    const directoryContents = fs.readdirSync(postsDirectory, { withFileTypes: true });

    // ディレクトリの一覧だけをフィルタリングして取得
    const childFolders = directoryContents
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    return childFolders;
  } catch (error) {
    // エラーが発生した場合は空の配列を返すか、エラーを処理する方法を選択してください
    return [];
  }
}

interface TagDictionary {
  [tag: string]: string[];
}

function extractTags(folderPath: string): TagDictionary {
  const tagsDict: TagDictionary = {};

  function processFile(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontMatter = content.split('---')[1]; // Assuming Front Matter is surrounded by '---'
    if (frontMatter) {
      const metadata = load(frontMatter) as { tags: string[] };
      if (metadata && metadata.tags) {
        const { tags } = metadata;
        tags.forEach((tag: string) => {
          if (!(tag in tagsDict)) {
            tagsDict[tag] = [];
          }
          tagsDict[tag].push(filePath);
        });
      }
    }
  }

  function traverseDirectory(dirPath: string) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file: string) => {
      const filePath = join(dirPath, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        traverseDirectory(filePath);
      } else if (file.endsWith('.md')) {
        processFile(filePath);
      }
    });
  }

  traverseDirectory(folderPath);
  return tagsDict;
}

export function getTags() {
  const tagsDict = extractTags(postsDirectory);
  return Object.keys(tagsDict).sort();
}

export function getTagPosts(tag: string) {
  let ret: Post[] = [];
  const tagsDict = extractTags(postsDirectory);
  const tags = Object.keys(tagsDict);
  if (tags.includes(tag)) {
    const postPaths = tagsDict[tag];
    // TODO: postPathsから記事一覧を読み込んで, Postに書き換えて, sortする.
    ret = postPaths
      .map((fullPath) => {
        const slug = fullPath.split('_posts').pop();
        return getPostBySlug(slug);
      })
      .filter((post) => post != null)
      .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1));
  }
  return ret;
}
