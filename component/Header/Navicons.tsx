import React from 'react'
import { FaList } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
export default function Navicons() {
  return (
    <div className='flex gap-6 items-center'>
        <MdOutlineDarkMode className='myhover w-5 h-5'/>
        <FaList className='myhover md:hidden'/>
    </div>
  )
}
