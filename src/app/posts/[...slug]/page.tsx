import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import NotFound from '@/app/not-found';
import '@mantine/code-highlight/styles.css';
import 'katex/dist/katex.min.css';
import { PostPage } from '@/components/layouts/PostPage/postPage';

type Params = {
  params: {
    slug: string | string[];
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <NotFound />;
  }
  return <PostPage post={post} />;
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({ slug: post.slug.slice(1).split('/') }));
}
