import { ThemeConfig } from "@chakra-ui/react"

import * as components from "./components"

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

export const theme = {
  config,
  components: { ...components },
  layerStyles,
}
