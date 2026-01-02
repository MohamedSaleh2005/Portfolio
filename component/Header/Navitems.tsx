import React from 'react'
import { navItems } from './types'

export default function Navitems() {
  return (
    <div className='hidden md:flex gap-10'>
        {navItems.map ((item) => (
            <a className='myhover' href={item.href}>{item.title}</a>
        ))}
    </div>
  )
}
