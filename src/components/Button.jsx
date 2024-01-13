import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='px-6 py-1 border-2 border-white bg-orange-300 hover:text-orange-800 transition-all rounded-full'>
        {props.title}
      </button>
    </div>
  )
}

export default Button
