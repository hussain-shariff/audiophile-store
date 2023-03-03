import React from 'react'
import Image from 'next/image'

function MenuCard() {
  return (
    <div className='font-semibol flex relative justify-center items-end font-sans bg-[#e7e6e7] w-80 h-40 mx-auto rounded-lg text-center cursor-pointer'>
        <img src="/image-speaker-zx9.png" alt="" className='h-24 absolute top-[-50px]' />
        <div>
            <div className='min-h-[2rem] w-28 relative mb-2' >
                <Image
                src="/shadow.png"
                alt=""
                role="presentation"
                layout="fill"
                />
            </div>
            <h2 className='tracking-wider' >SPEAKERS</h2>
            <p className='text-sm tracking-wider my-3'>SHOP <span className='text-orange-400 font-bold' >&gt;</span></p>
        </div>
    </div>
  )
}

export default MenuCard