import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { routes } from '../constants/routes' 

export const IsUserRedirect=({user,loggedINPath,children,...restProps})=>{

    return(
        <Route
        {...restProps}
        render={
            ()=>{
                if(!user)
                {
                    return children
                }
                if(user)
                {
                    return <Redirect to={{pathname:loggedINPath}}/>
                }
                return null
            }
        }
        />
    )
}
export const ProtectedRoute=({user,children,...restProps})=>
{
   return (
    <Route 
    {...restProps}
    render={
        ({location})=>{
        if(!user)
        {
          return <Redirect to ={{pathname:routes.signin} } state={{from:location.pathname}}/>
        }
        if(user)
        {
         return children
        }
        return null
        }
    }
    />
   )
}