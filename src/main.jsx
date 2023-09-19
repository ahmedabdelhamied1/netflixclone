import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyle} from "./glopalstyles"
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
   <Router>
    <GlobalStyle/>
      <App />
   </Router>
)
