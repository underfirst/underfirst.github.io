'use client';

import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';

export const Breadcrumbs = (props: { items: { title: string; href?: string }[] }) => {
  return (
    <MantineBreadcrumbs separatorMargin="md" mt="xs">
      {props.items.map((item, index) => {
        return (
          <Anchor href={item.href != null ? item.href : '#'} key={index}>
            {item.title}
          </Anchor>
        );
      })}
    </MantineBreadcrumbs>
  );
};
