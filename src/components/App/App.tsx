import { Stack } from "@chakra-ui/react"
import React from "react"

import { AppBar } from "components"

export const App: React.FC = () => (
  <Stack bg="gray.100" bottom={0} left={0} pos="absolute" right={0} top={0}>
    <AppBar />
  </Stack>
)
