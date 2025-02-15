import React from 'react'
import ContactComponent from './ContactComponent'

const LeftSide = () => {
  return (
    <div className='flex flex-col h-full w-60 bg-zinc-800 rounded-l-lg'>
      <div>
        <div>
          <h1 className='text-2xl text-white pl-5 pt-4 font-semibold '>Chat</h1>
        </div>
        <div className='mt-5 ml-4'>
          <input type="text" placeholder='search or start a new chat' className='outline-none h-8 shadow-slate-100 text-white shadow-sm bg-white bg-opacity-10 rounded-md px-2' />
        </div>
      </div>
        <div className='mt-5'>
          <ContactComponent/>
        </div>
    </div>
  )
}

export default LeftSide