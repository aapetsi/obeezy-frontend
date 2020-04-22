import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <p>Login component</p>
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
          type='password'
          placeholder='password'
          value={user.password}
          onChange={handleChange}
          name='password'
          required
        />

        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
