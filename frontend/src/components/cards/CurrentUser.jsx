import React, { useContext , useEffect } from 'react'
import contextProvider from '../../Hooks/ContextProvider';
import axios  from 'axios';
export const CurrentUser = () => {
    const {setCurrentUser , currentUserId} = useContext(contextProvider)
    const getUserId = async ()=>{
        try {
            const response = await axios.get(`http://localhost:3000/userfind`, {
              withCredentials: true,
            });
            setCurrentUser(response.data._id);
            console.log(currentUserId);
            
          } catch (error) {
            console.error("Error fetching chat:", error);
          }
    }

    useEffect(()=>{
        getUserId()
    })
  return (
    <div>

    </div>
  )
}
