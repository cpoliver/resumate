import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        nav: {
          _hover: {
            bg: "none",
          },
        },
      },
    },
  },
})

export const ThemeProvider: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
