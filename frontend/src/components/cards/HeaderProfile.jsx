import React, { useContext } from 'react'
import contextProvider from '../../Hooks/ContextProvider'

const HeaderProfile = () => {
  const { contact, headerProfile } = useContext(contextProvider);
  return (
    <div className='h-16 z-0 w-full bg-zinc-800 text-white'>
      <div className="text-white flex justify-between items-center gap-3 w-full h-16 z-50 relative">
        <div className='flex justify-center items-center'>
          <div className="  overflow-hidde rounded-full ml-5 mr-2 ">
          {headerProfile && (
              <img
                src={`http://localhost:3000/images/${headerProfile.avatar}`}
                className="w-10 h-10 rounded-full object-cover"
                alt="Profile"
              />
            )}
          </div>
          <div>
            {
              headerProfile ? (
                <h1 className="text-xs font-bold uppercase">{headerProfile.name}</h1>
              ) : null
            }
          </div>
        </div>
        <div className='mr-5'>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="10" r="7" stroke="white " />
            <line x1="7" y1="15" x2="2" y2="20" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile