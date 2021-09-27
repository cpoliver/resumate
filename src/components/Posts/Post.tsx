import { Avatar, Box, Image, Link, Spacer, Stack, StackProps, Text } from "@chakra-ui/react"
import React from "react"

import { CommentButton, DirectMessagesButton, EllipsisButton } from "../Button"
import { LikeButton, SaveButton } from "../ToggleButton"
import { PostFooter as Footer } from "./PostFooter"
import type { Comment as CommentProps, Date, Post as PostProps } from "api/data"

export const Post: React.FC<PostProps> = (post) => (
  <Stack bg="mode.backgroundAlt" borderColor="mode.border" borderWidth="1px" flex={1} fontSize="sm" spacing={0}>
    <Header {...post} />
    <Image alt={post.post_text} objectFit="cover" src={post.post_image} />
    <ActionButtons />
    <Likes {...post} />
    <Comment px={4} py={1} text={post.post_text} username={post.profile_name} />
    <Comments {...post} />
    <Footer />
  </Stack>
)

const Header: React.FC<PostProps> = ({ profile_name, profile_picture }) => (
  <Stack align="center" bg="mode.background" direction="row" p={2} spacing={3}>
    <Box layerStyle="avatarBorder">
      <Avatar name={profile_name} size="sm" src={`https://i.pravatar.cc/80?u=${profile_name}`} />
    </Box>
    <Link flex={1} variant="profile">
      {/* real Instagram uses the name, not fullname */}
      {profile_name}
    </Link>
    <EllipsisButton />
  </Stack>
)

export const ActionButtons: React.FC<StackProps> = (stackProps) => (
  <Stack direction="row" p={1} spacing={0} {...stackProps}>
    <LikeButton />
    <CommentButton />
    <DirectMessagesButton />
    <Spacer />
    <SaveButton />
  </Stack>
)

const Likes: React.FC<PostProps> = ({ likes = [] }) =>
  likes.length > 0 ? (
    <Text cursor="pointer" fontWeight="semibold" px={4}>
      {likes.length} likes
    </Text>
  ) : null

export const Comment: React.FC<StackProps & CommentProps & { canLike?: boolean }> = ({
  username,
  text,
  canLike = false,
  ...stackProps
}) => (
  <Stack direction="row" spacing={1} {...stackProps}>
    <Link variant="profile">{username}</Link>
    <Text flex={1}>{text}</Text>
    {canLike && <LikeButton iconProps={{ boxSize: 3 }} size="xs" />}
  </Stack>
)

const getDaysAgo = ({ date }: Date) => {
  const oneDayInMs = 1000 * 60 * 60 * 24
  const diffInTime = new Date().getTime() - new Date(date).getTime()

  return Math.round(diffInTime / oneDayInMs)
}

const Comments: React.FC<PostProps> = ({ date, comments = [] }) =>
  comments.length > 0 ? (
    <Stack pb={4} pl={4} pr={2} spacing={1}>
      {comments.length > 2 && (
        <Link _hover={{ textDecoration: "none" }} color="mode.text3">
          View all {comments.length} comments
        </Link>
      )}

      <Stack spacing={0}>
        {comments.slice(0, 2).map((comment, i) => (
          <Comment key={i} {...comment} canLike />
        ))}
      </Stack>

      <Link color="mode.text3" fontSize=".65rem" textTransform="uppercase">
        {getDaysAgo(date)} days ago
      </Link>
    </Stack>
  ) : null
