import { Avatar, Button, Stack, Text } from "@chakra-ui/react"
import React from "react"

type ProfileSwitcherProps = {
  profile_name: string
  profile_fullname: string
  profile_picture?: string
}

export const ProfileSwitcher: React.FC<ProfileSwitcherProps> = ({
  profile_name,
  profile_fullname,
  profile_picture,
}) => (
  <Stack align="center" direction="row" fontSize="sm" mt={6} spacing={4}>
    <Avatar bg="secondary" cursor="pointer" name={profile_fullname} src={profile_picture} />
    <Stack flex={1} spacing={0}>
      <Text cursor="pointer" fontWeight="semibold">
        {profile_name}
      </Text>
      <Text color="text2">{profile_fullname}</Text>
    </Stack>
    <Button _hover={{ bg: "none" }} color="primary" size="xs" variant="ghost">
      Switch
    </Button>
  </Stack>
)
