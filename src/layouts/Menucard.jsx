import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Menucard = (props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <div>
        <img className="rounded-xl h-56 w-full"src={props.img} alt="img"/>
      </div>
      <div className='p-2 mt-5'>
        <div className='flex flex-row justify-between'>
            <h3 className='font-semibold text-xl'>{props.title}</h3>
            <h3 className='font-semibold text-xl'>{props.value}</h3>
        </div>
        <div className='flex flex-row justify-between mt-3'>
            <div className='flex gap-2'>
            <button className='px-3 text-sm border-2 border-[#ab6b2e] bg-[#ffdcab] hover:text-[#ab6b2e] transition-all rounded-lg'>Hot</button>
            <button className='px-3 text-sm border-2 border-[#ab6b2e] bg-[#ffdcab] hover:text-[#ab6b2e] transition-all rounded-lg'>Cold</button>

            </div>
            <span className='flex items-center bg-[#ffdcab] px-3 py-2 rounded-full'>
            <FaShoppingCart size={20}/>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Menucard
