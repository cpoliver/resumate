import posts from "./posts.json"
import profiles from "./profiles.json"
import suggestions from "./suggestions.json"

export { posts, profiles, suggestions }

export const post = posts[0]

export const profile = profiles[0]

export type Profile = typeof profile

export type UserProfile = Profile & Pick<Post, "profile_fullname">

export type Post = typeof post

export type Comment = typeof post.comments[0]

export type Like = typeof post.likes[0]

export type Date = typeof post.date
