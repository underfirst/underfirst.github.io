'use client';

import { Pagination as MantinePagination } from '@mantine/core';

export const Pagination = (props: {
  total: number;
  activePage: number;
  onChange: (value: number) => void;
}) => {
  return (
    <>
      <MantinePagination
        total={props.total}
        value={props.activePage}
        onChange={props.onChange}
        radius="xs"
        styles={{ control: { border: 'none' } }}
        visibleFrom="sm"
        withEdges
      />
      <MantinePagination
        total={props.total}
        value={props.activePage}
        onChange={props.onChange}
        radius="xs"
        size="md"
        hiddenFrom="sm"
        withEdges
      />
    </>
  );
};
