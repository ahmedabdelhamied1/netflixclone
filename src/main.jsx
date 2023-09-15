import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyle} from "./glopalstyles"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
