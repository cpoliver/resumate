import { DarkMode, LightMode } from "@chakra-ui/react"
import { ComponentMeta, Story } from "@storybook/react"
import React, { Fragment } from "react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"

export default {
  title: "Components / Color Mode Switcher",
  component: ColorModeSwitcher,
} as ComponentMeta<typeof ColorModeSwitcher>

type Args = { mode?: "light" | "dark" }

const Template: Story<Args> = ({ mode }) => {
  const ForceMode = mode === undefined ? Fragment : mode === "light" ? LightMode : DarkMode

  return (
    <ForceMode>
      <ColorModeSwitcher />
    </ForceMode>
  )
}

export const System = Template.bind({})

export const Light = Template.bind({})
Light.args = {
  mode: "light",
}

export const Dark = Template.bind({})
Dark.args = {
  mode: "dark",
}
