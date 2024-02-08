'use client';

import { Code as MantineCode } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

export const CodeBlock = (props: { children: Renderable }) => {
  return <MantineCode block>{props.children}</MantineCode>;
};
