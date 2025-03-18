import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import { login, signup } from '../../../firebase'
const Login = () => {
  const [signState,setSignState] = useState("Sign In")
  const [name, setName] =useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const userAuth = async(event)=>{
    event.preventDefault()
    if(signState === "Sign In"){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
  }

  return (
    
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="loginForm">
        <h1>{signState}</h1>  
        <form>
          {signState === "Sign Up" ? <input type='text' name='name' placeholder='Enter your name..' value={name} onChange={(e)=>{
            setName(e.target.value)
          }}/> : <></>}
          <input type='email' name='email' placeholder='Enter your email ....' value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <input type='password' name='password' placeholder='Enter your password' value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          <button onClick={userAuth} type='submit'>{signState}</button>
          <div className="formHelp">
            <div className="remember">
                 <input type='checkbox'/>
                 <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="form-switch">
          {signState === "Sign In"
          ?  <p>New to Netflix? <span onClick= {()=>{
            setSignState("Sign Up")
          }}>
            Sign Up Now</span></p> 
          :  <p>Already have account? <span onClick={()=>{
            setSignState("Sign In")
          }}>Sign In now</span></p>}
           
           </div>
      </div>
    </div>
  )
}

export default Login