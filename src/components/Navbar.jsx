import React, { useState } from 'react'
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Button from './Button';
import {AiOutlineClose , AiOutlineMenuUnfold} from "react-icons/ai"

const Navbar = () => {

    const [menu , setMenu] = useState (false);
    const handleChange = () =>{
        setMenu(!menu);
    }
    
    const closeMenu = () =>{
        setMenu(false);
    }
  return (
    <div className='fixed w-full z-10'>
        <div>
            <div className='flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-orange-200 to-orange-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className=' flex flex-row items-center cursor-pointer gap-2'>
                    <span>
                        <FaCoffee/>
                    </span>
                    <h1 className='text-xl font-semibold'>Cafe Coffee</h1>
                </div>
                <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                    <Link to="home" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        Home
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <Link to="menu" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        Menu
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    
                    <Link to="about" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        About us
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    
                    <Link to="reviews" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        Reviews
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    
                </nav>
                <div className='hidden lg:flex'>
                    <Button title="Login"/>
                </div>

                <div className='md:hidden flex items-center'>
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange}/>
                    ):(
                        <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                    )}
                </div>
                
                <div className={`${menu ? "translate-x-0":"-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="home" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300' onClick={closeMenu}>
                        Home
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <Link to="menu" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        Menu
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    
                    <Link to="about" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        About us
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    
                    <Link to="reviews" spy={true} duration={500} smooth={true} className='group relative inline-block Cursor-pointer hover:text-orange-300'>
                        Reviews
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>

                    <Button title="Login"/>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
