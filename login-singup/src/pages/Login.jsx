import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template 
      title='Welcome Back'
      des1='Build skill for today, tomorrow and beyond.'
      des2='Education to future profe career.'
      image={loginImg}
      formType='login'
      setIsLoggedIn={setIsLoggedIn}
      />
      
    </div>
  )
}

export default Login
