import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import { login, signup } from '../../../firebase'
const Login = () => {
  const [signState,setSignState] = useState("Sign In")
  const [name, setName] =useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return (
    
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="loginForm">
        <h1>{signState}</h1>
        
        <form>
          {signState === "Sign Up" ? <input type='text' name='name' placeholder='Enter your name..'/> : <></>}

          <input type='email' name='email' placeholder='Enter your email ....'/>
          <input type='password' name='password' placeholder='Enter your password'/>
          <button>{signState}</button>
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