import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './presentation/shared/auth-context/auth-context'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <App />

    </AuthProvider>
  </StrictMode>,
)
