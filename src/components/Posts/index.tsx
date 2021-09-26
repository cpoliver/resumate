import { Stack } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage"
import { Post } from "./Post"
import { PostSkeleton } from "./PostSkeleton"
import { useGetPosts } from "api"
import { Post as PostProps } from "api/data"

export const Posts: React.FC = () => {
  const { data = [], error, isLoading } = useGetPosts()

  if (error) return <ErrorMessage {...error} />

  if (isLoading) return <PostsLoading />

  return <PostsLoaded posts={data} />
}

export const PostsLoaded: React.FC<{ posts: PostProps[] }> = ({ posts }) => (
  <Stack>
    {posts.map((post) => (
      <Post key={post.date.date} {...post} />
    ))}
  </Stack>
)

const PLACEHOLDER_COUNT = 12

export const PostsLoading: React.FC = () => (
  <Stack>
    {new Array(PLACEHOLDER_COUNT).fill(0).map((_, i) => (
      <PostSkeleton key={i} />
    ))}
  </Stack>
)
