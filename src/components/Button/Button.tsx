import { Avatar, Icon, IconButton, IconButtonProps } from "@chakra-ui/react"
import React from "react"

const HeartIcon = (
  <Icon color="currentColor" viewBox="0 0 48 48" width="22">
    <path
      clip-rule="evenodd"
      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
      fill-rule="evenodd"
    ></path>
  </Icon>
)

export type ButtonProps = Omit<IconButtonProps, "aria-label">

export const ActivityFeedButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Activity feed" icon={HeartIcon} variant="post" />
)

export const CommentButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="Comment"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <path
          clip-rule="evenodd"
          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
          fill-rule="evenodd"
        ></path>
      </Icon>
    }
    variant="post"
  />
)

export const DirectMessagesButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="Direct messages"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
      </Icon>
    }
    variant="nav"
  />
)

export const EllipsisButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="MoreOptions"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6.5" cy="12" r="1.5"></circle>
        <circle cx="17.5" cy="12" r="1.5"></circle>
      </Icon>
    }
    variant="nav"
  />
)

export const EmojiButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="Emoji"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
        <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
      </Icon>
    }
    variant="nav"
  />
)

export const FindPeopleButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="Find people"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <path
          clip-rule="evenodd"
          d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
          fill-rule="evenodd"
        ></path>
      </Icon>
    }
    variant="nav"
  />
)

export const HeartButton: React.FC<IconButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} icon={HeartIcon} variant="nav" />
)

export const HomeButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="Home"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
      </Icon>
    }
    variant="nav"
  />
)

export const NewPostButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton
    {...buttonProps}
    aria-label="New post"
    icon={
      <Icon color="currentColor" viewBox="0 0 48 48" width="22">
        <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path>
        <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
        <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path>
      </Icon>
    }
    variant="nav"
  />
)

export const ProfileButton: React.FC<ButtonProps> = (buttonProps) => (
  <IconButton {...buttonProps} aria-label="Activity feed" icon={<Avatar name="C O" size="xs" />} variant="nav" />
)
