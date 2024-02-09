import { CodeHighlight } from '@mantine/code-highlight';
import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Container, Grid, GridCol, Image as MantineImage } from '@mantine/core';
import { Post } from '@/interfaces/post';
import { PostHeader } from '@/components/units/PostHeader/PostHeader';
import { ContentHeading } from '@/components/elements/ContentHeading/ContentHeading';
import { A } from '@/components/elements/A/A';
import { P } from '@/components/elements/P/P';
import { TableOfContents } from '@/components/elements/TableOfContents/TableOfContents';
import { extractHeaders } from '@/lib/extractTitle';

export const PostPage = (postProps: { post: Post }) => {
  const { post } = postProps;
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
};
