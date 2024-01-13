import React from 'react'
import Button from './Button'
import homeimg from "../assets/homeImg3.png"
const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#ffdcab] to-[#ab6b2e]'>
      <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
        <h1 className='font-semibold text-3xl text-center lg:text-start leading-tight'>
        Awaken Your Senses: Indulge in Exquisite Brews and Cozy Conversations Where Every Sip is a Journey. 
        </h1>
        <p>
        Unwind in the Warmth of Aromatic Blends and Discover a Haven of Comfort, Crafted Just for You at Cafe Coffee.
        </p>
        <div className='flex flex-row gap-6'>
            <Button title="ADD TO CARD"/>
            <Button title="MORE MENU"/>
        </div>
      </div>
      <div className='relative'>
        <img src={homeimg} height={400} width={350} className='my-photo-animation'/>
      </div>
    </div>
  )
}

export default Home
