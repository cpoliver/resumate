import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Links, LinksProps } from "./Links"
import { links } from "mocks/links"

export default {
  title: "Components / Links",
  component: Links,
} as Meta<LinksProps>

const Template: Story<LinksProps> = (args) => (
  <Flex maxW={800}>
    <Links {...args} />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  links: links.standard,
}

export const Full = Template.bind({})
Full.args = {
  links: links.full,
}
