import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'
const Reviewcard = (props) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
      <div className='flex flex-row items-center lg:justify-start justify-center'>
        <div className='w-1/4'>
            <img src={props.img} alt='img'/>
        </div>
        <div className='mx-3'>
            <h2 className='font-semibold text-lg'>{props.title}</h2>
            <div className='flex'>
                <BsStarFill className="text-[#ab6b2e]"/>
                <BsStarFill className="text-[#ab6b2e]"/>
                <BsStarFill className="text-[#ab6b2e]"/>
                <BsStarFill className="text-[#ab6b2e]"/>
                <BsStarHalf className="text-[#ab6b2e]"/>
            </div>
        </div >
        <span className='ml-16'>
            <FaQuoteRight size={42} className='text-[#ffc676]'/>
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis delectus aspernatur facilis officia praesentium fugit excepturi? Iusto quibusdam sed nobis!
      </p>
    </div>
  )
}

export default Reviewcard
