import Navbar from '@/components/Navbar'
import { MEMBERSHIP } from '@/constants'
import { FaCircleCheck } from "react-icons/fa6";
import Image from 'next/image';
import React from 'react'

const membership = () => {
  return (
    <div className='w-screen mx-auto overflow-hidden bg-black'>
        <div className="membership-container text-center text-white">

        <Navbar />
                <div className='py-20 relative top-16 md:py-40'>
                    <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[68px] text-left lg:text-center'>
                     IF YOU LOVE <span className='custom-color'>CARS AND BIKES  </span> 
                    </h1>
                    <h1 className='font-bai-jamjuree text-[40px] font-medium leading-[68px] text-left lg:text-center'>THIS IS THE PLACE TO BE!</h1>
                    <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[67.5px] text-left lg:text-center my-20'> <span className='custom-color'>MEMBERSHIPS</span>  PLANS</h1>
                </div>

     <div className='flex flex-wrap items-center justify-center mx-10'>
  {/* Card container */}
  <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
    <div className=' member-card  p-6'>   
      <h1 className='font-bai-jamjuree text-[28px] font-bold leading-[35px] text-left '>BRONZE</h1>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left text-black'>First Time</h1>
        <Image
          className='custom-color'
          width={106}
          height={75}
          src='/dollar.png'
          alt=''
        />
      </div>
      <p>
        First month Offer Then $9.99 Billed Monthly (cancel anytime)
      </p>
      <hr className='my-20' />
      <div className='space-y-4 p-2'>
        <div className='flex text-center'>
          <FaCircleCheck color='green' className='mr-2 pb-2' size={33} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            3x Accumulating Free Entry into every Promotion Giveaway
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            5% off Future Merchandise
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Future events
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Posts Page
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Cancel at ANYTIME!
          </p>
        </div>
      </div>
   
    </div>
  </div>
  {/* ----------------------------------------------card-2 -------------------------------------- */}
  <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
    
    <div className='member-main-card-2 p-4'>
     
      <h1>BRONZE</h1>
      <div>
        <h1 className='text-sm'>First Time</h1>
        <Image
          className='custom-color'
          width={106}
          height={75}
          src='/dollar.png'
          alt=''
        />
      </div>
      <p>
        First month Offer Then $9.99 Billed Monthly (cancel anytime)
      </p>
      <hr className='my-20' />
      <div className='space-y-4 p-2'>
        <div className='flex text-center'>
          <FaCircleCheck color='green' className='mr-2 pb-2' size={33} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            3x Accumulating Free Entry into every Promotion Giveaway
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            5% off Future Merchandise
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Future events
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Posts Page
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Cancel at ANYTIME!
          </p>
        </div>
      </div>
    
    </div>
    
  </div>
  {/* -------------------------------------------------card-3------------------------------------------------------- */}
  <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
    
    <div className='member-main-card-3 p-4'>
     
      <h1>BRONZE</h1>
      <div>
        <h1 className='text-sm'>First Time</h1>
        <Image
          className='custom-color'
          width={106}
          height={75}
          src='/dollar.png'
          alt=''
        />
      </div>
      <p>
        First month Offer Then $9.99 Billed Monthly (cancel anytime)
      </p>
      <hr className='my-20' />
      <div className='space-y-4 p-2'>
        <div className='flex text-center'>
          <FaCircleCheck color='green' className='mr-2 pb-2' size={33} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            3x Accumulating Free Entry into every Promotion Giveaway
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            5% off Future Merchandise
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Future events
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Posts Page
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Cancel at ANYTIME!
          </p>
        </div>
      </div>
    
    </div>
    
  </div>
  {/* -----------------------------------------------card-4----------------------------------------------------- */}
  <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
    
    <div className='member-main-card-4 p-4'>
     
      <h1>BRONZE</h1>
      <div>
        <h1 className='text-sm'>First Time</h1>
        <Image
          className='custom-color'
          width={106}
          height={75}
          src='/dollar.png'
          alt=''
        />
      </div>
      <p>
        First month Offer Then $9.99 Billed Monthly (cancel anytime)
      </p>
      <hr className='my-20' />
      <div className='space-y-4 p-2'>
        <div className='flex text-center'>
          <FaCircleCheck color='green' className='mr-2 pb-2' size={33} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            3x Accumulating Free Entry into every Promotion Giveaway
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            5% off Future Merchandise
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Future events
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Access to Posts Page
          </p>
        </div>
        <div className='flex'>
          <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
          <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
            Cancel at ANYTIME!
          </p>
        </div>
      </div>
    
    </div>
    
  </div>

</div>

        </div>
      
    </div>
  )
}

export default membership
