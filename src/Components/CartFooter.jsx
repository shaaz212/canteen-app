import React from 'react'
import { Button } from 'react-bootstrap';


function CartFooter() {
  return (
    <div className='bg-slate-400 w-screen h-14 flex items-center '>
        <h4 className='text-black font-medium ms-5'>Total ₹<span className='ms-1 font-extrabold'>140</span></h4>
        <Button variant='outline-info' className='w-40 ms-auto me-20'><span className='font-extrabold'>Cart</span></Button>
    </div>
  )
}

export default CartFooter