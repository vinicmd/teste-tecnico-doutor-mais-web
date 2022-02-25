import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global'
//import App from './App'
import { Courses } from './screens/Courses'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Courses />
  </React.StrictMode>,
  document.getElementById('root')
)
