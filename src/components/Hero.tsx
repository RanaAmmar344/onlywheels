"use client"
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='hero-container w-full mx-auto  '>
      
      <div className='text-white max-w-3xl flex flex-col items-center justify-center   '>
        <div className=' hero-sm-text space-y-8 mt-40  ml-20 pt-20' >  
        <h1 className='  custom-text-big text-5xl lg:text-5xl md:text-4xl sm:text-2xl font-semibold '>IF YOU <span className='custom-color' > LOVE  </span> CARS & <span className='custom-color' > BIKES </span> THIS IS THE PLACE TO BE! </h1>
        <p className='max-w-sm'>Gain access to exclusive Giveaways,<br /> Competitions, Events and MORE! when you become an OnlyWheels Member.</p>
         <div>
          <h3 className='pt-9 font-bold cursor-pointer inline-block p-1 hover:border-b-2 hover:border-red-800 '>Start Your Membership Now</h3>
         </div>
      
      </div>
      </div>

      
    </div>
  )
}

export default Hero
