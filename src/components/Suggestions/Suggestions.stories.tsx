import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Suggestion, Suggestions, SuggestionsSkeleton } from "./Suggestions"
import { suggestions } from "api/data"

export default {
  title: "Suggestions",
  component: Suggestions,
} as ComponentMeta<typeof Suggestions>

const Template: ComponentStory<typeof Suggestions> = (args) => <Suggestions {...args} />

export const Default = Template.bind({})
Default.args = {
  suggestions: suggestions as Suggestion[],
}

export const Loading = () => <SuggestionsSkeleton />
