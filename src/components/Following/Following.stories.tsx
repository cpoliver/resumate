import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Following, FollowingLoading } from "."

export default {
  title: "Following",
  component: Following,
} as ComponentMeta<typeof Following>

const Template: ComponentStory<typeof Following> = (args) => <Following {...args} />

export const Default = Template.bind({})

export const Loading = () => <FollowingLoading />
