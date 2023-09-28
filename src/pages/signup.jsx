import React, { useState } from 'react'
import Form from '../components/forms'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Headercontainer from '../containers/headercontainer'
import {routes} from "../../src/constants/routes.jsx"
import { Logo } from '../components/header/styles/header'
import { useHistory } from "react-router-dom";
import { useFirebaseContext } from '../context/firebase'
export default function Signup()
{
    const history=useHistory()
    const [error,setError]=useState(null)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const isInvalid=firstName ==='' || email ==='' || password===''
    const {app}=useFirebaseContext()
    async function handleSignUp(e)
    {
        e.preventDefault()
       console.log('sign up');
       try{
        await app.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random()*5)+1
              })
          }).then(()=>{
            history.push("/browse")
          })
          
          
       }catch(error)
       {
        setEmail('')
        setPassword('')
        setError(error.message)
    }}
    return(
        <>
    <Headercontainer>
           <Headercontainer.Base>
                <Headercontainer.Logo to={routes.home}>
                 <Logo src='../../../images/misc/logo.svg' alt="netflix logo"/>
                </Headercontainer.Logo>
                <Headercontainer.Buttonlink to={routes.signin}>
                    Sign in
                </Headercontainer.Buttonlink>
        
            </Headercontainer.Base>
            <Form>
           <Form.Title>
           Sign Up
           </Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Formcontent method={'POST'} onSubmit={handleSignUp}>
            <Form.Input 
                 type="text"
                 placeholder="First Name"
                 onChange={({target})=>setFirstName(target.value)}
                 value={firstName}

                />
                <Form.Input 
                 type="email"
                 placeholder="Email adress"
                 onChange={({target})=>setEmail(target.value)}
                 value={email}

                />
                <Form.Input
                type="password"
                placeholder="password"
                onChange={({target})=>setPassword(target.value)}
                value={password}
                />
                <Form.Button type="submit" disabled={isInvalid}>Sign up</Form.Button>
            </Form.Formcontent>
        
            <Form.Text>
            Already have an account? <Link to={routes.signin}>Sign in.</Link>
            </Form.Text>
            <Form.Smalltext>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#">Learn more.</Link></Form.Smalltext>
    </Form>
    </Headercontainer>
    
    <Footer/>
    </>
    )
}