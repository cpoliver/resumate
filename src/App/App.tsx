import { Container, Flex, Stack } from "@chakra-ui/react"
import React from "react"

import { AppBar } from "components"

export const App: React.FC = () => (
  <Stack bg="gray.200" bottom={0} left={0} pos="absolute" right={0} top={0}>
    <AppBar />
    <Flex flex={1}>
      <Container maxW="container.lg">Content to go here&hellip;</Container>
    </Flex>
  </Stack>
)
