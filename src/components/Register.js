import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { register } from '../actions'

const Register = (props) => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  const { history } = props

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(user, history))
  }
  return (
    <div>
      {userState.isLoading && <CircularProgress />}
      <p>Register component</p>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          value={user.email}
          onChange={handleChange}
          name='email'
          required
        />

        <input
          type='text'
          placeholder='username'
          value={user.username}
          onChange={handleChange}
          name='username'
          required
        />

        <input
          type='password'
          placeholder='password'
          value={user.password}
          onChange={handleChange}
          name='password'
          required
        />

        <input
          type='password'
          placeholder='confirm password'
          value={user.password2}
          onChange={handleChange}
          name='password2'
          required
        />

        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
