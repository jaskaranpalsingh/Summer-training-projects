import React, { useState } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [AccountType, setAccountType] = useState('student');
    const [showPwd1, setShowPwd1] = useState(true);
    const [showPwd2, setShowPwd2] = useState(true);
    const [formdata, setformdata] = useState({
        firstname : "", lastname : "", email : "",
        createPassword : "", confirmPassword : "",
    })

    const changeHandler = (e) => {
        const {name,value} = e.target;
        setformdata((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        const finalData = {
            ...formdata ,
            AccountType
        }
        console.log(finalData);
        if(formdata.createPassword === formdata.confirmPassword){
            setIsLoggedIn(true)
            toast.success('Account Created')
            navigate('/dashboard');
        }
        else{
            toast.error('Confirm password wrong')            
        }
    }
    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full
            max-w-max'>
                <button onClick={() => {setAccountType('student')}} className= {` ${AccountType === 'student' ? 'bg-richblack-900' : 'bg-transparent'} bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full
                transition-all duration-200`}>
                    Student
                </button>
                <button onClick={() => {setAccountType('instructor')}} className={`${AccountType === 'instructor' ? 'bg-richblack-900' : 'bg-transparent'} text-richblack-5 py-2 px-5 rounded-full
                transition-all duration-200`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>First name <sup className=' text-pink-200'>*</sup></p>
                        <input type='text' required
                            name='firstname'
                            value={formdata.firstname} 
                            onChange={changeHandler}
                            placeholder='Enter first name'
                            className=' bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Last Name <sup className=' text-pink-200'>*</sup></p>
                        <input type='text' required
                            name='lastname'
                            value={formdata.lastname} 
                            onChange={changeHandler}
                            placeholder='Enter last name'
                            className=' bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />
                    </label>
                </div>
                <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Email Address <sup className=' text-pink-200'>*</sup></p>
                    <input type='text' required
                        name='email'
                        value={formdata.email} 
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        className=' bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                </label>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className=' relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Create Password <sup className=' text-pink-200'>*</sup></p>
                        <input type={!showPwd1 ? 'text' : 'password'} required
                            name='createPassword'
                            value={formdata.createPassword} 
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            className=' bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                            />
                        <span className=' absolute top-[38px] right-3 cursor-pointer'
                        onClick={() => (
                            setShowPwd1(!showPwd1)
                        )}>
                            {!showPwd1 ? (<AiOutlineEyeInvisible fontSize={24}/>) : (< AiOutlineEye fontSize={24} />)}
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Confirm Password <sup className=' text-pink-200'>*</sup></p>
                        <input type={!showPwd2 ? 'text' : 'password'} required
                            name='confirmPassword'
                            value={formdata.confirmPassword} 
                            onChange={changeHandler}
                            placeholder='Enter Confirm Password'
                            className=' bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />
                        <span  className=' absolute top-[38px] right-3 cursor-pointer'
                        onClick={() => (
                            setShowPwd2(!showPwd2)
                        )}>
                            {!showPwd2 ? (<AiOutlineEyeInvisible fontSize={24} />) : (< AiOutlineEye fontSize={24} />)}
                        </span>
                    </label>
                </div>

                <button  className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px]
                    text-richblack-900 font-medium mt-6'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm
