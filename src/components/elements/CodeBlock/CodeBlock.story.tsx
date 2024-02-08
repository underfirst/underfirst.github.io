import { CodeBlock } from './CodeBlock';

export default {
  title: 'CodeBlock',
};

export const Usage = () => {
  const codeForPreviousDemo = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

  return <CodeBlock>{codeForPreviousDemo}</CodeBlock>;
};
