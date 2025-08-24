import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/globalStyles.css'
import App from './App/App.jsx'
import './Styles/animations.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
