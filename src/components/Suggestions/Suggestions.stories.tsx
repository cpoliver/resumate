import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Suggestion, Suggestions } from "./Suggestions"
import { suggestions } from "common"

export default {
  title: "Suggestions",
  component: Suggestions,
} as ComponentMeta<typeof Suggestions>

const Template: ComponentStory<typeof Suggestions> = (args) => <Suggestions {...args} />

export const Default = Template.bind({})
Default.args = {
  suggestions: suggestions as Suggestion[],
}
