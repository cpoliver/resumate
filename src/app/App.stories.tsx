import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { App } from "."
import { handlers } from "api/mocks"

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const Success = Template.bind({})
Success.parameters = {
  msw: handlers.success,
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: handlers.loading,
}

export const Error = Template.bind({})
Error.parameters = {
  msw: handlers.error,
}

export const NoData = Template.bind({})
NoData.parameters = {
  msw: handlers.noData,
}
