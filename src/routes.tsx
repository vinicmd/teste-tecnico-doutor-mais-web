import {
  BrowserRouter as Router,
  Route,
  Switch, } from "react-router-dom";
import { Course } from "./screens/Course";

import { Courses } from './screens/Courses'
import { NewCourse } from './screens/NewCourse'

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route component={Courses} path='/' exact/>
        <Route component={NewCourse} path='/curso/novo' />
        <Route component={Course} path='/curso/:id' />
      </Switch>
    </Router>
  )

}
