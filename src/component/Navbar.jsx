import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='flex justify-between bg-gray-200'>
            <a href="/"><div className='p-5  ml-4'>
                <img src={logo} alt="" className=' w-[70px] h-[50px]'/>
            </div>
            </a>
            <div>
                <ul className='flex  space-x-12 justify-end  p-5 list-none'>
                    <a href="/article"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Article</li>
                    </a>
                    <a href="/teacher"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Teacher</li></a>
                    <a href="/activityfud"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Activity</li></a>
                    <li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Contact</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
