import { IconButton, useColorMode } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

import { ColorModeDark, ColorModeLight } from "../Icon/Icon"

export const ColorModeSwitcher: React.FC = () => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()

  const ColorModeIcon = colorMode === "dark" ? ColorModeDark : ColorModeLight

  return (
    <IconButton
      aria-label={t("Change color mode to {{mode}}", { mode: colorMode === "dark" ? "Light" : "Dark" })}
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
