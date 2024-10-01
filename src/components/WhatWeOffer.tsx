import React from 'react'

const WhatWeOffer = () => {
  return (
    <>
      <div className='we-offer w-screen  mx-auto flex flex-col lg:flex-row items-center justify-center pb-20 px-4'>
      
  <div className='offer-text   mt-10'>
    <h3 className='text-3xl sm:text-5xl lg:text-6xl  text-white tracking-tighter'>
      <span className='  tracking-tighter relative top-5 left-4 '>WHAT</span>
      <br /> 
      <span className='custom-color tracking-tighter text-6xl sm:text-8xl font-bold ml-10 sm:ml-20 lg:ml-40 relative bottom-2 sm:bottom-3 shadow-lg'>
        WE
      </span>
      <br />
      <span className='ml-20 sm:ml-40 lg:ml-60 relative bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-9'>OFFER</span>
    </h3>
  </div>



        <div className='flex flex-col offer-item lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-5 text-white relative  md:right-40   mt-40'>
          <div className="space-y-4 px-4 lg:px-2">
            <h1 className='font-semibold text-xl sm:text-2xl border-b-2 border-red-600 inline-block'>
              ONLYWHEELS MEMBERS ONLY CLUB
            </h1>
            <p className='text-sm'>
              Gain access to OnlyWheels members only club and gain access to free monthly giveaways and also the opportunity to watch content from car and bike content creators uncensored.
            </p>
            <button className='custom-bg px-4 py-1 rounded-full'>Know More</button>
          </div>

          <div className="space-y-4 px-4 lg:px-2">
            <h1 className='font-semibold text-xl sm:text-2xl border-b-2 border-red-600 inline-block'>
              AFFILIATE
            </h1>
            <p className='text-sm'>
              At OnlyWheels, we give car and bike content creators the opportunity to become OnlyWheels content creators, giving them a chance to monetize their content and create another source of income!
            </p>
            <button className='custom-bg px-4 py-1 rounded-full'>Know More</button>
          </div>

          <div className="space-y-4 px-4 lg:px-2">
            <h1 className='font-semibold text-xl sm:text-2xl border-b-2 border-red-600 inline-block'>
              GIVEAWAYS AND MORE!
            </h1>
            <p className='text-sm'>
              After signing up to the OnlyWheels Members Only, you'll gain access to exclusive giveaways and even competitions in the near future!
            </p>
            <button className='custom-bg px-4 py-1 rounded-full'>Know More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
