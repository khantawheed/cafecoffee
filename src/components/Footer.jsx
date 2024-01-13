import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#ffdcab] to-[#ab6b2e] text-black mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-xl pb-4'>Cafe Coffee</h1>
            <p className='text-sm'>Welcome to our coffee heaven Explore our aromatic brews, Savor 
                artisanal flavor and discover the perfect roas to elevate your 
                daily ritual
            </p>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
                Links
            </h1>
            <nav className='flex flex-col gap-2'>
                <a href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>Menu</a>
                <a href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>About us</a>
                <a  href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>Review</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
                Menu
            </h1>
            <nav className='flex flex-col gap-2'>
                <a href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>Latte</a>
                <a href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>Cappuccino</a>
                <a  href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>Americano</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
                Contact Us
            </h1>
            <nav className='flex flex-col gap-2'>
                <a href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>cafeCoffee@gmail.com</a>
                <a href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>+44 162 712 717</a>
                <a  href='/' className='hover:text-backgroundColor transition-all cursor-pointer'>Social Media</a>
            </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @copyright developed by
                <span className='text-[#ffdcab]'>khan tawheed</span>
                All Rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer
