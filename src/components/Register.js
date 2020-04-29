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
  form: {
    width: '70%',
    height: '50vh',
    margin: '0 auto',
    marginTop: '30px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 11px -2px rgba(0,0,0,0.55)',
  },
  inputs: {
    marginBottom: '15px',
  },
  btn: {
    marginTop: '40px',
  },
})

const Register = (props) => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  const { history } = props

  const [user, setUser] = useState({
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: '123456',
    password2: '123456',
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(user, history))
  }

  const classes = useStyles()

  return (
    <div>
      {userState.isLoading && <CircularProgress />}
      <Typography align='center' variant='h6' gutterBottom>
        Create an account
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor='user-email'>Email</InputLabel>
          <Input
            className={classes.inputs}
            onChange={handleChange}
            name='email'
            required={true}
            autoFocus={true}
            value={user.email}
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
            className={classes.inputs}
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
            className={classes.inputs}
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
            className={classes.inputs}
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

        <Button
          className={classes.btn}
          type='submit'
          variant='contained'
          color='primary'
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register
