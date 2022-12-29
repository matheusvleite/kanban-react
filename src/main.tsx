import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App'
import { GlobalStyle } from './globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
