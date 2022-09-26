import { Button, useColorMode } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

export const ColorModeSwitcher: React.FC = () => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = colorMode === "dark" ? "☀️" : "🌙"

  return (
    <Button
      aria-label={t("Change color mode to {{mode}}", { mode: colorMode === "dark" ? "Light" : "Dark" })}
      bg={colorMode === "dark" ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"}
      color="mode.text1"
      p={0}
      rounded="full"
      size="sm"
      textTransform="capitalize"
      onClick={toggleColorMode}
    >
      {icon}
    </Button>
  )
}
