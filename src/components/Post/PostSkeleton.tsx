import { Box, Skeleton, SkeletonCircle, Spacer, Stack } from "@chakra-ui/react"
import React from "react"

import { Footer } from "./Footer"
import { ActionButtons } from "./Post"

export const PostSkeleton: React.FC = () => (
  <Stack bg="mode.backgroundAlt" borderColor="mode.border" borderWidth="1px" flex={1} fontSize="sm" spacing={0}>
    <Header />
    <Skeleton children={<Box layerStyle="square" />} />
    <ActionButtons layerStyle="loading" opacity={0.4} />
    <Stack px={4} py={2} spacing={2}>
      <Skeleton h={3} w="100%" />
      <Skeleton h={3} w="80%" />
      <Box h={3} />
      <Skeleton h={3} w="100%" />
      <Skeleton h={3} w="80%" />
    </Stack>
    <Footer opacity={0.4} />
  </Stack>
)

const Header: React.FC = () => (
  <Stack align="center" bg="mode.background" direction="row" pl={2} pr={5} py={2} spacing={3}>
    <SkeletonCircle size="9" />
    <Skeleton children={<Box h={4} w={32} />} />
    <Spacer />
    <Stack direction="row" spacing="2px">
      <SkeletonCircle size="1" />
      <SkeletonCircle size="1" />
      <SkeletonCircle size="1" />
    </Stack>
  </Stack>
)
