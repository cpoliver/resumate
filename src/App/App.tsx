import { Container, Flex, Stack } from "@chakra-ui/react"
import React from "react"

import { AppBar } from "components"

export const App: React.FC = () => (
  <Stack bottom={0} flex={1} left={0} pos="fixed" right={0} spacing={0} top={0}>
    <AppBar />
    <Flex bg="gray.50" flex={1}>
      <Container maxW="container.lg">Content to go here&hellip;</Container>
    </Flex>
  </Stack>
)
