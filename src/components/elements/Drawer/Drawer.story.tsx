import { Button } from '@mantine/core';
import { Drawer } from './Drawer';

export default {
  title: 'Drawer',
};

export const Usage = () => {
  return <Drawer target={<Button>テスト</Button>}>ああああ</Drawer>;
};
