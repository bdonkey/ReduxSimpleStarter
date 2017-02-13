import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = "FETCH_POST"

const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const APIKEY = '?key=dooodadoooda'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${APIKEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${APIKEY}`, props)
  return {
    type: CREATE_POST,
    payload: request
  }

}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${APIKEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}