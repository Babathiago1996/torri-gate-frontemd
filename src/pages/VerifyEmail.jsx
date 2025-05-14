import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
    const {token}=useParams()
    // const redirect=useNavigate
    const [errorMsg, setErrorMsg]=useState("")
    const [status, setStatus]=useState("verifying")
    const CheckToken=async()=>{
try {
    const response=await axiosInstance.post(`/auth/verify-email/${token}`, {token})
    if(response.status===200){
setStatus("success")
    }
} catch (error) {
    setErrorMsg("Email Verification Failed")
    setStatus(error)
}
    }
    useEffect(()=>{
        CheckToken()
    }, [])
    if(status==="verifying"){
        return <div>Verifying...</div>
    }
    if (status === "success") {
      return <div>
        <h1>Email verified Successfully</h1>
        <Link to="/login">
        <button>Proceed to Login</button></Link>
      </div>;
    }
  return (
    <div>
        <h1>Verification failed</h1>
        <p>{errorMsg}</p>
        <button>Resend Verification Email</button>
    </div>
  )
}

export default VerifyEmail