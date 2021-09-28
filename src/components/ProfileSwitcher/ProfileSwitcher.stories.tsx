import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ProfileSwitcher } from "./ProfileSwitcher"
import { handlers } from "api/mocks"

export default {
  title: "Profiles / Profile Switcher",
  component: ProfileSwitcher,
} as ComponentMeta<typeof ProfileSwitcher>

const Template: ComponentStory<typeof ProfileSwitcher> = (args) => <ProfileSwitcher {...args} />

export const Success = Template.bind({})
Success.parameters = { msw: handlers.success }

export const Loading = Template.bind({})
Loading.parameters = { msw: handlers.loading }

export const Error = Template.bind({})
Error.parameters = { msw: handlers.error }
