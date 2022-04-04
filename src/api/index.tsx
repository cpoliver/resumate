import axios, { AxiosError } from "axios"
import { useQuery } from "react-query"

import { Post } from "./data"
import { API_URL } from "common/constants"

export * from "./data"

export const useGetPosts = () =>
  useQuery<Post[], AxiosError>("posts", async () => {
    const { data } = await axios.get(`${API_URL}/posts`)

    return data
  })
