import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"

const theme = extendTheme({
  // TODO: add any theme overrides
})

export const ThemeProvider: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
