import React from 'react'
import AddButton from './AddButton'
import Logo from './Logo'

function Header({toggleModal}) {
  return (
    <div className='flex justify-between items-center bg-primary w-full h-20 px-5 fixed left-0 top-0 lg:px-20'>
        <Logo/>
        <AddButton toggleModal={toggleModal}/>
    </div>
  )
}

export default Header