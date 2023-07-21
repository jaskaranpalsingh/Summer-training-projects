import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formdata,setformdata] = useState({
        email : "", password : "",
    })

    const [showPwd,setShowPwd] = useState(false);

    function changeHandler(e){
        const {name,value} = e.target;
        setformdata((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    
    function submitHandler(event){
        event.preventDefault();
        // console.log(formdata);
        setIsLoggedIn(true)
        toast.success('Logged In')
        navigate('/dashboard');
    }
    return (
        <form  onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Email Address <sup className=' text-pink-200'>*</sup></p>
                <input type='email' required
                value={formdata.email} name='email'
                onChange={changeHandler} 
                placeholder='Enter your email id'
                className=' bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Password <sup className=' text-pink-200'>*</sup></p>
                <input type={showPwd ? 'text' : 'password'} required
                value={formdata.password} name='password'
                onChange={changeHandler} 
                placeholder='Enter password'
                className='bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>

                <span  onClick={() => (
                        setShowPwd(!showPwd)
                    )}  className=' absolute top-[38px] right-3 cursor-pointer'>
                    {showPwd ? (<AiOutlineEyeInvisible fontSize={24} fill='AFB2BF'/>) 
                                : (< AiOutlineEye fontSize={24} fill='AFB2BF' />)}
                </span>

                <Link to='/login'>
                    <p className='text-blue-100 absolute right-1 text-xs max-w-max ml-auto mt-1'>
                        forgot password
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px]
            text-richblack-900 font-medium mt-6'>
                log in
            </button>
        </form>
    )
}

export default LoginForm
