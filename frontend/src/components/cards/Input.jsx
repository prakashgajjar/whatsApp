import React, { useContext, useEffect, useRef } from 'react'
import Icons from './Icons'
import contextProvider from '../../Hooks/ContextProvider'
import axios from 'axios'
import SocketMessage from '../sockets/SocketMessage'
const Input = () => {
    const {setMessage,message,contact , showEmoji , setShowEmoji  ,selectEmoji , setContact , headerProfile ,setHeaderProfile , setSelectedId  , selectedId } = useContext(contextProvider);
    const sendMessage = async () =>{
        axios.post(`http://localhost:3000/message/send/${selectedId}`, { message: message }, { withCredentials: true })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
    SocketMessage();
    }
      useEffect(() => {
            if (selectEmoji) {
                setMessage(prev => prev + selectEmoji);
            }
        }, [selectEmoji, setMessage]);
    return (
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
                    value={message.content}
                    onChange={(event) => {
                        setMessage(event.target.value)
                    }}
                    placeholder='Type a message' />
            </div>
            <div className='flex absolute right-5 justify-center items-center  ml-2 -mt-2'>
                <img src="/icons/send.png" className='' alt="" 
                onClick={()=>{
                    // sendMessageToUser()
                    setShowEmoji(false)
                    sendMessage()
                }}
                />
            </div>
        </div>

    )
}

export default Input