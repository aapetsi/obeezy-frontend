import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <p>Login component</p>
      <form>
        <input
          type='text'
          placeholder='email'
          value={user.email}
          onChange={handleChange}
          name='email'
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
      </form>
    </div>
  )
}

export default Login
