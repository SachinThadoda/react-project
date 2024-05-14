import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Welcome from './Components/WelcomePage/WelcomePage'
import { AuthProvider } from './Components/Context/AuthContext'
import PrivateRoute from './Components/Context/PrivateRoute'
import LoadingSpinner from './Components/Context/LoadingSpinner'

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/spinner" element={<LoadingSpinner />} />
          <Route element={<PrivateRoute  />}>
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
    </AuthProvider>
  )
}

export default App