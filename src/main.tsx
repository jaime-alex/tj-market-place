import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './common/css/inputs.css'
import './common/css/cards.css'
import './common/css/buttons.css'
import './common/css/labels.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
