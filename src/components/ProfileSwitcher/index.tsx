import { Avatar, Box, Button, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage"
import { useGetPosts } from "api"

type ProfileSwitcherProps = {
  profile_name: string
  profile_fullname: string
  profile_picture?: string
}

export const ProfileSwitcher: React.FC = () => {
  const { data = [], error, isLoading } = useGetPosts()

  if (error) return <ErrorMessage {...error} />

  if (isLoading) return <ProfileSwitcherLoading />

  return <ProfileSwitcherLoaded {...data[0]} />
}

export const ProfileSwitcherLoaded: React.FC<ProfileSwitcherProps> = ({
  profile_name,
  profile_fullname,
  profile_picture,
}) => (
  <Stack align="center" direction="row" fontSize="sm" mt={6} spacing={4}>
    <Avatar bg="mode.secondary" cursor="pointer" name={profile_fullname} src={profile_picture} />
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
