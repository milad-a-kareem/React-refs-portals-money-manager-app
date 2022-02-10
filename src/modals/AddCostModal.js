import React from 'react'
import AddCostForm from './AddCostForm'
import Backdrop from './Backdrop'

function AddCostModal({toggleModal}) {
  return (
    <div className=' flex justify-center items-center w-screen h-screen '>
        <Backdrop toggleModal={toggleModal}/>
        <AddCostForm toggleModal={toggleModal}/>
    </div>
  )
}

export default AddCostModal