import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Welcome from './components/WelcomePage/WelcomePage'
import SampleLogin from './components/Login/SampleLogin'

function App() {
  return (
    <><NavBar /><Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/sample" element={<SampleLogin />} />
    </Routes></>
  )
}

export default App