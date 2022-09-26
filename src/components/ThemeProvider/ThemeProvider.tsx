import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import React from "react"

import { theme } from "theme"

export const ThemeProvider: React.FC = ({ children }) => (
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={extendTheme(theme)}>{children}</ChakraProvider>
  </>
)
