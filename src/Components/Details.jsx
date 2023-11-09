import React from 'react'
import Footer from './Footer'

function Details() {
  return (
    <>
      <div>
        <h1 className='text-center text-black font-bold mt-5'>Details</h1>
        <div className='flex justify-center mt-5'>
          <div className='flex flex-col'>
            <img src="https://th.bing.com/th/id/OIP.O4zYPEYNtYz9Ajd2ZXtcogHaGL?pid=ImgDet&rs=1" className='w-96 h-96 border-2' alt="" />
            <div className='flex items-center w-full mt-3'>
              <div className='flex flex-col me-auto'>
                <h2 className='text-black font-bold'>Paripuvada</h2>
                <h4 className='text-black'>₹14</h4>
              </div>
              <div className='flex items-center'>
                <i class="fa-solid fa-minus mt-2"></i>
                <div className='border-1 w-10 h-10 ps-3 pt-2 mx-1'>1</div>
                <i class="fa-solid fa-plus mt-2"></i>
              </div>
            </div>
            <div>
              <p className='w-[400px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quod excepturi consequatur, fugiat laborum recusandae</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Details