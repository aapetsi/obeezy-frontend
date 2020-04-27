import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CircularProgress,
  Button,
  FormControl,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
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
      <Typography variant='h5' gutterBottom>
        CREATE A NEW ACCOUNT
      </Typography>
      <FormControl>
        <InputLabel htmlFor='input-with-icon-adornment'>Email</InputLabel>
        <Input
          onChange={handleChange}
          name='email'
          required={true}
          autoFocus={true}
          error={userState.errors.length > 0 ? true : false}
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          }
        />

        {/* <input
          type='email'
          placeholder='email'
          value={user.email}
          onChange={handleChange}
          name='email'
          required
        /> */}

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

        <Button
          onClick={handleSubmit}
          type='submit'
          variant='contained'
          color='primary'
        >
          Register
        </Button>
      </FormControl>
    </div>
  )
}

export default Register
