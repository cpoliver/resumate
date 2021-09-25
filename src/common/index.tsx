import posts from "data/posts.json"
import profiles from "data/profiles.json"

export { posts }

export const post = posts[0]

export const profile = profiles[0]

export type ProfileProps = typeof profile

export type PostProps = typeof post

export type CommentProps = typeof post.comments[0]

export type LikeProps = typeof post.likes[0]

export type DateProps = typeof post.date
