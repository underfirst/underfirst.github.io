import { useForm } from '@mantine/form';
import { CheckBox } from './CheckBox';

export default {
  title: 'form/CheckBox',
};

export const Usage = () => {
  interface Inputs {
    checkbox1: boolean;
  }
  const form = useForm<Inputs>({
    initialValues: { checkbox1: false },
  });

  return (
    <>
      <CheckBox label="hook form check box" {...form.getInputProps('checkbox1')} />
      {form.values.checkbox1 && 'checked!'}
    </>
  );
};
