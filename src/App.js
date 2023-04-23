import './App.css'
import './style.scss'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import RegisterComponent from './pages/RegisterComponent'
import HomeComponent from './pages/HomeComponent'
import LoginComponent from './pages/LoginComponent'

import { UserContext } from './context/userContext'

import { useContext } from 'react'

function App() {
  const { currentUser } = useContext(UserContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <HomeComponent />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<LoginComponent />} />
          <Route path="register" element={<RegisterComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
