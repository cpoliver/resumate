import React from "react"
import { Box } from "@chakra-ui/react"

import { ColorModeSwitcher, ThemeProvider } from "../src/components"

export const decorators = [
  (Story) => (
    <ThemeProvider>
        <Story />
        <Box pos="fixed" bottom={4} right={4}>
          <ColorModeSwitcher />
        </Box>
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