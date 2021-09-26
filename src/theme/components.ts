import { focusStyles } from "./utils"

export const Button = {
  variants: {
    plain: {
      bg: "none",
      color: "gray.800",
      _hover: {
        bg: "none",
      },
      ...focusStyles,
    },
  },
}

export const Heading = {
  baseStyle: {
    color: "gray.800",
  },
}

export const Link = {
  variants: {
    profile: {
      color: "gray.900",
      fontWeight: "semibold",
    },
  },
}

export const Text = {
  baseStyle: {
    color: "gray.800",
  },
}
