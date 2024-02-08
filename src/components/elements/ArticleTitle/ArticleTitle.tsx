'use client';

import { Title as MantineTitle } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

export const ArticleTitle = (props: { children: Renderable }) => (
  <>
    {/*For Smartphone*/}
    <MantineTitle
      order={1}
      style={{ fontSize: '24px', lineHeight: '29px', padding: '0 0 16px' }}
      hiddenFrom="sm"
    >
      {props.children}
    </MantineTitle>
    {/*For Tablet, Desktop. */}
    <MantineTitle
      visibleFrom="sm"
      order={1}
      style={{ fontSize: '42px', lineHeight: '50px', fontWeight: 700 }}
    >
      {props.children}
    </MantineTitle>
  </>
);
