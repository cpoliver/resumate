import { ThemeConfig } from "@chakra-ui/react"

import { colors } from "./colors"
import * as components from "./components"
import { loadingAnimation } from "./utils"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const layerStyles = {
  loading: {
    animation: loadingAnimation,
  },
  skeleton: {
    h: 3,
    bg: "mode.text1",
    borderRadius: "sm",
  },
}

export const theme = {
  colors,
  components: { ...components },
  config,
  layerStyles,
}
