import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Suggestions } from "./Suggestions"
import { handlers } from "api/mocks"

export default {
  title: "Suggestions",
  component: Suggestions,
} as ComponentMeta<typeof Suggestions>

const Template: ComponentStory<typeof Suggestions> = (args) => <Suggestions {...args} />

export const Success = Template.bind({})
Success.parameters = { msw: handlers.success }

export const Loading = Template.bind({})
Loading.parameters = { msw: handlers.loading }

export const Error = Template.bind({})
Error.parameters = { msw: handlers.error }

export const NoData = Template.bind({})
NoData.parameters = { msw: handlers.noData }
