import { useForm } from '@mantine/form';
import { Switch } from '@/components/form/Switch/Switch';

export default {
  title: 'form/Switch',
};

export const Usage = () => {
  interface Inputs {
    switch1: boolean;
  }
  const form = useForm<Inputs>({
    initialValues: { switch1: false },
  });

  return (
    <>
      <Switch label="スイッチアイテム" {...form.getInputProps('switch1')} />
      {form.values.switch1 && 'checked!'}
    </>
  );
};
