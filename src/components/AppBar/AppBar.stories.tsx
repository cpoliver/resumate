import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { AppBar } from "."

export default {
  title: "AppBar",
  component: AppBar,
} as ComponentMeta<typeof AppBar>

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />

export const Default = Template.bind({})
