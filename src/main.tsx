import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App'
import './index.css'
import PWABadge from './components/ui/pwa-badge/PWABadge'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <PWABadge/>
  </React.StrictMode>,
)
