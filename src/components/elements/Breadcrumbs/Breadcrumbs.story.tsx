import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'elements/Breadcrumbs',
};

export const Usage = () => {
  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ];
  return <Breadcrumbs items={items} />;
};
