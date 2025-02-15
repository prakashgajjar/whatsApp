import React from 'react'

const HeaderName = () => {
  return (
    <div className="text-white flex justify-between items-center gap-3 w-full h-16 z-50 relative">
      <div className='flex justify-center items-center'>
        <div className="  overflow-hidde rounded-full ml-5 mr-2 ">
          <img src="/profileImg/prakash1.jpg" className=" w-10 h-10 rounded-full object-cover  " alt="Profile" />
        </div>
        <div>
          <h1 className="text-sm">Message yourself</h1>
          <h1 className="text-xs font-bold uppercase">PRAKASH</h1>
        </div>
      </div>
      <div className='mr-5'>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="10" r="7" stroke="white " stroke-width="2" />
          <line x1="7" y1="15" x2="2" y2="20" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>

  )
}

export default HeaderName