import React from 'react'
import {Switch,Route,Link} from "react-router-dom"
import Home from './pages/home'
import { routes } from './constants/routes'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Browse from './pages/browse'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

function App() {
 const user={}
  return (
    <>
    <Switch>
      
       <IsUserRedirect user={user} loggedInPath={routes.browse} path={routes.signin}>
       <Signin/>
       </IsUserRedirect>
       <IsUserRedirect user={user} loggedInPath={routes.browse} path={routes.signup}>
       <Signup/>
       </IsUserRedirect>
    
      <IsUserRedirect user={user} loggedINPath={routes.browse} path={routes.home} exact >
       <Home/>
      </IsUserRedirect>
      <ProtectedRoute user={user} path={routes.browse}>
        <Browse/>
      </ProtectedRoute>
            
    </Switch>
     
    </>
  )
}

export default App
