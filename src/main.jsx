import React from 'react'
import ReactDOM from 'react-dom/client'
import "normalize.css"
import {GlobalStyle} from "./glopalstyles"
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom"
import FirebaseProvider from './context/firebase'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <FirebaseProvider >

    <GlobalStyle/>
      <App />
      </FirebaseProvider>
   </Router>
 
)
