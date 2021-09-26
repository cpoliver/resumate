import { ComponentMeta, Story } from "@storybook/react"
import React from "react"

import { LikeButton, SaveButton, ToggleButton, ToggleButtonProps } from "."

export default {
  title: "ToggleButton",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>

type Args = ToggleButtonProps & {
  Component: React.FC<any>
}

const Template: Story<Args> = ({ Component, ...args }) => <Component {...args} />

export const Like = Template.bind({})
Like.args = {
  Component: LikeButton,
}

export const Save = Template.bind({})
Save.args = {
  Component: SaveButton,
}
