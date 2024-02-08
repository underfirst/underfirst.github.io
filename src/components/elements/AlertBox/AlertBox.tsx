'use client';

import { Alert } from '@mantine/core';
import {
  IconAlertCircle,
  IconCircleCheck,
  IconCircleOff,
  IconInfoCircle,
} from '@tabler/icons-react';
import { Renderable } from '@/interfaces/Renderable';

interface AlertBoxProps {
  variant?: string;
  type?: string;
  title?: string;
  children: Renderable;
  withoutIcon?: boolean;
}

export const AlertBox = (props: AlertBoxProps) => {
  const variant = props.variant != null ? props.variant : 'light';
  const boxType = props.type != null ? props.type : 'info';
  const withIcon = props.withoutIcon != null ? !props.withoutIcon : true;
  let icon;
  let color = 'blue';
  if (withIcon) {
    if (boxType === 'info') {
      icon = <IconInfoCircle />;
    } else if (boxType === 'success') {
      icon = <IconCircleCheck />;
    } else if (boxType === 'warning') {
      icon = <IconAlertCircle />;
    } else if (boxType === 'error') {
      icon = <IconCircleOff />;
    }
  }
  if (boxType === 'success') {
    color = 'green';
  } else if (boxType === 'warning') {
    color = 'yellow';
  } else if (boxType === 'error') {
    color = 'red';
  }

  return (
    <Alert variant={variant} icon={icon} title={props.title} color={color}>
      {props.children}
    </Alert>
  );
};
