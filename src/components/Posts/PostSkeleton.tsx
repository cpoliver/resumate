import { Avatar, Box, Spacer, Stack } from "@chakra-ui/react"
import React from "react"

import { EllipsisButton } from "../Button"
import { ActionButtons } from "./Post"
import { PostFooter as Footer } from "./PostFooter"

export const PostSkeleton: React.FC = () => (
  <Stack
    bg="mode.backgroundAlt"
    borderColor="mode.border"
    borderWidth="1px"
    flex={1}
    fontSize="sm"
    layerStyle="loading"
    spacing={0}
  >
    <Header />
    <Box bg="mode.text1" layerStyle="square" />
    <ActionButtons />
    <Stack px={4} py={2} spacing={2}>
      <Box layerStyle="skeleton" w="100%" />
      <Box layerStyle="skeleton" w="80%" />
      <Box />
      <Box layerStyle="skeleton" w="100%" />
      <Box layerStyle="skeleton" w="80%" />
    </Stack>
    <Footer />
  </Stack>
)

const Header: React.FC = () => (
  <Stack align="center" bg="mode.background" direction="row" p={2} spacing={3}>
    <Box borderColor="mode.text1" layerStyle="avatarBorder">
      <Avatar bg="mode.text1" name=" " size="sm" />
    </Box>
    <Box layerStyle="skeleton" w={32} />
    <Spacer />
    <EllipsisButton />
  </Stack>
)
