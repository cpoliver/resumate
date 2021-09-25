import React from "react"
import { Stack } from "@chakra-ui/react"


import { ThemeProvider } from "../src/components"

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Stack bottom={0} flex={1} left={0} pos="relative" right={0} spacing={0} top={0} >
        <Story />
      </Stack>
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}