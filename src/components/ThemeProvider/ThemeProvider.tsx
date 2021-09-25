import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"

const focusStyles = {
  _focusVisible: {
    shadow: "none",
    outline: "1px solid black",
  },
  _focus: {
    shadow: "none",
    outline: "none",
  },
}

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        plain: {
          bg: "none",
          color: "gray.800",
          _hover: {
            bg: "none",
          },
          ...focusStyles,
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.800",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.800",
      },
    },
  },
  colors: {
    primary: "#006cfa",
    secondary: "#001632",
  },
})

export const ThemeProvider: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
