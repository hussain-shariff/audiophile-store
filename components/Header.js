import React, { useState } from 'react'
import { 
    Bars3Icon,
    ShoppingCartIcon,
    XMarkIcon
    } from '@heroicons/react/24/outline'
import MenuCard from './MenuCard';
import menuCardData from '../data'

function Header() {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuToggle=()=>{
        setMenuToggle(!menuToggle)
    }

  return (
    <div>
        <div className='bg-black flex justify-between items-center text-white font-sans px-3 py-6 border-b border-gray-800 md:max-w-5xl md:mx-auto'>
            {!menuToggle && 
            <Bars3Icon 
                className='h-6 text-white cursor-pointer md:hidden' 
                onClick={handleMenuToggle}
            />}
            {menuToggle && 
            <XMarkIcon 
                className='h-6 text-white cursor-pointer md:hidden'
                onClick={handleMenuToggle}
            />}
            <h2 className='text-white cursor-pointer font-bold text-2xl'>audiophile</h2>
            <div className='hidden text-sm gap-9 font-semibold md:flex'>
                <a href="">HOME</a>
                <a href="">HEADPHONES</a>
                <a href="">SPEAKERS</a>
                <a href="">EARPHONES</a>
            </div>
            <ShoppingCartIcon className='h-6 text-white cursor-pointer'/>
        </div>
        {menuToggle && <div className='mt-20 md:hidden' >
            {menuCardData.map((item, idx)=>(
                    <MenuCard
                    key={idx} 
                    name={item.name}
                    img={item.img}/>
                ))}
        </div>}
    </div>
  )
}

export default Header