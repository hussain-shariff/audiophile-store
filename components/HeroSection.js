import React from 'react'

function HeroSection() {
  return (
    <div className='bg-black relative md:max-w-5xl md:mx-auto'>
        <div className='text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[100%] p-12 space-y-5'>
            <h2 className=' text-sm font-thin tracking-[10px]'>NEW PRODUCT</h2>
            <h1 className='text-4xl font-semibold'>XX99 MARK II HEADPHONES</h1>
            <p className='font-thin'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button className='bg-[#d87e4b] text-sm font-semibold px-7 py-3 hover:bg-[#fbad83] transition transform delay-150' >SEE PRODUCT</button>
        </div>
        <img src="/headphone-hero-image.png" alt="dafd" className='pt-3'/>
    </div>
  )
}

export default HeroSection