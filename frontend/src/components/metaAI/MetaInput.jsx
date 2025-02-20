import React, { useContext, useEffect, useRef } from 'react'
import Icons from '../cards/Icons'
import contextProvider from '../../Hooks/ContextProvider';
import axios from 'axios';

const MetaInput = () => {
    const {metaMessage , selectEmoji , setMetaMessageText,showEmoji, setShowEmoji ,   setMyMetaMessage , setMetaMessage} = useContext(contextProvider);

    const metaAiResponce = async ()=>{
        const responce = await axios.post('http://localhost:3000/meta', { message: metaMessage }, { withCredentials: true })
        setMetaMessageText(responce.data.message)
        console.log(responce.data.message)
    }

    const sendbtnRef = useRef(null)
    useEffect(() => {
        if (selectEmoji) {
            setMetaMessage(prev => prev + selectEmoji);
        }
    }, [selectEmoji, setMetaMessage]);

  return (
    <div>
           <div className="bg-zinc-800 flex  items-center gap-3 w-full h-16 z-50 ">
            <div>
                <div className='flex -space-x-4'>
                    <div onClick={()=>{
                        setShowEmoji(!showEmoji)
                    }}>
                         <Icons url="/icons/smill1.png" />
                    </div>
                    <Icons url="/icons/doc.png" />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <input type="text" className='w-[1450px] rounded-mdx`  h-10 mb-3 outline-none bg-transparent text-white  ml-2'
                  value={metaMessage}
                  onChange={(event) => {
                        setMetaMessage(event.target.value)
                    }}
                    placeholder='Type a message' />
            </div>
            <div className='flex justify-center items-center ml-2 -mt-2'>
                <img ref={sendbtnRef} src="/icons/send.png" className='' alt="" 
                onClick={()=>{
                    setMyMetaMessage(metaMessage);
                    setShowEmoji(false)
                    setMetaMessage('')
                    metaAiResponce()
                }}
                />
            </div>
        </div>
    </div>
  )
}

export default MetaInput