'use client';

import { Anchor } from '@mantine/core';
import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

export const A = (props: { href: string; children: ReactElement | string | ReactNode }) => {
  if (props.href.startsWith('http')) {
    return (
      <Anchor href={props.href} underline="always" component={Link} c="#4270ed">
        {props.children}
      </Anchor>
    );
  }
  return (
    <Anchor href={props.href} underline="always" c="#4270ed">
      {props.children}
    </Anchor>
  );
};
