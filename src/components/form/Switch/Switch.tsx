import { Switch as MantineSwitch } from '@mantine/core';
import { ChangeEvent } from 'react';

interface SwitchProps {
  label: string;
  defaultChecked?: boolean;
  description?: string;
  error?: string;
  disabled?: boolean;
  size?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Switch = (props: SwitchProps) => (
  <MantineSwitch {...props} onLabel="ON" offLabel="OFF" />
);
