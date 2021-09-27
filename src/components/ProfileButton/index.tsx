import { Avatar, IconButton, IconButtonProps, IconProps } from "@chakra-ui/react"
import React from "react"

import { useGetUserProfile } from "api"

export type ButtonProps = {
  buttonProps?: Omit<IconButtonProps, "aria-label">
  iconProps?: IconProps
}

export const ProfileButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => {
  const { data } = useGetUserProfile()

  return (
    <IconButton
      size="md"
      {...buttonProps}
      aria-label="Profile menu"
      icon={
        <Avatar
          bg="mode.secondary"
          name={data?.profile_fullname ?? " "}
          size="xs"
          src={`https://i.pravatar.cc/80?u=${data?.profile_name ?? "fallback"}`}
        />
      }
    />
  )
}
