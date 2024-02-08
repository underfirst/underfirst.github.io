'use client';

import { Avatar, Badge, Box, Card, Divider, Group, Text, Title } from '@mantine/core';
import Link from 'next/link';

interface TagItem {
  title: string;
  href?: string;
}

interface ArticleCardProps {
  href: string;
  title: string;
  date: string;
  content: string;
  category: TagItem;
  tags: TagItem[];
}

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <>
      <Card shadow={undefined} radius={0} padding="xs">
        <Card.Section>
          <Link href={props.href} style={{ color: 'inherit', textDecoration: 'none' }}>
            <Title
              order={1}
              fz="26px"
              mb="12px"
              lh="38px"
              visibleFrom="sm"
              style={{ wordBreak: 'break-word' }}
            >
              {props.title}
            </Title>
            <Title
              order={1}
              fz="18px"
              mb="15px"
              lh="24px"
              hiddenFrom="sm"
              style={{ wordBreak: 'break-word' }}
            >
              {props.title}
            </Title>
          </Link>
          <div>
            <Group wrap="nowrap">
              <Avatar src="/assets/author-icon.png" size={48} radius="xl" />
              <div>
                <Text>underfirst</Text>
                <Text c="dimmed">{props.date}</Text>
              </div>
            </Group>
          </div>
        </Card.Section>

        <Card.Section>
          <Text mt="md" lineClamp={3} visibleFrom="sm">
            {props.content}
          </Text>
          <Text mt="md" lineClamp={5} hiddenFrom="sm" fz="13px">
            {props.content}
          </Text>
          <Box>
            <Link href={props.category.href != null ? props.category.href : '#'}>
              <Badge
                variant="outline"
                color="gray"
                radius="xs"
                visibleFrom="xs"
                size="xs"
                m="4px 4px 0 0"
                // leftSection={<IconCategory style={{ width: '1rem', height: '1rem' }}/>}
              >
                Category: {props.category.title}
              </Badge>
            </Link>
            {props.tags.map((item) => {
              return (
                <Link href={item.href != null ? item.href : '#'}>
                  <Badge
                    variant="light"
                    color="gray"
                    radius="xs"
                    visibleFrom="sm"
                    m="4px 4px 0 0"
                    size="xs"
                    // leftSection={<IconTag style={{ width: '1rem', height: '1rem' }} />}
                  >
                    {item.title}
                  </Badge>
                  <Badge
                    variant="light"
                    color="gray"
                    fz="10px"
                    radius="xs"
                    size="xs"
                    hiddenFrom="sm"
                    m="4px 4px 0 0"
                  >
                    {item.title}
                  </Badge>
                </Link>
              );
            })}
          </Box>
        </Card.Section>
      </Card>
      <Divider mt={20} mb={40} />
    </>
  );
};
