import { ChakraProvider, ColorModeScript, ThemeProvider, extendTheme, useColorMode } from "@chakra-ui/react"
import React from "react"

import { theme } from "theme"
import { colors } from "theme/colors"

const CustomThemeProvider: React.FC = ({ children }) => {
  const { colorMode } = useColorMode()

  const colorModeTheme = extendTheme({
    ...theme,
    colors: colors[colorMode],
  })

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={colorModeTheme}>
        {/* <ThemeProvider theme={colorModeTheme}>{children}</ThemeProvider> */}
        {children}
      </ChakraProvider>
    </>
  )
}

export { CustomThemeProvider as ThemeProvider }
