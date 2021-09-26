import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { App, AppSkeleton } from "./App"

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const Default = Template.bind({})

export const Loading = () => <AppSkeleton />
