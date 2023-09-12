import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components'
import { ThemeProvider } from 'providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)