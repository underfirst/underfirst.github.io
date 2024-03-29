import { Container } from '@mantine/core';
import { TableOfContents } from './TableOfContents';

export default {
  title: 'elements/TableOfContent',
};

export const Usage = () => {
  const links = [
    { label: 'Usage', link: '#usage', order: 1 },
    { label: 'Position and placement', link: '#position', order: 1 },
    { label: 'With other overlays', link: '#overlays', order: 1 },
    { label: 'Manage focus', link: '#focus', order: 1 },
    { label: 'Examples', link: '#1', order: 1 },
    { label: 'Show on focus', link: '#2', order: 2 },
    { label: 'Show on hover', link: '#3', order: 2 },
    { label: 'With form', link: '#4', order: 2 },
  ];
  return (
    <>
      <Container size="xs">
        <TableOfContents links={links} active="#overlays" />
      </Container>
    </>
  );
};
