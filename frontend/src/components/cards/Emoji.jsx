import React, { useContext, useEffect } from 'react';
import contextProvider from '../../Hooks/ContextProvider';
import axios from 'axios';

const Emoji = () => {
    const { emoji, setEmoji, setSelectEmoji } = useContext(contextProvider);

    const getEmoji = async () => {
        try {
            const response = await axios.get('https://emoji-api.com/emojis?access_key=ab2d9e4d611c11d00b70cd15dd1f631446f55f10'); 
            setEmoji(response.data.map((emoji) => emoji.character));
        } catch (error) {
            console.error('Error fetching emojis:', error);
        }
    };
    useEffect(() => {
        // getEmoji();
    }, []);

    return (
        <div className='border border-white border-opacity-5 rounded-lg p-1 m-1'>
            <div className='w-[270px] h-72 overflow-auto contact flex flex-wrap ml-3'>
                {emoji.map((emo, index) => (
                    <div 
                        key={index} 
                        className='flex hover:bg-white hover:bg-opacity-20 rounded-md items-center justify-center w-8 h-8 cursor-pointer' 
                        onClick={() => setSelectEmoji(emo)}
                    >
                        {emo}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Emoji;
