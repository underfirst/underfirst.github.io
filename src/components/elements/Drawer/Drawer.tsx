'use client';

import { useDisclosure } from '@mantine/hooks';
import { Drawer as MantineDrawer } from '@mantine/core';
import { ReactElement } from 'react';
import { Renderable } from '@/interfaces/Renderable';

export const Drawer = (props: {
  title?: string;
  children: Renderable;
  target: ReactElement | string;
  position?: 'bottom' | 'left' | 'right' | 'top';
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const position = props.position != null ? props.position : 'left';
  return (
    <>
      <MantineDrawer
        opened={opened}
        offset={0}
        position={position}
        onClose={close}
        title={props.title}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {props.children}
      </MantineDrawer>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <a onClick={open}>{props.target}</a>
    </>
  );
};
