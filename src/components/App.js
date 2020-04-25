import React from 'react'
import AppRouter from '../routers/AppRouter'
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  )
}

export default App
