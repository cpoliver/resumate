import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Suggestions, SuggestionsLoading } from "./Suggestions"

export default {
  title: "Suggestions",
  component: Suggestions,
} as ComponentMeta<typeof Suggestions>

const Template: ComponentStory<typeof Suggestions> = (args) => <Suggestions {...args} />

export const Default = Template.bind({})

export const Loading = () => <SuggestionsLoading />
