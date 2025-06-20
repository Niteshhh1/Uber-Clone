import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserReg from "./pages/UserReg"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainReg from "./pages/CaptainReg"
import HomeLand from "./pages/HomeLand"
import UserProtect from "./pages/UserProtect"
import UserLogout from "./pages/UserLogout"
import HomeCaptain from "./pages/HomeCaptain"
import CaptainProtect from "./pages/CaptainProtect"
import Riding from "./pages/Riding"
import CaptainRiding from "./pages/CaptainRiding"


function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path='/riding' element={<Riding/>}/>
      <Route path="/user-reg" element={<UserReg/>}/>
      <Route path="/captain-login" element={<CaptainLogin/>}/>
      <Route path="/captain-reg" element={<CaptainReg/>}/>
      <Route path="/home" element={
        <UserProtect>
          <HomeLand/>
        </UserProtect>
      }/>
      <Route path="/user/logout" element={
        <UserProtect>
          <UserLogout/>
        </UserProtect>
      }/>
      <Route path='/captain/home' element={
        <CaptainProtect>
          <HomeCaptain/>
        </CaptainProtect>
      }/>
      <Route path="/captain/riding" element={<CaptainRiding/>}/>
    </Routes>
   </div>
  )
}

export default App
