import React, { useContext, useEffect, useState } from 'react'
import Contact from '../cards/Contact'
import axios from 'axios'
import contextProvider from '../../Hooks/ContextProvider';

const ContactComponent = () => {
  const { contact, setContact, headerProfile, setHeaderProfile, setSelectedId, selectedId } = useContext(contextProvider);
  const getContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/contact' , {
        withCredentials:true
      });
      setContact(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    getContacts();
  }, [setContact]);

  return (
    <div>
      <div id='contact' className='flex flex-col overflow-y-auto h-screen contact'>
        {[...contact].reverse().map((contact, index) => (
          <div 
            key={contact.id || index} 
            onClick={() => {
              setSelectedId(contact.id);
              setHeaderProfile(contact);
            }}
          >
            <Contact contact={contact} selectedId={selectedId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactComponent;
