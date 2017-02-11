import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const APIKEY = '?key=dooodadoooda'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${APIKEY}`)
  return {
type: FETCH_POSTS,
    payload: request
  }
}