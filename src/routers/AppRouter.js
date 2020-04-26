import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Header from '../components/Header'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
