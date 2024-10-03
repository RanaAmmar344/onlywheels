import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div className=' w-screen mx-auto  overflow-hidden  '>
      <div className='about-container text-center pb-20'>
        <Navbar />
        <div className=' py-48 '>
          <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[68px] text-center custom-color'>
            ABOUT US
          </h1>
        </div>

        <div className='text-white flex flex-col items-center justify-center '>
          <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[67.5px] text-cente mb-10'>ONLY <span className='custom-color'>WHEELS</span>  INFORMATION</h1>
          <p className='max-w-screen-lg font-bai-jamjuree text-[22px] font-medium leading-[32.4px] text-center px-8'>At OnlyWheels our goal is too bring the bike and car community together to help create new bonds and relationships brining peoples passions together as one. But also to give an opportunity to car and bike content creators a chance to monetize there content. With also giving members the chance of providing everyday Australian's to change their lives with multiple opportunities that will arise in the near future... <br />
            With your support we will aim to give back to our supporters and ensure to create opportunities not <br /> just for content creators but also every day people! Come along with us and join the Journey!</p>
        </div>

      </div>
      <span>

      <Footer />
      </span>

      

    </div>
  )
}

export default About
