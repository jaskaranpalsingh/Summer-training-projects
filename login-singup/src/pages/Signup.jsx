import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'
const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template 
        title='Join the millions learing to code with studyNotion for free'
        des1='Build skill for today, tomorrow and beyond.'
        des2='Education to future profe career.'
        image={signupImg}
        formType='signup'
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup

