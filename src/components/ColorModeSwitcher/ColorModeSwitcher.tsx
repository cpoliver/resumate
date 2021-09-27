import { IconButton, useColorMode } from "@chakra-ui/react"
import React from "react"

import { ColorModeDark, ColorModeLight } from "../Icon/Icon"

export const ColorModeSwitcher: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const ColorModeIcon = colorMode === "dark" ? ColorModeDark : ColorModeLight

  return (
    <IconButton
      aria-label={`Change color mode to ${colorMode === "dark" ? "Light" : "Dark"}`}
      bg={colorMode === "dark" ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"}
      color="mode.text1"
      icon={<ColorModeIcon />}
      size="sm"
      textTransform="capitalize"
      isRound
      onClick={toggleColorMode}
    />
  )
}
