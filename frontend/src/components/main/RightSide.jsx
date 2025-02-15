import React from 'react'
import HeaderProfile from '../cards/HeaderProfile'
import Input from '../cards/Input'
import ChatMain from './ChatMain'

const RightSide = () => {
    return (
        <div className='gap-[1px] justify-between flex flex-col '>
            <div>
                <HeaderProfile />
            </div>
            <div className=''>
                <ChatMain />
            </div>
            <div className=''>
                <Input />
            </div>
        </div>
    )
}

export default RightSide