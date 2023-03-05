import React from 'react'

function MenuCard({name, img}) {
  return (
    <div className='font-semibol flex relative justify-center items-end font-sans bg-[#e7e6e7] 
    w-80 h-40 mx-auto rounded-lg text-center cursor-pointer mt-20'>
        <img src={`/${img}`} alt="" className='absolute h-32 top-[-50px]' />
        <div>
            <h2 className='tracking-wider' >{name}</h2>
            <p className='text-sm tracking-wider my-3 hover:text-orange-400 transition transform duration-300'>SHOP 
              <span className='text-orange-400 font-bold' >&gt;</span>
            </p>
        </div>
    </div>
  )
}

export default MenuCard