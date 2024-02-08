import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Container, Grid, GridCol, Image as MantineImage } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import { extractHeaders } from '@/lib/extractTitle';
import { A } from '@/components/elements/A/A';
import { TableOfContents } from '@/components/elements/TableOfContents/TableOfContents';
import { PostHeader } from '@/components/PostHeader/PostHeader';
import { ContentHeading } from '@/components/elements/ContentHeading/ContentHeading';
import { P } from '@/components/elements/P/P';
import NotFound from '@/app/not-found';
import '@mantine/code-highlight/styles.css';
import 'katex/dist/katex.min.css';

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

  return (
    <main>
      <Container size="lg">
        <Grid>
          <GridCol span={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
            <PostHeader title={post.title} date={post.date} />
            <Markdown
              rehypePlugins={[rehypeKatex]}
              remarkPlugins={[remarkGfm, remarkMath]}
              components={{
                // code(props) {
                //   const { children, className, node, ...rest } = props;
                //   return <CodeBlock>{children}</CodeBlock>;
                // },
                code({ node, className, ...props }) {
                  const hasLang = /language-(\w+)/.exec(className || '');
                  // const hasMeta = node?.data?.meta;

                  // const applyHighlights: object = (applyHighlights: number) => {
                  //   if (hasMeta) {
                  //     const RE = /{([\d,-]+)}/;
                  //     const metadata = node.data.meta?.replace(/\s/g, '');
                  //     const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';
                  //     const highlightLines = rangeParser(strlineNumbers);
                  //     const highlight = highlightLines;
                  //     const data: string = highlight.includes(applyHighlights) ? 'highlight' : null;
                  //
                  //     return { data };
                  //   } else {
                  //     return {};
                  //   }
                  // };

                  return hasLang ? (
                    <CodeHighlight language={hasLang[1]} code={props.children as string} />
                  ) : (
                    <code className={className} {...props} />
                  );
                },
                h1(props) {
                  const { children } = props;
                  return <ContentHeading level={1}>{children}</ContentHeading>;
                },
                h2(props) {
                  const { children } = props;
                  return <ContentHeading level={2}>{children}</ContentHeading>;
                },
                h3(props) {
                  const { children } = props;
                  return <ContentHeading level={3}>{children}</ContentHeading>;
                },
                h4(props) {
                  const { children } = props;
                  return <ContentHeading level={4}>{children}</ContentHeading>;
                },
                h5(props) {
                  const { children } = props;
                  return <ContentHeading level={5}>{children}</ContentHeading>;
                },
                h6(props) {
                  const { children } = props;
                  return <ContentHeading level={6}>{children}</ContentHeading>;
                },
                a(props) {
                  const { children, href } = props;
                  return <A href={href!}>{children}</A>;
                },
                p(props) {
                  const { children } = props;
                  return <P>{children}</P>;
                },
                img(props) {
                  return <MantineImage mah="50vh" fit="contain" src={props.src} radius={0} />;
                },
              }}
            >
              {post.content}
            </Markdown>
          </GridCol>
          <GridCol span={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }}>
            <TableOfContents links={extractHeaders(post.content)} />
          </GridCol>
        </Grid>
      </Container>
    </main>
  );
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
