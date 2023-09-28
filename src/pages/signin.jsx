import React, { useState } from 'react'
import Form from '../components/forms'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Headercontainer from '../containers/headercontainer'
import {routes} from "../../src/constants/routes.jsx"
import { Logo } from '../components/header/styles/header'
import { useHistory } from "react-router-dom";
import { useFirebaseContext } from '../context/firebase'
export default function Signin()
{
    const history=useHistory()
    const [error,setError]=useState(null)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const isInvalid=email===''|| password===''
    const {app}=useFirebaseContext()
    async function handleSignIn(e)
    {
        e.preventDefault()
        try
        {
            setError(null)
            await app.auth().signInWithEmailAndPassword(email,password)
            console.log('done');
            history.push("/browse");
        }catch(error)
        { 
            setEmail('')
            setPassword('')
            setError(error.message)
            
        }
    }
   return (
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
           Sign In
           </Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Formcontent method={'POST'} onSubmit={handleSignIn}>
                <Form.Input 
                 type="email"
                 placeholder="Email or phone number"
                 onChange={({target})=>setEmail(target.value)}
                 value={email}

                />
                <Form.Input
                type="password"
                placeholder="password"
                onChange={({target})=>setPassword(target.value)}
                value={password}
                />
                <Form.Button type="submit" disabled={isInvalid}>Sign in</Form.Button>
            </Form.Formcontent>
           
            <Form.Help>
                <Form.Checkbox type="checkbox"/>
                <Form.Smalltext>Remember me</Form.Smalltext>
                <Form.Smalltext><Link to="#">Need help?</Link></Form.Smalltext>
            </Form.Help>
            <Form.Text>
            New to Netflix? <Link to={routes.signup}>Sign up now.</Link>
            </Form.Text>
            <Form.Smalltext>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#">Learn more.</Link></Form.Smalltext>
    </Form>
    </Headercontainer>
    
    <Footer/>
    </>
   )
}