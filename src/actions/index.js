import {
  REGISTER,
  LOADING,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOGIN,
} from '../action-types'
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
      dispatch(clearErrors())
      history.push('/dashboard')
    })
    .catch((err) => {
      const errors = err.response.data
      dispatch(setLoading(false))
      dispatch(setErrors(errors))
    })
}

export const login = (userData, history) => (dispatch) => {
  dispatch(setLoading(true))
  axios
    .post(`${api}/api/users/login`, userData)
    .then((res) => {
      const token = res.data.token
      const userInfo = res.data.user
      localStorage.setItem('token', token)
      dispatch({ type: LOGIN, payload: userInfo })
      dispatch(setLoading(false))
      dispatch(clearErrors())
      history.push('/dashboard')
    })
    .catch((err) => {
      const errors = err.response.data
      dispatch(setLoading(false))
      dispatch(setErrors(errors))
    })
}

export const logout = (history) => {
  localStorage.removeItem('token')
  history.push('/')
}

export const setLoading = (isLoading) => ({
  type: LOADING,
  payload: isLoading,
})

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})
