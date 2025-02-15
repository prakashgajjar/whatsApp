import React from 'react'

const contact = () => {
  return (
    <div className='p-1 px-2'>
        <div className='h-16 rounded-md gap-3 w-full hover:bg-white hover:bg-opacity-10  text-white active:bg-white active:bg-opacity-10 flex justify-between px-2 items-center'>
            <div>
                <img src="/profileImg/prakash1.jpg" className='w-10 h-10 rounded-full ' alt="" srcset="" />
            </div>
            <div className=''>
                <h1 className='font-semibold'>PRAKASH</h1>
                <p className='text-sm font-light opacity-70'>hii, i am prakash</p>
            </div>
            <div>
                <h1 className='text-sm opacity-40 -mt-4'>22:05</h1>
            </div>
        </div>
    </div>
  )
}

export default contact