'use client';

import { useDisclosure } from '@mantine/hooks';
import { Popover as MantinePopover } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

export const Tooltip = (props: {
  children: Renderable;
  content: Renderable;
  width?: string | number;
}) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <MantinePopover width={props.width} position="bottom" withArrow shadow="md" opened={opened}>
      <MantinePopover.Target>
        <span onMouseEnter={open} onMouseLeave={close}>
          {props.children}
        </span>
      </MantinePopover.Target>
      <MantinePopover.Dropdown style={{ pointerEvents: 'none' }}>
        {props.content}
      </MantinePopover.Dropdown>
    </MantinePopover>
  );
};
