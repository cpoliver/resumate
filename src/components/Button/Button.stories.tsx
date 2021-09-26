import { Stack } from "@chakra-ui/react"
import { Meta } from "@storybook/react"
import React from "react"

import * as Button from "."

export default {
  title: "Button",
} as Meta<Button.ButtonProps>

const { ...Buttons } = Button

export const AllButtons = () => (
  <Stack direction="row" flex-wrap="wrap">
    {Object.values(Buttons).map((ButtonComponent, i) => (
      <ButtonComponent key={i} />
    ))}
  </Stack>
)
