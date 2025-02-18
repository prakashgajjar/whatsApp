import React from 'react'

const Icons = ({url}) => {
    return (
        <div>
            <div className='flex justify-center items-center w-10 h-10 ml-5 hover:bg-opacity-10 transition duration-500 rounded-lg hover:bg-white -mt-2'>
                <img src={`${url}`} className='w-5 text-white h-5' alt="" />
            </div>
        </div>
    )
}

export default Icons