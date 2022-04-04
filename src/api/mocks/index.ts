import { rest } from "msw"

import { posts } from "../data"
import { POSTS_URL } from "common/constants"

const ONE_HOUR_IN_MS = 1000 * 60 * 60 * 60

export const handlers = {
  success: [rest.get(POSTS_URL, (req, res, ctx) => res(ctx.json(posts)))],
  loading: [rest.get(POSTS_URL, (req, res, ctx) => res(ctx.delay(ONE_HOUR_IN_MS), ctx.json(posts)))],
  error: [
    rest.get(POSTS_URL, (req, res, ctx) =>
      res(
        ctx.status(500),
        ctx.json({
          name: "Internal Server Error",
          message: "Something went wrong fetching your feed.",
        })
      )
    ),
  ],
  noData: [rest.get(POSTS_URL, (req, res, ctx) => res(ctx.json([])))],
}
