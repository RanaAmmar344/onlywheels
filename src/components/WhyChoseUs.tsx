import React from 'react'

const WhyChoseUs = () => {
  return (
    <div className='chose-us '>
      <div className='relative lg:top-60 top-20'>

        {/* Flexbox container for the features */}
        <div className='flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-5 text-white px-5 lg:px-20'>

          {/* Feature 1 */}
          <div className='text-center'>
            <div className='flex items-center justify-center custom-color mb-2'>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold custom-color'>1</h1>
              <span className='text-sm sm:text-base font-semibold ml-3'>CANCELLATIONS AT ANYTIME!</span>
            </div>
            <p className='text-sm sm:text-base max-w-xs sm:max-w-md lg:max-w-lg mx-auto'>
              If you're not happy with OnlyWheels, you have access to cancel at any time with no cancellation fees!
            </p>
          </div>

          {/* Feature 2 */}
          <div className='text-center'>
            <div className='flex items-center justify-center custom-color mb-2'>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold custom-color'>2</h1>
              <span className='text-sm sm:text-base font-semibold ml-3'>CAR & BIKE COMMUNITY</span>
            </div>
            <p className='text-sm sm:text-base max-w-xs sm:max-w-md lg:max-w-lg mx-auto'>
              OnlyWheels focuses on bringing the car and bike community together to collaborate and socialize with other car and bike enthusiasts in the same place!
            </p>
          </div>

          {/* Feature 3 */}
          <div className='text-center'>
            <div className='flex items-center justify-center custom-color mb-2'>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold custom-color'>3</h1>
              <span className='text-sm sm:text-base font-semibold ml-3'>CUSTOMER SERVICE</span>
            </div>
            <p className='text-sm sm:text-base max-w-xs sm:max-w-md lg:max-w-lg mx-auto'>
              24/7 customer service to help anyone at any time with any issues!
            </p>
          </div>

          {/* Feature 4 */}
          <div className='text-center'>
            <div className='flex items-center justify-center custom-color mb-2'>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold'>4</h1>
              <h3 className='text-sm sm:text-base font-semibold ml-3'>GIVEAWAYS AND MORE...</h3>
            </div>
            <p className='text-sm sm:text-base max-w-xs sm:max-w-md lg:max-w-lg mx-auto'>
              At OnlyWheels, we don't just provide a platform but also offer Members the opportunity to win valuable items!
            </p>
          </div>

        </div>

      </div>

      {/* Title "WHY CHOOSE US?" */}
      <h1 className=' text-transparent bg-clip-text bg-[linear-gradient(176.13deg,_rgba(0,_0,_0,_0.115)_-79.58%,_rgba(188,_0,_13,_0.46)_56.68%)] text-5xl sm:text-7xl lg:text-9xl member-res text-center lg:mt-80 pt-16'>
        WHY CHOOSE US?
      </h1>
    </div>
  )
}

export default WhyChoseUs;
