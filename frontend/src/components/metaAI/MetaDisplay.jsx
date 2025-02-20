import React from 'react'
import HeaderProfile from '../cards/HeaderProfile'
import HeaderMeta from './HeaderMeta'
import MetaMessageDisplay from './MetaMessageDisplay'
import MetaInput from './MetaInput'

const MetaDisplay = () => {
  return (
    <div className='gap-[1px] justify-between flex flex-col '>
       <div>
       <HeaderMeta/>
       </div>
       <div>
        <MetaMessageDisplay/>
       </div>
       <div>
        <MetaInput/>
       </div>
    </div>
  )
}

export default MetaDisplay