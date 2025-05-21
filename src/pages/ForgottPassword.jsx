import React, { useState  } from 'react'
import AuthWrapper from '../components/layout/AuthWrapper'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../utils/formValidator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { axiosInstance } from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { PiWarningCircle } from "react-icons/pi";


const ForgottPassword = () => {
  const [isSubmitting, setIsSubmitting]=useState(false)
  const [errorMessage, setErrorMessage]=useState("")
  const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(forgotPasswordSchema)})
  const redirect=useNavigate()
  const handleForgotPassword=async(data)=>{
    setIsSubmitting(true)
    try {
      const response=await axiosInstance.post("/auth/forgot-password", {...data})
      if(response.status===200){
        // redirect to the assignment passge
        localStorage.setItem("email", data.email)
        redirect("/check-email")
      }
      console.log(data)
    } catch (error) {
      console.log(error)
      setErrorMessage(error?.response?.data?.message)
    }finally{
      setIsSubmitting(false)
    }
  };
    
  
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[505px]">
        <Link to="/register" className="border border-[#f2f2f2]">
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] my-5">
          <h1 className='text-[30px] text-black'>Forgot your password?</h1>
          <p className='text-[16px] text-[#666] font-semibold mt-2'>We will send instructions to your email to reset your password.</p>
        </div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <label htmlFor="email" className="label">
            Email<sup className="text-red-500 mb-1.5">*</sup>
          </label>
          <input
            type="email "
            id="email"
            className="w-full my-2 h-[56px] border-[#d9d9d9] rounded-lg border p-3 text-[] outline-0"
            placeholder="Enter Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
           {errorMessage && (
                    <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
                      <PiWarningCircle size={22} />
                      <p>{errorMessage}</p>
                    </div>
                  )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-black text-[16px] rounded-xl h-[56px] text-white w-full mt-6"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md text-black"></span>
            ) : (
              "Continue"
            )}
          </button>
        </form>
        <div className="flex items-center justify-center my-6">
          <h1>Remember you Password? </h1>
          <Link to="/register">Sign in</Link>
        </div>
      </div>
    </AuthWrapper>
  );
}


export default ForgottPassword