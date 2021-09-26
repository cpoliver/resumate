import React from "react"
import { Box } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from "react-query"

import { ColorModeSwitcher, ThemeProvider } from "../src/components"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
})

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Story />
        <Box pos="fixed" bottom={4} right={4}>
          <ColorModeSwitcher />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
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