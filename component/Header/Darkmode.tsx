"use client"
import { useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

export default function NavIcons() {
  // Dark mode
  const [dark , setdark] = useState<boolean>(false)

    const theme = (): void => {
       { document.body.classList.toggle("dark") }
       setdark(!dark)
    }
    
  return (
    <div>

        <button onClick={() => theme()}>
          {dark ? <MdOutlineDarkMode className='myhover w-5 h-5 mt-1' /> : <MdOutlineLightMode className='myhover w-5 h-5 mt-1' />}
        </button>

    </div>
  )
}
