import { Button } from '@mantine/core';
import { Modal } from './Modal';

export default {
  title: 'Modal',
};

export const Usage = () => {
  return <Modal target="Modalを起動">aaa</Modal>;
};

export const ButtonUsage = () => {
  return <Modal target={<Button>ボタンで記号</Button>}>テストテスト</Modal>;
};

export const InitialOpen = () => {
  return (
    <Modal target="" initialState={true}>
      あああ
    </Modal>
  );
};
