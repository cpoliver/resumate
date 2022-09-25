import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Name, NameProps } from "./Name"

export default {
  title: "Components / Name",
  component: Name,
} as Meta<NameProps>

const Template: Story<NameProps> = (args) => (
  <Flex maxW={800}>
    <Name {...args} />
  </Flex>
)

export const Simple = Template.bind({})
Simple.args = {
  firstName: "Charles",
  lastName: "Oliver",
}

export const Full = Template.bind({})
Full.args = {
  ...Simple.args,
  title: "Dr.",
  middleName: "Peter",
  postnomials: "PhD",
}
