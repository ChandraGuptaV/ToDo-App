import React from 'react'

const Navbar = () => {
  return (
   <nav>
    <div className="flex  justify-between bg-slate-500 py-1 font-bold text-lg items-center">
        <div className="logo ml-8 text-2xl">
            iTask
        </div>
        <ul className='flex gap-8 text-white '>
            <li className='hover:cursor-pointer  mr-4 hover:bg-slate-700  rounded-2xl px-3 py-1 transition-all duration-200'>Home</li>
            <li className='hover:cursor-pointer  mr-6 hover:bg-slate-700 rounded-2xl px-3 py-1 transition-all duration-200'>About Us</li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
