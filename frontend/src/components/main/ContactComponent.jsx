import React, { useEffect } from 'react'
import Contact from '../cards/contact'
import axios from 'axios'

const ContactComponent = () => {

  useEffect(()=>{
    try {
      const Responce = axios.get('http://localhost:3000/contact')
      console.log('Response:', Responce.data)
    } catch (error) {
      console.log('Error:', error);
    }
  })
  return (
    <div>
        <div id='contact' className='flex flex-col overflow-y-auto h-screen contact'>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
        </div>
    </div>
  )
}

export default ContactComponent