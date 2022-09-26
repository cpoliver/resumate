import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Summary, SummaryProps } from "./Summary"
import { summary } from "mocks/summary"

export default {
  title: "Components / Summary",
  component: Summary,
} as Meta<SummaryProps>

const Template: Story<SummaryProps> = (args) => (
  <Flex maxW={800}>
    <Summary {...args} />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  ...summary.standard,
}

export const Full = Template.bind({})
Full.args = {
  ...summary.full,
}
