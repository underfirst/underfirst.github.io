'use client';

import Link from 'next/link';
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Container,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './MenuBar.module.css';

export function MenuBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box>
      <header className={classes.header}>
        <Container size="lg" h="100%">
          <Group justify="space-between" h="100%">
            {/*<MantineLogo size={30} />*/}
            <Text fw={700} fz={30} c={theme.primaryColor}>
              _1st.log
            </Text>

            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/categories/NLP/" className={classes.link}>
                NLP
              </Link>
              <Link href="/categories/Tech/" className={classes.link}>
                Tech
              </Link>
              <Link href="/categories/Investment/" className={classes.link}>
                Investment
              </Link>
              <Link href="/categories/Misc/" className={classes.link}>
                Misc
              </Link>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/categories/NLP/" className={classes.link}>
            NLP
          </Link>
          <Link href="/categories/Tech/" className={classes.link}>
            Tech
          </Link>
          <Link href="/categories/Investment/" className={classes.link}>
            Investment
          </Link>
          <Link href="/categories/Misc/" className={classes.link}>
            Misc
          </Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
