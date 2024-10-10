import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' mx-auto w-screen'>
        <Navbar/>
        <div className=' member-only-container flex flex-col items-center justify-center '>   
        <h1 className='font-roboto text-[32px] font-bold text-center text-white'>This Content is <span className='custom-color'>MEMBERS ONLY!</span> </h1>
            <div className=' my-8   lg:relative left-10'>
              <Link href='/login'> <Button   className='custom-bg lg:mr-24 mr-10 text-white rounded-full w-[145px] h-[27px] px-16 font-bai-jamjuree text-[16px] font-medium text-center hover:border'  >Login</Button></Link> 
              <Link href='/signup'> <Button   className='custom-bg lg:mr-24 mr-10 text-white rounded-full w-[145px] h-[27px] px-16 font-bai-jamjuree text-[16px] font-medium text-center hover:border'  >Join Now!</Button></Link> 
         
            </div> 
        </div>
        
        <Footer/>

       
    </div>
  )
}

export default page
