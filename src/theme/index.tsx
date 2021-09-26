import { ThemeConfig, extendTheme } from "@chakra-ui/react"

import * as components from "./components"

const colors = {
  primary: "#006cfa",
  secondary: "#001632",
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const layerStyles = {
  avatarBorder: {
    borderColor: "gray.900",
    borderRadius: "full",
    borderWidth: "2px",
    p: "2px",
  },
}

export const theme = extendTheme({
  config,
  colors,
  components: { ...components },
  layerStyles,
})
