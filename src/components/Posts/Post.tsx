import { Box, Stack } from "@chakra-ui/react"
import React from "react"

type PostProps = Record<string, any>

export const Post: React.FC<PostProps> = (post) => (
  <Stack bg="mode.backgroundAlt" borderColor="mode.border" borderWidth="1px" flex={1} fontSize="sm" spacing={0}>
    <Box as="pre">{JSON.stringify(post, null, 2)}</Box>
  </Stack>
)
