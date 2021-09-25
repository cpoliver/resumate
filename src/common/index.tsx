import posts from "data/posts.json"
import profiles from "data/profiles.json"

export { posts }

export const post = posts[0]

export const profile = profiles[0]

export type Profile = typeof profile

export type Post = typeof post

export type Comment = typeof post.comments[0]

export type Like = typeof post.likes[0]

export type Date = typeof post.date
