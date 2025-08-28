import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import './styles/App.css'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  )
}

export default App
