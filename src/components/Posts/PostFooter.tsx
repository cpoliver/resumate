import { Button as ChakraButton, Input, Stack, StackProps } from "@chakra-ui/react"
import React, { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"

import { EmojiButton } from "../Button/Button"
import { focusStyles } from "theme/utils"

export const PostFooter: React.FC<StackProps> = (stackProps) => {
  const [comment, setComment] = useState("")

  const { t } = useTranslation()
  const label = t("Add a comment…")

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
        aria-label={label}
        bg="none"
        placeholder={label}
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
        {t("Post")}
      </ChakraButton>
    </Stack>
  )
}
