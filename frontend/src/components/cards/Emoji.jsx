import React, { useContext, useEffect } from 'react'
import contextProvider from '../../Hooks/ContextProvider'
import axios from 'axios'

const Emoji = () => {
    const {emoji , setEmoji ,setSelectEmoji , selectEmoji} = useContext(contextProvider);
    const getEmoji = async ()=>{
        const responce = await axios.get('https://emoji-api.com/emojis?access_key=a7e325918a051b54353f317cbe969c88e3078394')
        setEmoji(responce.data.map((emoji)=>emoji.character));
       } 
   useEffect(()=>{
    getEmoji()
   } ,[])    
  return (
    <div className='w-72 h-72 overflow-auto contact flex flex-wrap z-50 '>
        {
            emoji.map((emo, index)=>(
                <div key={index} className='flex items-center justify-center w-8 h-8 cursor-pointer' onClick={()=>setSelectEmoji(emo)}>{emo}</div>
            ))
        }
    </div>
  )
}

export default Emoji