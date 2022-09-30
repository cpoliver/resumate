import { Meta, Story } from "@storybook/react"
import React from "react"

import { Profile, ProfileProps } from "./Profile"
import { profile } from "mocks/profile"

export default {
  title: "Components / Profile",
  component: Profile,
} as Meta<ProfileProps>

const Template: Story<ProfileProps> = (args) => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
  ...profile,
}
