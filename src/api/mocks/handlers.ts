import { rest } from "msw"

import { posts, profiles } from "../data"
import { POSTS_URL, PROFILES_URL } from "common/constants"

const ONE_HOUR_IN_MS = 1000 * 60 * 60 * 60

export const handlers = {
  success: [
    rest.get(PROFILES_URL, (req, res, ctx) => res(ctx.json(profiles))),
    rest.get(POSTS_URL, (req, res, ctx) => res(ctx.json(posts))),
  ],
  loading: [
    rest.get(PROFILES_URL, (req, res, ctx) => res(ctx.delay(ONE_HOUR_IN_MS), ctx.json(profiles))),
    rest.get(POSTS_URL, (req, res, ctx) => res(ctx.delay(ONE_HOUR_IN_MS), ctx.json(posts))),
  ],
  error: [
    rest.get(PROFILES_URL, (req, res, ctx) =>
      res(
        ctx.status(500),
        ctx.json({
          name: "Internal Server Error",
          message: "Something went wrong fetching your suggestions.",
        })
      )
    ),
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
  noData: [
    rest.get(PROFILES_URL, (req, res, ctx) => res(ctx.json([]))),
    rest.get(POSTS_URL, (req, res, ctx) => res(ctx.json([]))),
  ],
}
