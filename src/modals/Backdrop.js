import React from 'react'

function Backdrop({toggleModal}) {
  return (
    <div onClick={toggleModal} className='fixed bg-black/40 top-0 left-0 w-screen h-screen'></div>
  )
}

export default Backdrop