const common = {
  primary: "#006cfa",
  secondary: "#001632",
}

const light = {
  ...common,
  background: "rgba(var(--b3f,250,250,250),1)",
  backgroundAlt: "#fff",
  border: "#efefef",
  text1: "#262626",
  text2: "#8e8e8e",
  text3: "#c7c7c7",
}

type Colors = typeof light

const dark: Colors = {
  ...common,
  background: "#999",
  backgroundAlt: "#000",
  border: "#888",
  text1: "#ffff",
  text2: "#8e8e8e",
  text3: "#c7c7c7",
}

export const colors = { light, dark }
