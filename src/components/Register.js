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
import { register, clearErrors } from '../actions'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  form: {
    width: '70%',
    height: '65vh',
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
    marginTop: '20%',
    marginBottom: '20%',
  },
  error: {
    color: 'red',
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
    dispatch(clearErrors())
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(user, history))
  }

  const classes = useStyles()

  return (
    <div>
      <Typography align='center' variant='h6' gutterBottom>
        Create an account
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        {userState.isLoading && <CircularProgress />}
        <FormControl>
          <InputLabel htmlFor='user-email'>Email</InputLabel>
          <Input
            className={classes.inputs}
            onChange={handleChange}
            name='email'
            required
            autoFocus
            value={user.email}
            id='user-email'
            type='email'
            startAdornment={
              <InputAdornment position='start'>
                <AlternateEmail />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        {userState.errors.email && (
          <Typography className={classes.error} variant='caption'>
            {userState.errors.email}
          </Typography>
        )}

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
        {userState.errors.username && (
          <Typography className={classes.error} variant='caption'>
            {userState.errors.username}
          </Typography>
        )}

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
        {userState.errors.password && (
          <Typography className={classes.error} variant='caption'>
            {userState.errors.password}
          </Typography>
        )}

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
        {userState.errors.password2 && (
          <Typography className={classes.error} variant='caption'>
            {userState.errors.password2}
          </Typography>
        )}

        <br />

        <Button
          className={classes.btn}
          type='submit'
          variant='contained'
          color='primary'
        >
          Register
        </Button>
        <Typography>Already have an account?</Typography>
        <Typography>
          Click <Link to='/'>here</Link> to login
        </Typography>
      </form>
    </div>
  )
}

export default Register
