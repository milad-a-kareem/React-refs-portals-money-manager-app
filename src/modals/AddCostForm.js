import { useRef } from 'react'

import {  useDispatch } from 'react-redux'
import { costsActions } from '../Store/costs-slice'

function AddCostForm({toggleModal}) {

    const titleRef = useRef()
    const costAmountRef = useRef()
    const datetimeRef = useRef()

    const dispatch = useDispatch()

    const formContainerClass = `
    bg-light 
    h-fit
    max-h-[90vh] 
    max-w-[90vw] 
    min-w-[50vw] 
    shadow-md 
    z-10 
    rounded-2xl 
    w-[90vw] 
    h-[90vh] 
    md:w-[80vw] 
    lg:w-[70vw]
    flex flex-col
    items-center
    p-8
    
    `
    const inputClass=` w-full p-3 rounded-xl my-3`

    const onAddCost = ()=>{
        const id = Math.round(Math.random() * 10000000000)
        const title = titleRef.current?.value
        const cost = costAmountRef.current?.value
        const datetime = datetimeRef.current?.value

        
        console.log(titleRef)
        
        if (title && cost && datetime){
            dispatch(costsActions.add({id,title,cost,datetime}))
            titleRef.current.value = ''
            costAmountRef.current.value = ''
            datetimeRef.current.value = ''

            titleRef.current.focus()
        }

    }

  return (
      
    <div className={formContainerClass}>
        <h1 className='text-2xl font-bold mb-4 text-primary'>Cost Details</h1>

        <input ref={titleRef} className={inputClass} type='text' placeholder='Title' />

        <input ref={costAmountRef} className={inputClass} type='number' placeholder='Cost Amount $' min={0}/>

        <input ref={datetimeRef} className={inputClass} type='datetime-local'  />

        <div className='flex gap-3 my-3'>
            <button onClick={onAddCost} className='bg-primary p-4 rounded-xl text-tertiary'>Add Cost</button>
            <button onClick={toggleModal} className='bg-red-500 p-4 rounded-xl text-tertiary'>Cancel</button>

        </div>
        
    </div>
  )
}

export default AddCostForm