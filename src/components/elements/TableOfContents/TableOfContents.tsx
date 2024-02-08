'use client';

import cx from 'clsx';
import { Box, Text, Group, rem } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import classes from './TableOfContents.module.css';

interface TableOfContentsProps {
  active?: string;
  links: { label: string; link?: string; order: number }[];
}

export function TableOfContents(props: TableOfContentsProps) {
  const items = props.links.map((item) => (
    <Box
      component="a"
      href={`#${item.label}`}
      // onClick={(event) => event.preventDefault()}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: props.active === item.label })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className={classes.wrapper}>
      <Group mb="md">
        <IconListSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text>Table of contents</Text>
      </Group>
      {items}
    </div>
  );
}
