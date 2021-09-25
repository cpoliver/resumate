import { Avatar, IconButton, IconButtonProps } from "@chakra-ui/react"
import React from "react"

import * as Icon from "../Icon/Icon"

export type ButtonProps = Omit<IconButtonProps, "aria-label">

export const ActivityFeedButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Activity feed" icon={<Icon.HeartOutlineIcon />} />
)

export const CommentButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Comment" icon={<Icon.CommentIcon />} />
)

export const DirectMessagesButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Direct messages" icon={<Icon.DirectMessagesIcon />} />
)

export const EllipsisButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="MoreOptions" icon={<Icon.EllipsisIcon />} />
)

export const EmojiButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Emoji" icon={<Icon.EmojiIcon />} />
)

export const FindPeopleButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Find people" icon={<Icon.FindPeopleIcon />} />
)

export const HomeButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Home" icon={<Icon.HomeIcon />} />
)

export const NewPostButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="New post" icon={<Icon.NewPostIcon />} />
)

export const ProfileButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Activity feed" icon={<Avatar name="C O" size="xs" />} />
)
