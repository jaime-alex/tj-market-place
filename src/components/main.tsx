import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../css/index.css'
import '../css/inputs.css'
import '../css/cards.css'
import '../css/buttons.css'
import '../css/labels.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
