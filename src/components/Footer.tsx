import { FOOTER } from '@/constants'
import React from 'react'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

import { TiTick } from "react-icons/ti";
import { Facebook, FacebookIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';


const Footer = () => {
  return (
    <div className='footer text-white p-20'>
  <div className='flex flex-wrap border-b border-neutral-700 pb-10'>

    <div className='w-full md:w-1/2 lg:w-6/12'>
    <img 
    src="/main-logo.png" 
    width={200}
    height={70}
    alt="" />
     <p className='text-sm py-6 max-w-sm'>{FOOTER.description}</p>
     
    </div>
    <div className=''>
          <div className='flex footer-item'> 
          {
            FOOTER.categories.map((footer,index)=>(
              <div key={index} className=' mx-4  w-full md:w-1/2 lg:w-full'>
                <h3 className='font-semibold' >{footer.name}</h3>
                <ul>
                  {footer.links.map((footerlink,index)=>(
                      <li className=' my-1 text-sm' key={index}>
                      <Link className='hover:text-neutral-400' href={footerlink.url}>
                      {footerlink.title}
                    </Link>
                    </li>
                  ))}
                </ul>


              </div>

            ))
          }
          <div className=' w-full mx-8'>
<h3 className='font-semibold' > CONTACT INFO</h3>
<ul className='my-2 space-y-2'>
    <li className='text-sm flex items-center'><IoLocationSharp className='mr-2 size-5' /> Melbourne,Victoria</li>
    <li className='text-sm flex items-center'> <IoIosMail  className='mr-2 size-5' /> Onlywheels.site@hotmail.com</li>
    <li className='text-sm flex items-center'> <TiTick  className='mr-2 size-5' />  ABN 834572893479</li>
</ul>

          </div>
          <div className='w-full social '>
            <h3 className='font-semibold'>FOLLOW US</h3>
            <div className='flex space-x-3 my-2'>
            <FacebookIcon  className='bg-red-600 rounded-full rounded-4 p-1 size-9'  />
            <TwitterIcon  className='bg-red-600 rounded-full rounded-4 p-1 size-9'/>
            <YoutubeIcon  className='bg-red-600 rounded-full rounded-4 p-1 size-9'/>

            </div>
            
          </div>
          </div>
        </div>

  </div>

  <h3 className='flex items-center justify-center pt-2 text-neutral-500 text-center'>{FOOTER.copyright}</h3>
    </div>
  )
}

export default Footer
