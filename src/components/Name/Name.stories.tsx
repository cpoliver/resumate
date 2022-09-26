import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Name, NameProps } from "./Name"
import { name } from "mocks/name"

export default {
  title: "Components / Name",
  component: Name,
} as Meta<NameProps>

const Template: Story<NameProps> = (args) => (
  <Flex maxW={800}>
    <Name {...args} />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  ...name.standard,
}

export const Full = Template.bind({})
Full.args = {
  ...name.full,
}
