import { ThemeConfig } from "@chakra-ui/react"

import { colors } from "./colors"
import * as components from "./components"
import { loadingAnimation } from "./utils"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const layerStyles = {
  avatarBorder: {
    borderColor: "mode.text1",
    borderRadius: "full",
    borderWidth: "2px",
    p: "2px",
  },
  square: {
    _after: {
      content: "''",
      display: "block",
      pb: "100%",
    },
    h: 0,
    pt: "100%",
    w: "100%",
  },
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
