import posts from "./posts.json"

export { posts }

export const post = posts[0]

export type Post = typeof post
