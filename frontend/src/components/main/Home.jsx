import React, { useState, useEffect } from 'react';
import MainDisplay from './MainDisplay';
import Icons from '../cards/icons';

const Home = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-zinc-900">
          <div className="flex flex-col items-center">
            <img src="/icons/whatapp1.png" className="w-12 h-12 mb-4" alt="WhatsApp Logo" />
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white mt-3 text-sm">Loading WhatsApp...</p>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900">
          <div>
            <div className="absolute top-2 left-3 justify-center items-center flex gap-[6px]">
              <img src="/icons/whatapp1.png" alt="WhatsApp" />
              <h1 className="text-white text-xs">WhatsApp</h1>
            </div>
            <div className="flex flex-col absolute -left-4 top-16 gap-3">
              <Icons url="/icons/menu.png" />
              <Icons url="/icons/message1.png" />
              <Icons url="/icons/call1.png" />
              <Icons url="/icons/status1.png" />
              <div className="ml-[14px]">
                <hr className="opacity-20 w-8 ml-2 relative border-white bg-white" />
              </div>
            </div>
            <div className="flex flex-col absolute -left-4 top-[260px]">
              <Icons url="/icons/meta.png" />
            </div>
            <div className="absolute bottom-2 flex flex-col justify-center items-center gap-2 -left-4">
              <Icons url="/icons/setting1.png" />
              <img src="/profileImg/prakash1.jpg" className="w-6 h-6 rounded-full ml-[18px] mb-2" alt="" />
            </div>
            <div className="pl-12 pt-10 rounded-lg">
              <MainDisplay />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
