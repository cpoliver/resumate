import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ProfileSwitcher, ProfileSwitcherSkeleton } from "./ProfileSwitcher"
import { profile } from "data"

export default {
  title: "ProfileSwitcher",
  component: ProfileSwitcher,
} as ComponentMeta<typeof ProfileSwitcher>

const Template: ComponentStory<typeof ProfileSwitcher> = (args) => <ProfileSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {
  ...profile,
  profile_fullname: "Alaina Price",
}

export const Loading = () => <ProfileSwitcherSkeleton />
