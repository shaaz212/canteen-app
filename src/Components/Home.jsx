import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className='h-screen'>
      <div className='w-screen h-full'>
        <h1 className='text-black font-bold text-center mt-5'>Canteen</h1>
        {/* 1 */}
        <div className='flex justify-center mt-5'>
         <Link to={'/Details'} className='w-1/6 h-1/6 me-3'><img src="https://th.bing.com/th/id/OIP.O4zYPEYNtYz9Ajd2ZXtcogHaGL?pid=ImgDet&rs=1"  alt="" /></Link>
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
        {/* 2 */}
        <div className='flex justify-center mt-5'>
         <Link to={'/Details'} className='w-1/6 h-1/6 me-3'><img src="https://th.bing.com/th/id/OIP.jWQKc3uA_EJCP7CimgluaQHaE7?pid=ImgDet&rs=1"  alt="" /></Link>
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
      <Footer/>
    </div>
  )
}

export default Home