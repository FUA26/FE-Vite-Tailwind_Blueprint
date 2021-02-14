import React from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { store } from './config/Redux'

function App() {

  return (
    <Provider store={store} >
    <div className="App">

    </div>
    </Provider>
  )
}

export default App
