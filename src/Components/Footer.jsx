import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-slate-400 w-screen h-14 flex items-center'>
        <h4 className='text-black font-medium ms-5'>Total ₹<span className='ms-1 font-extrabold'>140</span></h4>
        <Link to={'/cart'} className='ms-auto me-20'><Button variant='outline-info' className='w-40'><span className='font-extrabold'>Cart</span></Button></Link>
    </div>
  )
}

export default Footer