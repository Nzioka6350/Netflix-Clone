import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase'

function App() {
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged in")
        navigate('/')
      }else{
        console.log("Logged out")
        navigate('/login')
      }
    })

  },[])
  return (
            <div>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Player/:id' element={<Player/>}/>
              </Routes>
            </div>
  )
}

export default App
