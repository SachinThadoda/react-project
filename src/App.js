import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Welcome from './Components/WelcomePage/WelcomePage'

function App() {
  return (
    <><NavBar /><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes></>
  )
}

export default App