import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './config/Redux'

function App() {

  return (
    <Provider store={store} >
      <div className="App">
        <h1>hAhAHAHHA</h1>
      </div>
    </Provider>
  )
}

export default App
