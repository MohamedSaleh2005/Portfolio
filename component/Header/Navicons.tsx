"use client"
import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
import { navItems } from './types'


export default function NavIcons() {
  // Mopile nav
  const [open , setopen] = useState<boolean>(false);


  return (
    <div>
{/* nav icons */}
      <div className='flex gap-6 items-center'>

          <button>
          <MdOutlineDarkMode className='myhover w-5 h-5' />
          </button>


          <button onClick={() => setopen(!open)}>
          <FaList className='myhover md:hidden'/>
          </button>

      </div>


{/* mopile nav */}
      <div className={`${open ? "open" : "close"} absolute top-20 right-3 w-25`}>
        <ul className='bg-zinc-700 flex flex-col items-center rounded-md py-2'>
          {navItems.map((item) => (

            <li key={item.id} className='myhover py-1 text-violet-400'>
              <a href={item.href}  onClick={() => setopen(false)} >{item.title}</a>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}
