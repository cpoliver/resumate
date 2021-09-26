const common = {
  primary: "#006cfa",
  secondary: "#001533",
  tertiary: "#37f49a",
}

const light = {
  ...common,
  background: "#fafafa",
  backgroundAlt: "#fff",
  border: "#efefef",
  text1: "#262626",
  text2: "#8e8e8e",
  text3: "#c7c7c7",
  text4: common.primary,
}

type Colors = typeof light

const dark: Colors = {
  ...common,
  background: common.secondary,
  backgroundAlt: "#00132e",
  border: "#293951",
  text1: "#e8e6e3",
  text2: "#9a9a9a",
  text3: "#5f5f5f",
  text4: common.tertiary,
}

export const colors = {
  ...common,
  modes: {
    light,
    dark,
  },
}
