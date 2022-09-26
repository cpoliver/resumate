import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { WorkHistory, WorkHistoryProps } from "./WorkHistory"
import { workHistory } from "mocks/workHistory"

export default {
  title: "Components / Work History",
  component: WorkHistory,
} as Meta<WorkHistoryProps>

const Template: Story<WorkHistoryProps> = (args) => (
  <Flex maxW={800}>
    <WorkHistory {...args} />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  workHistory: workHistory.standard,
}

export const Full = Template.bind({})
Full.args = {
  workHistory: workHistory.full,
}
