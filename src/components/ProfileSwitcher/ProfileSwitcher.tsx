import { Avatar, Box, Button, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { UserProfile, useGetUserProfile } from "api"

export const ProfileSwitcher: React.FC = () => {
  const { data, error, isLoading } = useGetUserProfile()

  if (isLoading) return <ProfileSwitcherLoading />

  if (error) return <ErrorMessage {...error} />

  return <ProfileSwitcherLoaded {...data!} />
}

export const ProfileSwitcherLoaded: React.FC<UserProfile> = ({ profile_name, profile_fullname }) => (
  <Stack align="center" direction="row" fontSize="sm" mt={6} spacing={4}>
    <Avatar
      bg="mode.secondary"
      cursor="pointer"
      name={profile_fullname}
      src={`https://i.pravatar.cc/80?u=${profile_name}`}
    />
    <Stack flex={1} spacing={0}>
      <Text cursor="pointer" fontWeight="semibold">
        {profile_name}
      </Text>
      <Text color="mode.text2">{profile_fullname}</Text>
    </Stack>
    <Button variant="link">Switch</Button>
  </Stack>
)

export const ProfileSwitcherLoading: React.FC = () => (
  <Stack align="center" direction="row" fontSize="sm" layerStyle="loading" mt={6} spacing={4}>
    <Avatar bg="mode.text1" name=" " />
    <Stack flex={1} spacing={1}>
      <Box layerStyle="skeleton" w={16} />
      <Box layerStyle="skeleton" w={24} />
    </Stack>
    <Box layerStyle="skeleton" w={10} />
  </Stack>
)
