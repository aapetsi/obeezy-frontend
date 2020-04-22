import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Header from '../components/Header'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
