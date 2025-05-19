import React, { useState } from 'react'
import AuthWrapper from '../components/layout/AuthWrapper'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../utils/formValidator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { axiosInstance } from '../utils/axiosInstance';

const ForgottPassword = () => {
  const [isSubmitting, setIsSubmitting]=useState(false)
  const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(forgotPasswordSchema)})
  const handleForgotPassword=(data)=>{
    setIsSubmitting(true)
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
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
            Email<sup className="text-red-500">*</sup>
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