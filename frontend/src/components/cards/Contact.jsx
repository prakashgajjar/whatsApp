import React, { useContext, useRef } from 'react'
import { CurrentUser } from './CurrentUser'
import contextProvider from '../../Hooks/ContextProvider';
import socketProvider from '../../Hooks/SocketProvider';

const contact = ({contact, selectedId}) => {
    const {metaDisplay , messages, setMetaDisplay} = useContext(contextProvider);
    const {onlineUser} = useContext(socketProvider)
    const isOnline = onlineUser.includes(contact.id); 

    // const [lastMessage , setLastMessage] = useState('')
    const divRef = useRef(null)
    // console.log(contact)
    return (
        <div className='p-1 px-2' onClick={()=>{    
            setMetaDisplay(false)
        }}>
            <div ref={divRef} className={`h-16 rounded-md gap-3 w-full hover:bg-white hover:bg-opacity-10  text-white active:bg-white active:bg-opacity-10 flex justify-between px-2 items-center ${
            contact.id === selectedId && ! metaDisplay ? "bg-white bg-opacity-20" : ""
          }`} >
                <div>
                    <img src={`http://localhost:3000/images/${contact.avatar}`} className='w-10 h-10 rounded-full ' alt="" />
                </div>
                <div className=' w-20 '>
                    <h1 className='font-semibold cursor-default'>{contact.name}</h1>
                    <p className='text-sm font-light opacity-70 cursor-default'>{isOnline ? "Online" : "Offline"}</p>
                </div>
                <div>
                    <CurrentUser/>
                    <h1 className='text-sm opacity-40 -mt-4'>22:05</h1>
                </div>
            </div>
        </div>
    )
}

export default contact;