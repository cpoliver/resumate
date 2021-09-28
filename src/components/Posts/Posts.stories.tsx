import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Posts } from "./Posts"
import { handlers } from "api/mocks"

export default {
  title: "Stories / Posts",
  component: Posts,
} as ComponentMeta<typeof Posts>

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} maxW={800} />

export const Success = Template.bind({})
Success.parameters = { msw: handlers.success }

export const Loading = Template.bind({})
Loading.parameters = { msw: handlers.loading }

export const Error = Template.bind({})
Error.parameters = { msw: handlers.error }

export const NoData = Template.bind({})
NoData.parameters = { msw: handlers.noData }
