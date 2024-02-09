import { Accordion, AccoridionData } from './Accordion';

export default {
  title: 'elements/Accordion',
};

const exampleData: AccoridionData[] = [
  { title: 'アイテム1', description: '説明文1' },
  { title: 'アイテム2', description: '説明文2' },
  { title: 'アイテム3', description: '重複しているアイテムの説明.' },
];

export const Usage = () => {
  return <Accordion data={exampleData} />;
};
