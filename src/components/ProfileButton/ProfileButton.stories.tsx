import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ProfileButton } from "./ProfileButton"

export default {
  title: "Profiles / Profile Button",
  component: ProfileButton,
} as ComponentMeta<typeof ProfileButton>

const Template: ComponentStory<typeof ProfileButton> = (args) => <ProfileButton {...args} />

export const Default = Template.bind({})
