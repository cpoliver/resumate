import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Resume, ResumeProps } from "./Resume"
import { resume } from "mocks/resume"

export default {
  title: "Components / Resume",
  component: Resume,
} as Meta<ResumeProps>

const Template: Story<ResumeProps> = (args) => (
  <Flex maxW={800}>
    <Resume {...args} />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  ...resume.standard,
}

export const Full = Template
Full.args = {
  ...resume.full,
}
