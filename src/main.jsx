import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import './assets/HeaderStyle.css'
import './assets/ContentStyle.css'
import './assets/FooterStyle.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
