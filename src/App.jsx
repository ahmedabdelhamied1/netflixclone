import React from 'react'
import {Switch,Route,Link} from "react-router-dom"
import Home from './pages/home'
import { routes } from './constants/routes'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Browse from './pages/browse'

function App() {

  return (
    <>
    <Switch>
       <Route exact path={routes.signin}>
        <Signin/>
       </Route>
       <Route exact path={routes.signup}>
        <Signup/>
       </Route>
       <Route exact path={routes.browse}>
        <Browse/>
       </Route>
        <Route exact path={routes.home}>
         <Home/>
        </Route>
    </Switch>
     
    </>
  )
}

export default App
