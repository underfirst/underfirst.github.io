import { Checkbox as MantineCheckBox } from '@mantine/core';
import { ChangeEvent } from 'react';

interface CheckBoxProps {
  label?: string;
  error?: string;
  radius?: string;
  size?: string;
  defaultChecked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
export const CheckBox = (props: CheckBoxProps) => {
  return (
    <MantineCheckBox
      defaultChecked={props.defaultChecked}
      label={props.label}
      error={props.error}
      radius={props.radius}
      size={props.size}
      disabled={props.disabled}
      onChange={props.onChange}
    />
  );
};
