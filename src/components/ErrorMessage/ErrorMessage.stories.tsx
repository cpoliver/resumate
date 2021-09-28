import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ErrorMessage } from "./ErrorMessage"

export default {
  title: "Common / Error Message",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />

export const Default = Template.bind({})
Default.args = {
  name: "Error Loading Profile",
  message: "There was an error trying to fetch your profile.",
}

export const WithRetry = Template.bind({})
WithRetry.args = {
  name: "Error Loading Posts",
  message: "There was an error trying to fetch your posts. Try again?",
  onRetry: () => console.log("retry"),
}
