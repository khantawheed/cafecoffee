import React from 'react'
import aboutimg from '../assets/aboutimage.png'
import  Button  from './Button'
const About = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#ffdcab]'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-2/4'>
                    <img src={aboutimg} />
                </div>
                <div className='w-full lg:w-2/4 p-4 space-y-5'>
                    <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo velit, magnam praesentium perspiciatis laborum accusamus, impedit cum maiores suscipit voluptas magni sit ex aspernatur pariatur quia cumque numquam ab?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus doloribus, et aliquid in quos. Natus atque odio sit quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus doloribus, et aliquid in quos. Natus atque odio sit quod, impedit cum maiores suscipit voluptas magni sit ex aspernatur pariatur quia cumque numquam ab?.</p>
                    <Button title='Learn More'/>
                </div>
            </div>
        </div>
    )
}

export default About
