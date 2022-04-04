import { Container, Flex, Stack } from "@chakra-ui/react"
import React from "react"

import { ColorModeSwitcher, Posts } from "components"

export const App: React.FC = () => (
  <AppShell>
    <Content />
  </AppShell>
)

const AppShell: React.FC = ({ children }) => (
  <Stack bottom={0} flex={1} left={0} pos="absolute" right={0} spacing={0} top={0}>
    <Flex as="main" bg="mode.background" flex={1}>
      <Container flex={1} minH="100vh" my={20} overflow="auto">
        <Stack direction="row" flex={1} spacing={8}>
          {children}
        </Stack>
      </Container>
    </Flex>
    <Flex bottom={4} pos="fixed" right={4}>
      <ColorModeSwitcher />
    </Flex>
  </Stack>
)

const Content: React.FC = () => (
  <Stack as="section" flex={2} spacing={6}>
    <Posts />
  </Stack>
)
