import { focusStyles } from "./utils"

export const Button = {
  variants: {
    plain: {
      bg: "none",
      color: "text1",
      _hover: {
        bg: "none",
      },
      ...focusStyles,
    },
  },
}

export const Heading = {
  baseStyle: {
    color: "text1",
  },
}

export const Link = {
  variants: {
    profile: {
      color: "text1",
      fontWeight: "semibold",
    },
  },
}

export const Text = {
  baseStyle: {
    color: "text1",
  },
}
