import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global'
//import App from './App'
//import { Courses } from './screens/Courses'
import { NewCourse } from './screens/NewCourse'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <NewCourse />
  </React.StrictMode>,
  document.getElementById('root')
)
