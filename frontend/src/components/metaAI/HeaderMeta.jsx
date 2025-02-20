import React, { useContext } from 'react';
import contextProvider from '../../Hooks/ContextProvider';

const HeaderMeta = () => {
  const { headerProfile } = useContext(contextProvider);

  return (
    <div className="h-16 w-full bg-zinc-800 text-white">
      <div className="flex justify-between items-center gap-3 w-full h-16 px-5">
        
        <div className="flex items-center">
              <div className="overflow-hidden rounded-full w-8 h-8 mr-3">
                  <img
                    src="/icons/meta.png"
                    className="w-full h-full rounded-full object-cover"
                    alt="Profile"
                  />
              </div>
              <h1 className="text-xs font-bold uppercase">meta</h1>
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

export default HeaderMeta;
