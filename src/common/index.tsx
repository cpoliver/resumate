import posts from "data/posts.json"
import profiles from "data/profiles.json"

const post = posts[0]
const profile = profiles[0]

export type Profile = typeof profile

export type Post = typeof post
