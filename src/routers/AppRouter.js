import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
