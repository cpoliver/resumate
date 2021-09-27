import { IconButton, IconButtonProps, IconProps } from "@chakra-ui/react"
import React from "react"

import * as Icon from "../Icon"

export type ButtonProps = {
  buttonProps?: Omit<IconButtonProps, "aria-label">
  iconProps?: IconProps
}

export const ActivityFeedButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton
    size="md"
    {...buttonProps}
    aria-label="Activity feed"
    icon={<Icon.HeartOutlineIcon {...(iconProps as any)} />}
  />
)

export const CommentButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton size="md" {...buttonProps} aria-label="Comment" icon={<Icon.CommentIcon {...(iconProps as any)} />} />
)

export const DirectMessagesButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton
    size="md"
    {...buttonProps}
    aria-label="Direct messages"
    icon={<Icon.DirectMessagesIcon {...(iconProps as any)} />}
  />
)

export const EllipsisButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton
    size="md"
    {...buttonProps}
    aria-label="More options"
    icon={<Icon.EllipsisIcon {...(iconProps as any)} />}
  />
)

export const EmojiButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton size="md" {...buttonProps} aria-label="Emoji" icon={<Icon.EmojiIcon {...(iconProps as any)} />} />
)

export const FindPeopleButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton
    size="md"
    {...buttonProps}
    aria-label="Find people"
    icon={<Icon.FindPeopleIcon {...(iconProps as any)} />}
  />
)

export const HomeButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton size="md" {...buttonProps} aria-label="Home" icon={<Icon.HomeIcon {...(iconProps as any)} />} />
)

export const NewPostButton: React.FC<ButtonProps> = ({ buttonProps, iconProps }) => (
  <IconButton size="md" {...buttonProps} aria-label="New post" icon={<Icon.NewPostIcon {...(iconProps as any)} />} />
)
