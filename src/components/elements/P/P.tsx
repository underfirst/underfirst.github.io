'use client';

import { Text } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

export const P = (props: { children: Renderable }) => {
  return <Text>{props.children}</Text>;
};
