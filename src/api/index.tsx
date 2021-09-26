import axios from "axios"
import { useQuery } from "react-query"

import { Post, Profile } from "./data"

const API_URL = "https://flynn.boolean.careers/exercises/api/boolgram"

export const useGetProfiles = () =>
  useQuery<Profile[], Error>("profiles", async () => {
    const { data } = await axios.get(`${API_URL}/profiles`)

    return data
  })

export const useGetPosts = () =>
  useQuery<Post[], Error>("posts", async () => {
    const { data } = await axios.get(`${API_URL}/posts`)

    return data
  })
