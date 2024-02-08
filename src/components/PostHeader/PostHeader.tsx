'use client';

import { Avatar, Box, Group, Text, Divider } from '@mantine/core';
import { ArticleTitle } from '@/components/elements/ArticleTitle/ArticleTitle';

export const PostHeader = (props: { title: string; date: string }) => {
  return (
    <Box py={{ xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' }}>
      <ArticleTitle>{props.title}</ArticleTitle>
      <Group wrap="nowrap" py="1rem">
        <Avatar src="/assets/author-icon.png" size={48} radius="xl" />
        <Box>
          <Text>underfirst</Text>
          <Text c="dimmed">{props.date}</Text>
        </Box>
      </Group>
      <Divider />
    </Box>
  );
};
