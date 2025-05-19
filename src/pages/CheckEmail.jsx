import React, { useState } from 'react'
import AuthWrapper from '../components/layout/AuthWrapper'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const CheckEmail = () => {

    const email=localStorage.getItem("email")
    // const maskEmail=(email)=>{
    //     const [start, domain]=email.split("@")
    //     if(start.length<=2){
    //         return `${start[0]}...@${domain}`
    //     }
    //     return `${start.slice(0,2)}...@${domain}`
    // }
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg max-w-[453px] ">
        <Link to="/register">
          <button className="flex items-center gap-1.5">
            {" "}
            <FaArrowLeft />
            Back
          </button>
        </Link>
        <div className="max-w-[332px] mt-4">
          <h1 className="text-2xl lg:text-[30px] font-semibold">
            Check Your Email
          </h1>
          <p className="text-[#666] text-[16px]  font-normal mt-3">
            Check the email address{" "}
            <span className="font-semibold ml-1 text-black-300  mr-1">{email}</span>
             for instructions to reset your password.
          </p>
          <button type='submit' className="btn w-full  font-semibold mt-5 text-black">Resend Mail</button>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default CheckEmail