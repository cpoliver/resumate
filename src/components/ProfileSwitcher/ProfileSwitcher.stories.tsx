import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ProfileSwitcher, ProfileSwitcherLoading } from "./ProfileSwitcher"

export default {
  title: "ProfileSwitcher",
  component: ProfileSwitcher,
} as ComponentMeta<typeof ProfileSwitcher>

const Template: ComponentStory<typeof ProfileSwitcher> = (args) => <ProfileSwitcher {...args} />

export const Default = Template.bind({})

export const Loading = () => <ProfileSwitcherLoading />
