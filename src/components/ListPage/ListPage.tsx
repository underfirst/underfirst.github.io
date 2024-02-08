'use client';

import { useState } from 'react';
import { Box, Center, Container, Stack, Title } from '@mantine/core';
import { Post } from '@/interfaces/post';
import { ArticleCard } from '@/components/elements/ArticleCard/ArticleCard';
import { Pagination } from '@/components/elements/Pagination/Pagination';
import classes from './ListPage.module.css';

export function HeroTitle(props: { listType?: string; title?: string }) {
  if (props.listType || props.title) {
    return (
      <Box bg="gray.0" w="100%">
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.highlight}>{props.listType}</span> {props.title}
              </Title>
            </div>
          </div>
        </Container>
      </Box>
    );
  }
  return null;
}

export const ListPage = (props: { listType?: string; listTitle?: string; allPosts: Post[] }) => {
  const numPage = 10; // TODO: const
  const [currentPage, setCurrentPage] = useState(1);
  let start: number = 0;
  let end: number = start + numPage;
  if (currentPage > 1) {
    start = (currentPage - 1) * numPage + 1;
    end = currentPage * numPage;
  }
  return (
    <>
      <HeroTitle listType={props.listType} title={props.listTitle} />
      <main>
        <Container size="lg">
          <Center>
            <Stack justify="flex-start">
              {props.allPosts.length > 0 && (
                <section>
                  <div>
                    {props.allPosts.slice(start, end).map((post) => (
                      <ArticleCard
                        href={`/posts/${post.slug}`}
                        title={post.title}
                        date={post.date}
                        content={post.excerpt}
                        category={{ title: 'NLP' }}
                        tags={[{ title: 'Transformer' }, { title: 'GPT' }]}
                      />
                    ))}
                  </div>
                </section>
              )}
            </Stack>
          </Center>
          <Container size="lg">
            <Center>
              <Pagination
                total={Math.ceil(props.allPosts.length / 5)}
                activePage={currentPage}
                onChange={(value) => {
                  setCurrentPage(value);
                }}
              />
            </Center>
          </Container>
        </Container>
      </main>
    </>
  );
};
