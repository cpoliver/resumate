import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"

import * as components from "./components"

const colors = {
  primary: "#006cfa",
  secondary: "#001632",
}

const layerStyles = {
  avatarBorder: {
    borderColor: "gray.900",
    borderRadius: "full",
    borderWidth: "2px",
    ml: 2,
    p: "2px",
  },
}

const theme = extendTheme({
  colors,
  components: { ...components },
  layerStyles,
})

export const ThemeProvider: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
