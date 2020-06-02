import React, { useState } from 'react'
import {
  makeStyles,
  CircularProgress,
  Button,
  FormControl,
  Typography,
  InputLabel,
  Input,
  InputAdornment
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login } from '../actions'
import { AlternateEmail, Lock } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  form: {
    width: '70%',
    height: '50vh',
    margin: '0 auto',
    marginTop: '30px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 11px -2px rgba(0,0,0,0.55)'
  },
  inputs: {
    marginBottom: '30px',
    width: '400px'
  },
  btn: {
    marginTop: '10%',
    marginBottom: '10%'
  },
  error: {
    color: 'red'
  }
})

const Login = (props) => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  const { history } = props

  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    if (userState.errors.message) {
      dispatch(clearErrors())
    }
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user, history))
  }

  const classes = useStyles()

  return (
    <div>
      <Typography align='center' variant='h6' gutterBottom>
        Login to your account
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
              <InputAdornment positin='start'>
                <AlternateEmail />
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
            required
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

        <br />

        {userState.errors.message && (
          <Typography className={classes.error} variant='caption'>
            {userState.errors.message}
          </Typography>
        )}

        <br />

        <Button
          className={classes.btn}
          type='submit'
          variant='contained'
          color='primary'
        >
          Login
        </Button>

        <Typography>Don't have an account yet?</Typography>
        <Typography>
          Click <Link to='/register'>here</Link> to create one
        </Typography>
      </form>
    </div>
  )
}

export default Login
