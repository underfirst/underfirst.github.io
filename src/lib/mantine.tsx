import { createTheme, MantineColorsTuple, MantineProvider, rem } from '@mantine/core';
import { ReactElement } from 'react';

const green: MantineColorsTuple = [
  '#e7feef',
  '#d6f6e1',
  '#afeac4',
  '#85dfa5',
  '#62d58b',
  '#4acf79',
  '#36ca6b',
  '#2cb45e',
  '#21a052',
  '#0b8a43',
];

const red: MantineColorsTuple = [
  '#ffece6',
  '#ffece6',
  '#ffece6',
  '#ffd9d0',
  '#f9b2a1',
  '#f48770',
  '#f06e51',
  '#ed4e2a',
  '#ec411c',
  '#d2330f',
];

const blue: MantineColorsTuple = [
  '#ebf2ff',
  '#d8e2f9',
  '#b0c1ea',
  '#869fdd',
  '#6282d2',
  '#4b70cc',
  '#446bcb',
  '#2f56b3',
  '#274da1',
  '#1a4290',
];

const yellow: MantineColorsTuple = [
  '#fffae1',
  '#fffae1',
  '#fffae1',
  '#fdf3cc',
  '#fbe59e',
  '#f7d66b',
  '#f4c93d',
  '#f3c224',
  '#f2be11',
  '#d7a700',
];

const orange: MantineColorsTuple = [
  '#fff5e0',
  '#ffebcc',
  '#fed59b',
  '#fcbe67',
  '#fbaa3a',
  '#fa9e1d',
  '#fa970a',
  '#df8300',
  '#c77300',
  '#ad6200',
];

const purple: MantineColorsTuple = [
  '#faf0ff',
  '#faf0ff',
  '#faf0ff',
  '#ece0f2',
  '#d5bfdc',
  '#bd9dc7',
  '#a277b0',
  '#9b6daa',
  '#9564a6',
  '#825292',
];

const theme = createTheme({
  fontFamily: '-apple-system,sans-serif',
  primaryColor: 'green',
  // white: '#f4f4f4',
  // black: '#151515',
  colors: { green, red, blue, yellow, purple, orange },
  autoContrast: false, // 要素に背景色指定をした際に, 文字色をコントラスト比で自動調整する機能. default: false.
  headings: {
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(42), lineHeight: rem(49) },
    },
  },
  defaultRadius: 'xs',
});

export const Mantine = (props: { children: ReactElement | ReactElement[] }) => {
  return <MantineProvider theme={theme}>{props.children}</MantineProvider>;
};
