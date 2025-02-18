import React, { useContext, useEffect, useState } from 'react'
import Contact from '../cards/contact'
import axios from 'axios'
import contextProvider from '../../Hooks/ContextProvider'


const ContactComponent = () => {
  const {contact , setContact , headerProfile ,setHeaderProfile  } = useContext(contextProvider);
  const getContacts = async () => {
    try {
      const Responce = await axios.get('http://localhost:3000/contact')
      setContact(Responce.data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  useEffect(() => {
    getContacts();
  },[])
  
  return (
    <div>
      <div id='contact' className='flex flex-col overflow-y-auto h-screen contact' >
        {
          contact.map((contact, index) => (
            <div onClick={()=>{
              setHeaderProfile(contact)
            }}>
              <Contact key={index} contact={contact} />
            </div>
          ))
         ?.reverse()
        }
      </div>
    </div>
  )
}

export default ContactComponent