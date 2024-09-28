import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../assets/css/index.css'
import '../assets/css/inputs.css'
import '../assets/css/cards.css'
import '../assets/css/buttons.css'
import '../assets/css/labels.css'
import '../assets/css/loader.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
