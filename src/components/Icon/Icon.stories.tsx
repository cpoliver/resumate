import { IconProps, Stack } from "@chakra-ui/react"
import { Meta } from "@storybook/react"
import React from "react"

import * as Icon from "./Icon"

export default {
  title: "Icon",
} as Meta<IconProps>

export const AllIcons = () => (
  <Stack direction="row" flex-wrap="wrap">
    {Object.values(Icon).map((IconComponent, i) => (
      <IconComponent key={i} />
    ))}
  </Stack>
)
