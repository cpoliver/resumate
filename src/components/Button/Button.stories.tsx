import { IconButton, Stack } from "@chakra-ui/react"
import { ComponentMeta } from "@storybook/react"
import React from "react"

import * as Button from "./Button"

export default {
  title: "Button",
} as ComponentMeta<typeof IconButton>

export const AllButtons = () => (
  <Stack direction="row" flex-wrap="wrap">
    {Object.values(Button).map((ButtonComponent, i) => (
      <ButtonComponent key={i} />
    ))}
  </Stack>
)
