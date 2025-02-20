import React, { useContext } from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import contextProvider from '../../Hooks/ContextProvider'
import MetaDisplay from '../metaAI/MetaDisplay'

const MainDisplay = () => {
    const { metaDisplay, setMetaDisplay } = useContext(contextProvider);
    return (
        <div className='flex gap-[1px]'>
            <div>
                <LeftSide />
            </div>
            <div className='w-screen'>
            {metaDisplay ? <MetaDisplay /> : <RightSide />}
            </div>
        </div>
    )
}

export default MainDisplay