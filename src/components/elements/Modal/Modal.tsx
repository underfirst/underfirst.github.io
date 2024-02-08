'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal as MantineModal } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

export function Modal(props: {
  title?: string;
  children: Renderable;
  target: Renderable;
  initialState?: boolean;
}) {
  const [opened, { open, close }] = useDisclosure(
    props.initialState != null ? props.initialState : false
  );

  return (
    <>
      <MantineModal
        opened={opened}
        onClose={close}
        title={props.title}
        withCloseButton={props.title != null}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
      >
        {props.children}
      </MantineModal>

      <a onClick={open}>{props.target}</a>
    </>
  );
}
