import { focusStyles } from "./utils"

export const Button = {
  defaultProps: {
    variant: "plain",
    size: "xs",
  },
  variants: {
    plain: {
      bg: "none",
      color: "mode.text1",
      _hover: {
        bg: "none",
      },
      ...focusStyles,
    },
    link: {
      _hover: { bg: "none" },
      color: "mode.text4",
      size: "xs",
      variant: "ghost",
    },
  },
}

export const Container = {
  baseStyle: {
    maxW: 975,
  },
}

export const Heading = {
  baseStyle: {
    color: "mode.text1",
  },
}

export const Input = {
  baseStyle: {
    field: {
      bg: "mode.background",
    },
  },
}

export const Link = {
  variants: {
    profile: {
      color: "mode.text1",
      fontWeight: "semibold",
    },
  },
}

export const Skeleton = {
  defaultProps: {
    startColor: "mode.text2",
    endColor: "mode.background",
    fadeDuration: 0.75,
  },
}

export const Text = {
  baseStyle: {
    color: "mode.text1",
  },
}
