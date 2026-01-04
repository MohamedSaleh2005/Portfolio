
import NavIcons from './Navicons'
import NavItems from './Navitems'

export default function Navbar() {
    return (
        <header className='w-full h-20 px-8 flex items-center justify-between shadow-md '>

            <a href='/' className='myfont font-semibold text-violet-900 text-xl '>  M0 <span className='text-white'>Saleh</span>  </a>
            <NavItems />
            <NavIcons />
        </header>
    )
}
