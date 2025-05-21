import React from 'react'
import AuthWrapper from '../components/layout/AuthWrapper'
import { axiosInstance } from '../utils/axiosInstance'
import { PiWarningCircle } from "react-icons/pi";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ResetPasswordSchema } from '../utils/formValidator';


const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
      const [showConfirm, setShowConfirm] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting,setIsSubmitting]=useState(false)
      
       const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({ resolver: yupResolver(ResetPasswordSchema) });

        const handleResetPassword=async(data)=>{
try {
    console.log(data)
} catch (error) {
    console.log(error);
    setErrorMessage(error?.response?.data?.message);
}
        }
  return (
    <AuthWrapper>
        <form onSubmit={handleSubmit(handleResetPassword)}  className="w-full lg:w-[505px] p-6">
<h1 className='text-3xl '>Reset Password</h1>
<p className='text-[16px] font-medium text-[#666]'>Enter Your New Password</p>
 {/* Password */}
        <div className="relative mt-5">
          <label
            htmlFor="password"
            className="font-medium text-[16px] mb-1.5 block"
          >
            Password <sup className="text-red-500">*</sup>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            placeholder="Enter Password"
          />
          <span
            className="cursor-pointer absolute  right-4 top-[58%]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
         {/* Confirm Password */}
                <div className="relative mt-5">
                  <label
                    htmlFor="confirmPassword"
                    className="font-medium text-[16px] mb-1.5 block"
                  >
                    Confirm Password <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type={showConfirm ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
                    placeholder="Confirm Password"
                  />
                  <span
                    className="cursor-pointer absolute  right-4 top-[58%]"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                {errorMessage && (
                          <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
                            <PiWarningCircle size={22} />
                            <p>{errorMessage}</p>
                          </div>
                        )}
                        {/* Submit */}
                        <button disabled={isSubmitting}  className="btn w-full h-[56px] rounded-lg bg-black text-white block mt-6">
                {
                  isSubmitting?"Resetting...":"Reset Password"
                }        </button>
        </form>
        </AuthWrapper>
  )
}

export default ResetPassword