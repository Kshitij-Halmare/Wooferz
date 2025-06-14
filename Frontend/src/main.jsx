import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Authentication/Authentication.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </AuthProvider>
  </BrowserRouter>
);