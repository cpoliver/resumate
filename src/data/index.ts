import * as posts from "./posts.json"
import * as profiles from "./profiles.json"

const post = posts[0]

export type Post = typeof post

const profile = profiles[0]

export type Profile = typeof profile

export const mock = {
  post,
  posts,
  profile,
  profiles,
}
