'use client';

import { ReactNode } from 'react';
import { rem, Title } from '@mantine/core';

interface HeadingStyle {
  xs: { fz: number; lh: number; m: string };
  md: { fz: number; lh: number; m: string };
}

export const ContentHeading = (props: {
  children: string | ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  const styles: { [key: number]: HeadingStyle } = {
    1: {
      xs: { fz: 22, lh: 34, m: '30px 0 10px' },
      md: { fz: 26, lh: 34, m: '40px 0 14px' },
    },
    2: {
      xs: { fz: 22, lh: 34, m: '30px 0 10px' },
      md: { fz: 22, lh: 30, m: '20px 0 14px' },
    },
    3: { xs: { fz: 18, lh: 34, m: '12px 0 10px' }, md: { fz: 18, lh: 28, m: '0 0 14px' } },
    4: { xs: { fz: 17, lh: 27, m: '0 0 10px' }, md: { fz: 17, lh: 27, m: '0 0 14px' } },
    5: { xs: { fz: 16, lh: 26, m: '0 0 10px' }, md: { fz: 16, lh: 26, m: '0 0 14px' } },
    6: { xs: { fz: 15, lh: 25, m: '0 0 10px' }, md: { fz: 15, lh: 25, m: '0 0 14px' } },
  };
  return (
    <div id={props.children as string}>
      <Title
        order={props.level}
        lh={rem(styles[props.level].xs.lh)}
        m={styles[props.level].xs.m}
        fw={700}
        fz={styles[props.level].xs.fz}
        hiddenFrom="sm"
      >
        {props.children}
      </Title>
      <Title
        order={props.level}
        lh={rem(styles[props.level].md.lh)}
        m={styles[props.level].md.m}
        fw={700}
        fz={styles[props.level].md.fz}
        visibleFrom="sm"
      >
        {props.children}
      </Title>
    </div>
  );
};
