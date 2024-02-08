'use client';

import Link from 'next/link';
import { Text, Container, ActionIcon, Group, rem, useMantineTheme } from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandGithub,
} from '@tabler/icons-react';
import classes from './Footer.module.css';

const data = [
  {
    title: 'About me',
    links: [
      { label: '自己紹介', link: '/posts/Misc/240208-self-intro' },
      // { label: 'Media assets', link: '#' },
      // { label: 'Changelog', link: '#' },
      // { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'Home', link: '/' },
      { label: 'NLP', link: '/categories/NLP/' },
      { label: 'Tech', link: '/categories/Tech/' },
      { label: 'Investment', link: '/categories/Investment/' },
      { label: 'Misc', link: '/categories/Misc/' },
    ],
  },
];

export function Footer() {
  const theme = useMantineTheme();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} className={classes.link} href={link.link}>
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text fw={700} fz={30} c={theme.primaryColor}>
            _1st.log
          </Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            関西でAI系エンジニアをやっています.
            興味があることはエンジニアリングに限らず雑多に書いていきます.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024- underlast. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            {/*TODO: link*/}
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
