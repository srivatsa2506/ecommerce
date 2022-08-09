import React from 'react'
import { useState,useEffect,useRef } from 'react'

function Login() {
  const userRef=useRef();
  const errRef=useRef();
  const [user,setUser]=useState('');
  const [pwd,setPwd]=useState('');
  const [errMsg,setErrMsg]=useState('');
  const [success,setSuccess]=useState(false);

  useEffect(()=>{
userRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
      },[user,pwd])
    

  return (
    <div>Login</div>
  )
}

export default Login