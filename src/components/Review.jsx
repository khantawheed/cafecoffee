import React from 'react'
import Reviewcard from '../layouts/Reviewcard'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#ffdcab]'>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Review</h1>
      <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
        <Reviewcard img={pic1} title="Alex Ava"/>
        <Reviewcard img={pic2} title="john Deo"/>
        <Reviewcard img={pic3} title="Sofia Zoe"/>
      </div>
    </div>
  )
}

export default Review
