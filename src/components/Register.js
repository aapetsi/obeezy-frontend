import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  makeStyles,
  CircularProgress,
  Button,
  FormControl,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core'
import { AccountCircle, AlternateEmail, Lock } from '@material-ui/icons'
import { register } from '../actions'

const useStyles = makeStyles({
  inputs: {
    letterSpacing: '1.1px',
  },
})

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
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor='user-email'>Email</InputLabel>
          <Input
            onChange={handleChange}
            name='email'
            required={true}
            autoFocus={true}
            value={user.email}
            error={userState.errors.length > 0 ? true : false}
            id='user-email'
            startAdornment={
              <InputAdornment position='start'>
                <AlternateEmail />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='user-username'>Username</InputLabel>
          <Input
            onChange={handleChange}
            name='username'
            required={true}
            value={user.username}
            id='user-username'
            startAdornment={
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='user-password'>Password</InputLabel>
          <Input
            onChange={handleChange}
            name='password'
            required={true}
            value={user.password}
            id='user-password'
            type='password'
            startAdornment={
              <InputAdornment position='start'>
                <Lock />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='user-confirm-password'>
            Confirm Password
          </InputLabel>
          <Input
            onChange={handleChange}
            name='password2'
            required={true}
            value={user.password2}
            type='password'
            startAdornment={
              <InputAdornment position='start'>
                <Lock />
              </InputAdornment>
            }
          />
        </FormControl>

        <br />

        <Button type='submit' variant='contained' color='primary'>
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register
