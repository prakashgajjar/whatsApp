import React, { useContext } from 'react';
import contextProvider from '../../Hooks/ContextProvider';

const HeaderProfile = () => {
  const { headerProfile } = useContext(contextProvider);

  return (
    <div className="h-16 w-full bg-zinc-800 text-white">
      <div className="flex justify-between items-center gap-3 w-full h-16 px-5">
        
        {/* Left Section - Profile Image & Name */}
        <div className="flex items-center">
          {headerProfile ? (
            <>
              <div className="overflow-hidden rounded-full w-10 h-10 mr-2">
                {headerProfile.avatar ? (
                  <img
                    src={`http://localhost:3000/images/${headerProfile.avatar}`}
                    className="w-full h-full rounded-full object-cover"
                    alt="Profile"
                  />
                ) : null}
              </div>
              <h1 className="text-xs font-bold uppercase">{headerProfile.name}</h1>
            </>
          ) : (
            <h1 className="text-xs font-bold uppercase text-gray-400">Select a user</h1>
          )}
        </div>
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="10" r="7" stroke="white" />
            <line x1="7" y1="15" x2="2" y2="20" stroke="white" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default HeaderProfile;
