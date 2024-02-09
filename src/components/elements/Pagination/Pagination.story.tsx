import { useState } from 'react';
import { Text } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { Pagination } from './Pagination';

export default {
  title: 'elements/Pagination',
};

export const Usage = () => {
  function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const data = chunk(
    Array(300)
      .fill(0)
      .map((_, index) => ({ id: index, name: randomId() })),
    5
  );

  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));
  return (
    <>
      {items}
      <Pagination total={data.length} activePage={activePage} onChange={setPage} />
    </>
  );
};
