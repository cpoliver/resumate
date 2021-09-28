import axios from "axios"
import { useQuery } from "react-query"

import { Post, Profile, UserProfile } from "./data"
import { API_URL } from "common/constants"

export * from "./data"

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

export const useGetUserProfile = () =>
  useQuery<UserProfile, Error>("userProfile", async () => {
    const { data } = await axios.get(`${API_URL}/posts`)

    // get the user info from the first post to simulate getting the logged in user
    const { profile_name, profile_fullname, profile_picture } = data[0] as UserProfile

    return { profile_name, profile_fullname, profile_picture }
  })
