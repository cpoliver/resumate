import { IconButton, Stack, useColorMode } from "@chakra-ui/react"
import React from "react"

import { ColorModeDark, ColorModeLight } from "../Icon/Icon"

export const ColorModeSwitcher: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const ColorModeIcon = colorMode === "dark" ? ColorModeDark : ColorModeLight

  return (
    <Stack>
      <IconButton
        aria-label={`Change color mode to ${colorMode === "dark" ? "Light" : "Dark"}`}
        color="mode.text1"
        icon={<ColorModeIcon />}
        size="sm"
        textTransform="capitalize"
        isRound
        onClick={toggleColorMode}
      />
    </Stack>
  )
}
