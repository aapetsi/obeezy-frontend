import React from 'react'
import AppRouter from '../routers/AppRouter'
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    </React.StrictMode>
  )
}

export default App
