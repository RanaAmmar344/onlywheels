import { LATEST_FEATURED } from '@/constants'
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const LatestFeatured = () => {
  return (
    <div className='l-featured text-white w-full mx-auto py-10 px-4 sm:px-6 md:px-10'>
      <div className='text-center'>
        <h1 className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-semibold tracking-tighter'>
          LATEST <span className='custom-color'>FEATURED</span> <br /> POSTS
        </h1>

        <div className='flex flex-wrap justify-center gap-8 mt-10'>
          {LATEST_FEATURED.map((featured, index) => (
            <div
              key={index}
              className='w-full md:w-1/2 lg:w-1/3 p-4 space-y-3 flex flex-col items-start'
            >
              <Link href='#'> 
              <div className='flex items-center space-x-2'>
                <img
                  src="/featured-logo.png"
                  className='rounded-full bg-black'
                  height={60}
                  width={60}
                  alt=""
                />
                <div>
                  <h3 className='font-semibold'>Only Wheels</h3>
                  <span className='text-sm mr-2'>@onlyWheels</span>
                </div>
                <img className='pb-5 ' src="/tick-icon.png" alt="" />
                <span className='text-xs sm:text-sm relative left-20 bottom-4'>2 hours ago</span>
              </div>

              <p className='max-w-full text-start text-xs sm:text-sm pr-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Image
                className='object-cover w-full aspect-video'
                width={500}
                height={300}
               
                src={featured.image}
                alt="Featured Image" 
              />
              </Link>
            </div>
          ))}
        </div>
        <Button className='custom-bg rounded-full px-5 mt-5'>See More</Button>
      </div>
    </div>
  );
}

export default LatestFeatured;
