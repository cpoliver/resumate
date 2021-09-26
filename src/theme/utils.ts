import { keyframes } from "@chakra-ui/system"

export const focusStyles = {
  _focusVisible: {
    shadow: "none",
    outline: "1px solid black",
  },
  _focus: {
    shadow: "none",
    outline: "none",
  },
}

export const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor, opacity: 0.7 },
    to: { borderColor: endColor, background: endColor, opacity: 0 },
  })

export const skeletonProps = {
  startColor: "mode.text2",
  endColor: "mode.background",
  fadeDuration: 1,
}

export const loadingAnimation = `${skeletonProps.fadeDuration}s linear infinite alternate ${fade(
  skeletonProps.startColor,
  skeletonProps.endColor
)}`
