import React, { useRef } from 'react'
import Icons from './icons'
const Input = () => {
    return (
        <div className="bg-zinc-800 flex  items-center gap-3 w-full h-16 z-50 ">
            <div>
           <div className='flex -space-x-4'>
           <Icons url="/icons/smill1.png"/>
           <Icons url="/icons/doc.png"/>
           </div>
            </div>
            <div className='flex justify-center items-center'>
                <input  type="text" className='w-[1450px] rounded-md  h-10 mb-3 outline-none bg-transparent text-white  ml-2' placeholder='Type a message' />
            </div>
            <div className='flex justify-center items-center ml-2 -mt-2'>
                <img src="/icons/send.png" className='' alt="" srcset="" />
            </div>
        </div>

    )
}

export default Input