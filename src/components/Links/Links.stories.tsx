import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Links, LinksProps } from "./Links"
import { LinkCustom, LinkStandard } from "types/link"

export default {
  title: "Components / Links",
  component: Links,
} as Meta<LinksProps>

const Template: Story<LinksProps> = (args) => (
  <Flex maxW={800}>
    <Links {...args} />
  </Flex>
)

const standard: LinkStandard = {
  type: "linkedin",
  username: "cpoliver",
  url: "",
}

const custom: LinkCustom = {
  type: "custom",
  label: "portfilio",
  url: "",
}

export const Default = Template.bind({})
Default.args = {
  links: [standard, custom],
}
