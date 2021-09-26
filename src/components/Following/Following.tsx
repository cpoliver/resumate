import { Avatar, Box, Stack, StackProps, Text } from "@chakra-ui/react"
import React from "react"

import { Profile } from "api/data"

type FollowingProps = { profiles: Profile[] } & StackProps

export const Following: React.FC<FollowingProps> = ({ profiles, ...stackProps }) => (
  <Stack
    as="section"
    bg="mode.backgroundAlt"
    borderColor="mode.border"
    borderWidth="1px"
    direction="row"
    overflow="hidden"
    px={2}
    py={4}
    {...stackProps}
  >
    {profiles.map(({ profile_picture, profile_name }) => (
      <Stack key={profile_name} align="center" cursor="pointer" justify="center">
        <Box layerStyle="avatarBorder">
          <Avatar bg="mode.secondary" name={profile_name} size="lg" src={profile_picture} />
        </Box>
        <Text fontSize="xs" overflow="hidden" textAlign="center" textOverflow="ellipsis" w={16} whiteSpace="nowrap">
          {profile_name}
        </Text>
      </Stack>
    ))}
  </Stack>
)

export const FollowingSkeleton: React.FC<StackProps> = (stackProps) => (
  <Stack
    as="section"
    bg="mode.backgroundAlt"
    borderColor="mode.border"
    borderWidth="1px"
    direction="row"
    layerStyle="loading"
    overflow="hidden"
    px={2}
    py={4}
    {...stackProps}
  >
    {new Array(8).fill(0).map((_, i) => (
      <Stack key={i} align="center" cursor="pointer" justify="center" spacing={3}>
        <Box borderColor="mode.text1" layerStyle="avatarBorder">
          <Avatar bg="mode.text1" name=" " size="lg" />
        </Box>
        <Box layerStyle="skeleton" w={16} />
      </Stack>
    ))}
  </Stack>
)
