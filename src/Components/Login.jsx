import React, { useState, useNavigate } from 'react'
import { Button } from 'react-bootstrap';
import { getUser } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const navigate = useNavigate
  const[username,setUsername] = useState()
  const[password,setPassword] = useState()
  const[user,setUser] = useState()


  const login = async()=>{
    const res = await getUser()
    if (res.status>=200 && res.status<300) {
      const {data} = await getUser()
      setUser(data)
      console.log(user);
      if (data) {
        toast.success("login succesfull")
      } else {
        toast.error("invalid email or password")
      }
    } else {
      toast.warn("Network error")
    }
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-1/2 h-1/2 shadow-lg border-2'>
          <h1 className='text-center mt-5 text-xl font-bold'>Welcome</h1>
           <form className='flex justify-center mt-10'>
            <div className='w-4/5'>
              <input type="email" className='form-control mb-4' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your email address'/>
              <input type="password" className='form-control mb-4' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
              <div className='flex justify-center'>
                <Button variant='outline-info' className='w-2/5' onClick={login}>Login</Button>
              </div>
            </div>
           </form>
        </div>
      </div>
  
      {/* toast */}
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </>
  )
}

export default Login