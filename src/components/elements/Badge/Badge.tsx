'use client';

import { Badge as MantineBadge, useMantineTheme } from '@mantine/core';
import { Renderable } from '@/interfaces/Renderable';

interface BadgeProps {
  children: Renderable;
  variant?: 'outline' | 'filled' | 'light' | 'transparent';
  color?: string;
  size?: string;
  radius?: string;
}
export const Badge = (props: BadgeProps) => {
  const theme = useMantineTheme();

  const color = props.color != null ? props.color : theme.primaryColor;
  const variant = props.variant != null ? props.variant : 'outline';
  const size = props.size != null ? props.size : 'md';
  const radius = props.radius != null ? props.radius : 'sm';
  return (
    <MantineBadge color={color} variant={variant} size={size} radius={radius}>
      {props.children}
    </MantineBadge>
  );
};
