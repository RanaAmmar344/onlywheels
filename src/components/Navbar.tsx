"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/main-logo.png'
import Link from 'next/link'
import { Button } from './ui/button'

import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {

        setMobileDrawerOpen(!mobileDrawerOpen)
    };

    return (
        <div>
            <nav className='fixed top-2 z-50 w-screen  mx-10 nav-mb' >
                <div className='container  flex items-center justify-between rounded-lg text-white py-10 px-5'>
                    <Image
                    className=''
                        src={logo}
                        width={160.78}
                        height={36.79}
                        alt='Logo'

                    />
                    <div className='hidden lg:flex bg-black rounded-full px-2 '>
                        <ul className='flex items-center cursor-pointer gap-4'>
                          <Link  href='/' >  <li className=' p-1 hover:border-b-2 hover:border-red-800' >Home</li></Link> 
                          <Link href='/about'> <li className='p-1 hover:border-b-2 hover:border-red-800' >About Us</li></Link> 
                           <li className='p-1 hover:border-b-2 hover:border-red-800'>Road Map</li>
                            <li className='p-1 hover:border-b-2 hover:border-red-800'>Affiliate Area</li>
                            <li className='p-1  hover:border-b-2 hover:border-red-800'>Membership</li>
                            <li className='p-1 hover:border-b-2 hover:border-red-800'>FAQ</li>
                            <li className='p-1 hover:border-b-2 hover:border-red-800'>Posts</li>
                            <li className='p-1 hover:border-b-2 hover:border-red-800'>Posts</li>
                            <li className='p-1 hover:border-b-2 hover:border-red-800'>Contact Us</li>

                        </ul>
                    </div>
                    <div className=' hidden lg:flex text-sm text-white ' >

                        <Link href="/login"> <Button variant='outline' className='rounded-full border border-red-800 text-red-600 hover:bg-red-700 hover:text-white px-11 py-2 mr-2'     > Sign in </Button> </Link>
                        <Link href='/signup' >  <Button className='rounded-full border border-red-600 text-white-500 bg-red-700 hover:bg-red-600 px-11 py-2'>Sign Up</Button></Link>
                    </div>
                    <div className='flex-col justify-end mr-8  md:flex lg:hidden' >

                        <Button onClick={toggleNavbar} > {mobileDrawerOpen ? <X /> : <Menu />}</Button>

                    </div>
                </div>

                {
                    mobileDrawerOpen && (
                        // ------------------------------mobile view----------------------------

                        <div className='lg:hidden mr-20 bg-black rounded-10   pb-6 '>
                            <ul className='flex flex-col text-white items-center p-4 gap-4'>
                                <li className='hover:text-red-800' >Home</li>
                                <li className='hover:text-red-800'>About Us</li>
                                <li className='hover:text-red-800'>Road Map</li>
                                <li className='hover:text-red-800'>Affiliate Area</li>
                                <li className='hover:text-red-800'>Membership</li>
                                <li className='hover:text-red-800'>FAQ</li>
                                <li className='hover:text-red-800'>Posts</li>
                                <li className='hover:text-red-800'>Posts</li>
                                <li className='hover:text-red-800'>Contact Us</li>
                            </ul>
                            <div className=' flex justify-center pb-5 text-sm text-white' >

                                <Link href="/login"> <Button variant='outline' className='rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-2 mr-2'     > Sign in </Button> </Link>
                                <Link href='/signup' >  <Button className='rounded-full border border-red-600 text-white-500 bg-red-600 hover:bg-red-700 px-8 py-2'>Sign UP</Button></Link>
                            </div>
                        </div>
                    )
                }



            </nav>

        </div>


    )
}

export default Navbar

