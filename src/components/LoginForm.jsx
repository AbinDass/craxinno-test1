import React from 'react'
import "./LoginForm.css";

const LoginForm = () => {
    function regusterSuccess(){
        alert(`register successfully `)
    }
  return (
    <div className="glass-container">
    <h1>Create your account</h1>
    <form action="">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <p>By clicking 'Register' you agree to our <span style={{color:'#60adf4'}}>privacy policy</span></p>
        <button className='register-btn' onClick={regusterSuccess}>Register</button>
        <p>Already have an account?  <span style={{color:'#60adf4'}}>Sign in</span></p>
    </form>
</div>

  )
}

export default LoginForm
