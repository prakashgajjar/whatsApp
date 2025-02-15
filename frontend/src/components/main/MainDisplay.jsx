import React from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide'

const MainDisplay = () => {
    return (
        <div className='flex gap-[1px]'>
            <div>
                <LeftSide />
            </div>
            <div className='w-screen'>
                <RightSide />
            </div>
        </div>
    )
}

export default MainDisplay