import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='flex justify-between bg-gray-200'>
            <div className='p-5  ml-4'>
                <img src={logo} alt="" className=' w-[70px] h-[50px]'/>
            </div>
            <div>
                <ul className='flex  space-x-12 justify-end  p-5 list-none'>
                    <li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Ailment</li>
                    <a href="#gallery"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Gallery</li></a>
                    <li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Activity</li>
                    <li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
