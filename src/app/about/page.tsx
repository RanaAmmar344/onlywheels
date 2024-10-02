import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div className=' w-screen mx-auto  overflow-hidden  '>
      <div className='about-container text-center'>
        <Navbar />
        <div className=' py-48 '>
          <h1 className='text-3xl lg:text-6xl  md:text-5xl custom-color sm:text-4xl font-semibold tracking-tighter'>
            ABOUT US
          </h1>
        </div>

        <div className='text-white flex flex-col items-center justify-center '>
          <h1 className='text-3xl lg:text-6xl md:text-5xl  sm:text-4xl font-semibold tracking-tighter mb-10'>ONLY <span className='custom-color'>WHEELS</span>  INFORMATION</h1>
          <p className='max-w-screen-lg text-center space-y-4  px-8'>At OnlyWheels our goal is too bring the bike and car community together to help create new bonds and relationships brining peoples passions together as one. But also to give an opportunity to car and bike content creators a chance to monetize there content. With also giving members the chance of providing everyday Australian's to change their lives with multiple opportunities that will arise in the near future... <br />
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
