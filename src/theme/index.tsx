import { ThemeConfig } from "@chakra-ui/react"

import { colors } from "./colors"
import * as components from "./components"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const layerStyles = {
  avatarBorder: {
    borderColor: "text1",
    borderRadius: "full",
    borderWidth: "2px",
    p: "2px",
  },
}

export const theme = {
  colors,
  components: { ...components },
  config,
  layerStyles,
}
