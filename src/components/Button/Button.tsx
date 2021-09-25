import { Avatar, IconButton, IconButtonProps } from "@chakra-ui/react"
import React from "react"

import * as Icon from "../Icon/Icon"

export type ButtonProps = Omit<IconButtonProps, "aria-label">

export const ActivityFeedButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Activity feed" icon={<Icon.HeartOutlineIcon />} variant="post" />
)

export const CommentButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Comment" icon={<Icon.CommentIcon />} variant="post" />
)

export const DirectMessagesButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Direct messages" icon={<Icon.DirectMessagesIcon />} variant="nav" />
)

export const EllipsisButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="MoreOptions" icon={<Icon.EllipsisIcon />} variant="nav" />
)

export const EmojiButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Emoji" icon={<Icon.EmojiIcon />} variant="nav" />
)

export const FindPeopleButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Find people" icon={<Icon.FindPeopleIcon />} variant="nav" />
)

export const HomeButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Home" icon={<Icon.HomeIcon />} variant="nav" />
)

export const NewPostButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="New post" icon={<Icon.NewPostIcon />} variant="nav" />
)

export const ProfileButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Activity feed" icon={<Avatar name="C O" size="xs" />} variant="nav" />
)
