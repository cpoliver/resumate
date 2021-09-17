import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ProfileSwitcher } from "./ProfileSwitcher"

export default {
  title: "ProfileSwitcher",
  component: ProfileSwitcher,
} as ComponentMeta<typeof ProfileSwitcher>

const Template: ComponentStory<typeof ProfileSwitcher> = (args) => <ProfileSwitcher {...args} />

export const Default = Template.bind({})
