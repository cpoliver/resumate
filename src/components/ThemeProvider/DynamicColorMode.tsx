import { ThemeProvider, useColorMode, useTheme } from "@chakra-ui/react"
import React from "react"

// Workaround to support mode-based colors in the theme
// https://github.com/chakra-ui/chakra-ui/issues/1162#issuecomment-682270232
export const DynamicColorMode: React.FC = (props) => {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <ThemeProvider
      {...props}
      theme={{
        ...theme,
        colors: {
          mode: {
            ...theme.colors,
            // Overwrite with mode-specific colors
            ...theme.colors.modes?.[colorMode],
          },
        },
      }}
    />
  )
}
