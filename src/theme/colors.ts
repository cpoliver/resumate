const common = {
  primary: "#006cfa",
  secondary: "#001632",
}

const light = {
  ...common,
  bg: "#fafafa",
  bgAlt: "#fff",
  border: "#efefef",
  text1: "#262626",
  text2: "#8e8e8e",
  text3: "#c7c7c7",
}

type Colors = typeof light

const dark: Colors = {
  ...common,
  bg: "#999",
  bgAlt: "#000",
  border: "#888",
  text1: "#ffff",
  text2: "#8e8e8e",
  text3: "#c7c7c7",
}

export const colors = { light, dark }
