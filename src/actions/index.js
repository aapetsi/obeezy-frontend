import { REGISTER, LOADING, SET_ERRORS } from '../action-types'
import axios from 'axios'

const api = 'https://obeezy-reads.herokuapp.com'

export const register = (userData, history) => (dispatch) => {
  dispatch(setLoading(true))
  axios
    .post(`${api}/api/users/register`, userData)
    .then((res) => {
      const token = res.data.token
      const userInfo = res.data.user
      localStorage.setItem('token', token)
      dispatch({ type: REGISTER, payload: userInfo })
      dispatch(setLoading(false))
      history.push('/dashboard')
    })
    .catch((err) => {
      dispatch(setLoading(false))
      console.log(err.response)
    })
}

export const setLoading = (isLoading) => ({
  type: LOADING,
  payload: isLoading,
})

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  paylod: errors
})
