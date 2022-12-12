import axios from 'axios'
import { getValidationError, SnackbarUtilities } from '@/utilities'

export const AxiosInterceptor = () => {
  const updateHeader = (request) => {
    const token = ''
    const newHeader = {
      Authorization: token,
      'Content-Type': 'aplication/json'
    }
    request.headers = newHeader
    return request
  }
  axios.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request
    return updateHeader(request)
  })
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log("error", getValidationError(error.code))
      SnackbarUtilities.error(getValidationError(error.code))
      return Promise.reject(error)
    }
  )
}
