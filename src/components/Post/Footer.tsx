import { Button as ChakraButton, Input, Stack, StackProps } from "@chakra-ui/react"
import React, { ChangeEvent, useState } from "react"

import { EmojiButton } from "../Button/Button"
import { focusStyles } from "theme/utils"

export const Footer: React.FC<StackProps> = (stackProps) => {
  const [comment, setComment] = useState("")

  return (
    <Stack
      align="center"
      borderColor="mode.border"
      borderTopWidth="1px"
      direction="row"
      p={2}
      spacing={0}
      {...stackProps}
    >
      <EmojiButton />
      <Input
        aria-label="Add a comment…"
        bg="none"
        placeholder="Add a comment…"
        size="sm"
        value={comment}
        variant="ghost"
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => setComment(target.value)}
      />
      <ChakraButton
        {...focusStyles}
        color="mode.text4"
        fontWeight="semibold"
        isDisabled={!comment}
        px={2}
        size="sm"
        variant="ghost"
      >
        Post
      </ChakraButton>
    </Stack>
  )
}
