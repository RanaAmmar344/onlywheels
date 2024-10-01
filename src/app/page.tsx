import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Welcome from '../components/Welcome'
import LatestFeatured from '@/components/LatestFeatured'
import WhatWeOffer from '@/components/WhatWeOffer'
import OurGallery from '@/components/OurGallery'
import WhyChoseUs from '@/components/WhyChoseUs'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <LatestFeatured/>
      <WhatWeOffer/>
      <OurGallery/>
      <WhyChoseUs/>
      <Testimonial/>
      <Footer/>
      
    </div>
  )
}

export default page
