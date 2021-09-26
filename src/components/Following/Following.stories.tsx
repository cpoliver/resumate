import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Following } from "."
import { profiles } from "api/data"
import { FollowingSkeleton } from "components"

export default {
  title: "Following",
  component: Following,
} as ComponentMeta<typeof Following>

const Template: ComponentStory<typeof Following> = (args) => <Following {...args} />

export const Default = Template.bind({})
Default.args = {
  profiles,
  w: "fit-content",
}

export const Loading = () => <FollowingSkeleton w="fit-content" />
