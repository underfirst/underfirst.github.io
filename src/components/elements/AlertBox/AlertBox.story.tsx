import React, { ReactElement } from 'react';
import { Container, Stack } from '@mantine/core';
import { AlertBox } from './AlertBox';

export default {
  title: 'elements/AlertBox',
};

export const Usage = () => {
  const components: ReactElement[] = [];

  ['light', 'filled', 'outline'].forEach((variant) => {
    ['info', 'success', 'warning', 'error'].forEach((alertType) => {
      [false, true].forEach((withoutIcon) => {
        // @ts-ignore
        components.push(
          <AlertBox
            variant={variant}
            type={alertType}
            withoutIcon={withoutIcon}
            title={`${variant + alertType}タイトル`}
          >
            メッセージテキスト.
          </AlertBox>
        );
      });
    });
  });
  return (
    <Container>
      <Stack>{components}</Stack>
    </Container>
  );
};
