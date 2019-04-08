import { fetchGet } from '../utils/fetchUtils'

function getAllPosts() {
  return fetchGet('/posts').then(response => {
    return response
  })
}

export default {
  getAllPosts
}
