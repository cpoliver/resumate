import { Stack } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage"
import { Post } from "./Post"
import { PostSkeleton } from "./PostSkeleton"
import { useGetPosts } from "api"

const PLACEHOLDER_COUNT = 12

export const Posts: React.FC = () => {
  const { data: posts = [], error, isLoading } = useGetPosts()

  if (error) return <ErrorMessage {...error} />

  if (isLoading)
    return (
      <Stack>
        {new Array(PLACEHOLDER_COUNT).fill(0).map((_, i) => (
          <PostSkeleton key={i} />
        ))}
      </Stack>
    )

  return (
    <Stack>
      {posts.map((post) => (
        <Post key={post.date.date} {...post} />
      ))}
    </Stack>
  )
}
