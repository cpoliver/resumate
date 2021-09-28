import React from "react"
import { Box } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from "react-query"
import { initialize, mswDecorator } from 'msw-storybook-addon'

import "../src/i18n"
import { ColorModeSwitcher, ThemeProvider } from "../src/components"

initialize()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  },
})

export const decorators = [
  mswDecorator,
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