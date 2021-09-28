import { Stack, StackProps } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Post } from "./Post"
import { PostSkeleton } from "./PostSkeleton"
import { Post as PostProps, useGetPosts } from "api"

export const Posts: React.FC<StackProps> = (stackProps) => {
  const { data = [], error, isLoading, refetch } = useGetPosts()

  if (isLoading) return <PostsLoading {...stackProps} />

  if (error) return <ErrorMessage {...error.response?.data} onRetry={refetch} />

  return <PostsLoaded {...stackProps} posts={data} />
}

type PostsLoadedProps = { posts: PostProps[] } & StackProps

const PostsLoaded: React.FC<PostsLoadedProps> = ({ posts, ...stackProps }) => (
  <Stack {...stackProps}>
    {posts.map((post) => (
      <Post key={post.date.date} {...post} />
    ))}
  </Stack>
)

const PLACEHOLDER_COUNT = 12

const PostsLoading: React.FC<StackProps> = (stackProps) => (
  <Stack {...stackProps}>
    {new Array(PLACEHOLDER_COUNT).fill(0).map((_, i) => (
      <PostSkeleton key={i} />
    ))}
  </Stack>
)
