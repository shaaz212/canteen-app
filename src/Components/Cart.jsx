import React from 'react'
import CartFooter from './CartFooter'

function Cart() {
  return (
    <>
      <div className='w-screen h-screen'>
          <h1 className='text-black font-bold text-center mt-5'><span className='flex items-center justify-center'><i className="fa-solid fa-cart-shopping me-2"></i> Cart</span></h1>
          <div className='flex justify-center mt-5'>
            <img src="https://th.bing.com/th/id/OIP.O4zYPEYNtYz9Ajd2ZXtcogHaGL?pid=ImgDet&rs=1" className='w-1/6 h-1/6 me-3' alt="" />
            <div className='flex items-center me-5'>
              <div className='flex flex-col'>
                <h2 className='text-black font-bold'>Paripuvada</h2>
                <h4 className='text-black'>₹14</h4>
              </div>
            </div>
            <div className='flex items-center'>
              <i class="fa-solid fa-minus mt-2"></i>
              <div className='border-1 w-10 h-10 ps-3 pt-2 mx-1'>1</div>
              <i class="fa-solid fa-plus mt-2"></i>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
           <img src="https://th.bing.com/th/id/OIP.jWQKc3uA_EJCP7CimgluaQHaE7?pid=ImgDet&rs=1" className='w-1/6 h-1/6 me-3'  alt="" />
            <div className='flex items-center me-5'>
              <div className='flex flex-col'>
                <h2 className='text-black font-bold'>PayamPori</h2>
                <h4 className='text-black'>₹20</h4>
              </div>
            </div>
            <div className='flex items-center'>
              <i class="fa-solid fa-minus mt-2"></i>
              <div className='border-1 w-10 h-10 ps-3 pt-2 mx-1'>1</div>
              <i class="fa-solid fa-plus mt-2"></i>
            </div>
          </div>
      </div>
      <CartFooter />
    </>
  )
}

export default Cart