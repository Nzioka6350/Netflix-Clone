import React from 'react'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="loginForm">
        <h1>Sign Up</h1>
        <form>
          <input type='text' name='name' placeholder='Enter your name..'/>
          <input type='email' name='email' placeholder='Enter your email ....'/>
          <input type='password' name='password' placeholder='Enter your password'/>
          <button>Sign Up</button>
          <div className="formHelp">
            <div className="remember">
                 <input type='checkbox'/>
                 <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
           
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login