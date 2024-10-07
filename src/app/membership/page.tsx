import Navbar from '@/components/Navbar'
import { MEMBERSHIP } from '@/constants'
import { FaCircleCheck } from "react-icons/fa6";
import Image from 'next/image';
import React from 'react'
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer'
const membership = () => {
  return (
    <div className='w-screen mx-auto overflow-hidden bg-black'>
      <div className="membership-container text-center text-white">

        <Navbar />
        <div className='py-20 relative top-16 md:py-40'>
          <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[68px] text-center'>
            IF YOU LOVE <span className='custom-color'>CARS AND BIKES  </span>
          </h1>
          <h1 className='font-bai-jamjuree text-[40px] font-medium leading-[68px] :text-center'>THIS IS THE PLACE TO BE!</h1>
          <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[67.5px] text-center my-20'> <span className='custom-color'>MEMBERSHIPS</span>  PLANS</h1>
        </div>

        <div className='flex flex-wrap items-center justify-around  lg:mx-auto mx-10'>
          {/* Card container */}
          <div className='w-full md:w-1/2 lg:w-1/4 p-2 '>

            <div className=' member-card  p-6'>
              <div>
                <Image
                  className='moved-element  '
                  src='/card-1-sticker.png'
                  width={126}
                  height={155}
                  alt='card-sticker'
                />
                <div className='flex flex-col text-black relative left-20 bottom-4 items-center  '>
                  <h1 className='font-bai-jamjuree text-[36px] font-bold leading-[45px] text-left element-text' >$2.50</h1>
                  <p className='font-bai-jamjuree text-[24px] font-normal leading-[30px] text-left'>weekly</p>
                </div>
              </div>

              <h1 className='font-bai-jamjuree text-[28px] font-bold leading-[35px] text-left relative bottom-10 '>BRONZE</h1>
              <div className='flex flex-col items-center justify-center mt-10 ml-4 '>
                <h1 className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left text-black'>First Time</h1>
                <Image
                  className='custom-color element-text'
                  style={{ width: "100px", height: "auto" }}
                  src='/dollar.png'
                  width={106}
                  height={75}
                  alt=''
                />
              </div>
              <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-center text-black mt-6'>
                First month Offer Then $9.99 Billed Monthly (cancel anytime)
              </p>

              <div className=" my-12  h-1  border-t border-gray-400 " />
              <div className='space-y-4 p-2'>
                <div className='flex text-center'>
                  <FaCircleCheck color='green' className='mr-2 pb-2' size={40} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    3x Accumulating Free Entry into every Promotion Giveaway
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={19} />
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
              <div className="w-[230px] h-0 absolute top-[900px] left-[32px]  border-t border-gray-500 " />

              <Button className="  mt-32 relative bottom-3 w-[145px] h-[27px] font-bai-jamjuree text-[19px] font-medium text-center text-black  px-12 rounded-[22px] shadow-[0px_4px_45.1px_rgba(188,0,13,1)] bg-white ">
                Select
              </Button>
            </div>
          </div>
          {/* ----------------------------------------------card-2 -------------------------------------- */}
          <div className='w-full md:w-1/2 lg:w-1/4 p-2 '>

            <div className='member-main-card-2 p-4'>
              <div>
                <Image
                  className='moved-element  '
                  src='/card-1-sticker.png'
                  width={126}
                  height={155}
                  alt='card-sticker'
                />
                <div className='flex flex-col text-black relative left-20 bottom-4 items-center  '>
                  <h1 className='font-bai-jamjuree text-[36px] font-bold leading-[45px] text-left element-text' >$5.0</h1>
                  <p className='font-bai-jamjuree text-[24px] font-normal leading-[30px] text-left'>weekly</p>
                </div>
              </div>

              <h1 className='font-bai-jamjuree text-[28px] font-bold leading-[35px] text-left  relative bottom-10 ml-4 '>SILVER</h1>
              <div className='flex flex-col items-center justify-center mt-10 ml-4'>
                <h1 className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left text-black'>First Time</h1>
                <Image
                  className='element-text'
                  src='/dollar.png'
                  style={{ width: "100px", height: "auto" }}
                  width={106}
                  height={75}
                  alt=''
                />
              </div>
              <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-center text-black mt-7'>
                First month Offer Then $19.99 Billed Monthly (cancel anytime)
              </p>
              <div className=" my-12  h-1  border-t border-gray-500 " />
              <div className='space-y-4 p-2'>
                <div className='flex text-center'>
                  <FaCircleCheck color='green' className='mr-2 pb-2' size={41} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    10x Accumulating Free Entry into every Promotion Giveaway
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={32} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    Membership Package: stickers, car air freshener
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={18} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    10% of future merchandise
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    Access to future Events
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

              <div className="w-[230px] h-0 absolute top-[900px] left-[32px]  border-t border-gray-500 " />

              <Button className="  mt-14 w-[145px] h-[27px] font-bai-jamjuree text-[19px] font-medium text-center text-black  px-12 rounded-[22px] shadow-[0px_4px_45.1px_rgba(188,0,13,1)] bg-white ">
                Select
              </Button>
            </div>



          </div>
          {/* -------------------------------------------------card-3------------------------------------------------------- */}
          <div className='w-full md:w-1/2 lg:w-1/4 p-2'>

            <div className='member-main-card-3 p-4'>
              <div>
                <Image
                  className='moved-element  '
                  src='/card-1-sticker.png'
                  width={126}
                  height={155}
                  alt='card-sticker'
                />
                <div className='flex flex-col text-black relative left-20 bottom-4 items-center  '>
                  <h1 className='font-bai-jamjuree text-[36px] font-bold leading-[45px] element-text  text-left element-text' >$12.5</h1>
                  <p className='font-bai-jamjuree text-[24px] font-normal leading-[30px] text-left'>weekly</p>
                </div>
              </div>

              <h1 className='font-bai-jamjuree text-[28px] font-bold leading-[35px] text-left  relative bottom-10 ml-4 '>GOLD</h1>
              <div className='flex flex-col items-center justify-center mt-10 ml-4'>
                <h1 className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left text-black'>First Time</h1>
                <Image
                  className='element-text'
                  src='/dollar.png'
                  style={{ width: "100px", height: "auto" }}
                  width={106}
                  height={75}
                  alt=''
                />
              </div>
              <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-center text-black mt-7'>
                First month Offer Then $49.99 Billed Monthly (cancel anytime)
              </p>
              <div className=" my-12  h-1  border-t border-gray-400 " />
              <div className='space-y-4 p-2'>
                <div className='flex text-center'>
                  <FaCircleCheck color='green' className='mr-2 pb-2' size={38} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    25x Accumulating Free Entry into every Promotion Giveaway
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={37} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    Membership Package: sticker, car air freshener, Lanyard
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={18} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    20% of future merchandise
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    Access to future Events
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
              <div className="w-[230px] h-0 absolute top-[900px] left-[32px]  border-t border-gray-500 " />

              <Button className="  mt-14 w-[145px] h-[27px] font-bai-jamjuree text-[19px] font-medium text-center text-black  px-12 rounded-[22px] shadow-[0px_4px_45.1px_rgba(188,0,13,1)] bg-white ">
                Select
              </Button>
            </div>

          </div>
          {/* -----------------------------------------------card-4----------------------------------------------------- */}
          <div className='w-full md:w-1/2  lg:w-1/4 p-2'>

            <div className='member-main-card-4 p-4'>
              <div>
                <Image
                  className='moved-element  '
                  src='/card-1-sticker.png'
                  width={126}
                  height={155}
                  alt='card-sticker'
                />
                <div className='flex flex-col text-black relative left-20 bottom-4 items-center  '>
                  <h1 className='font-bai-jamjuree text-[36px] font-bold leading-[45px] text-left element-text ' >$25.0</h1>
                  <p className='font-bai-jamjuree text-[24px] font-normal leading-[30px] text-left'>weekly</p>
                </div>
              </div>
              <h1 className='font-bai-jamjuree text-[28px] font-bold leading-[35px] text-left  relative bottom-10  tracking-tighter  '>PLATINIUM</h1>
              <div className='flex flex-col items-center justify-center mt-10 ml-4'>
                <h1 className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left mb-text'>First Time</h1>
                <Image
                  className='mb-text element-text '

                  src='/dollar-gold.png'
                  style={{ width: "100px", height: "auto" }}
                  width={106}
                  height={75}
                  alt=''
                />
              </div>
              <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-center text-white mt-7'>
                First month Offer Then $49.99 Billed Monthly (cancel anytime)
              </p>
              <div className=" my-12  h-1  border-t border-orange-300 " />
              <div className='space-y-4 p-2'>
                <div className='flex text-center'>
                  <FaCircleCheck color='green' className='mr-2 pb-2' size={38} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    50x Accumulating Free Entry into every Promotion Giveaway
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={37} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    Membership Package: sticker, car air freshener, Lanyard
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    25% of future merchandise
                  </p>
                </div>
                <div className='flex'>
                  <FaCircleCheck color='green' className='mr-2 mt-1' size={16} />
                  <p className='font-bai-jamjuree text-[22px] font-medium leading-[26px] text-left'>
                    Access to future Events
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
              <div className="w-[230px] h-0 absolute top-[900px] left-[32px]  border-t border-gray-500 " />

              <Button className="  mt-14 w-[145px] h-[27px] font-bai-jamjuree text-[19px] font-medium text-center text-black  px-12 rounded-[22px] shadow-[0px_4px_45.1px_rgba(188,0,13,1)] bg-white ">
                Select
              </Button>

            </div>

          </div>

        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}

        <div className='flex flex-col items-center justify-center'>
          <div className='text-center w-full h-full my-20'>

            <h1 className='font-bai-jamjuree text-[46px] font-bold '>GET <span className='custom-color' >EXTRA</span>  ENTRIES</h1>
            <h3 className='font-bai-jamjuree text-[28px] font-bold custom-color '>EVERY SINGLE MONTH FOR FREE!</h3>
          </div>
          <div className=' flex items-center justify-center '>
            <Image
              className=''
              src='/member-group.png'
              width={765}
              height={525}
              alt=''

            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bai-jamjuree text-[40px] sm:text-[46px] md:text-[60px] lg:text-[77px] font-bold'>
              <span className='custom-gold'>GOLD </span>
              <span className='custom-color'> MEMBERSHIP  </span> <br />
              <span className='font-bai-jamjuree text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold relative bottom-6 mb-10'>
                <span className='custom-color'> FIFTEEN ENTRIES </span> EVERY MONTH
              </span>
            </h1>


            <Image
              className=''
              src='/give-away.png'
              width={733}
              height={861}
              alt=''
            />
          </div>
          <div className='member-benefit-container flex flex-col items-center my-10 lg:my-20'>
            <h1 className='font-bai-jamjuree text-[30px] sm:text-[40px] md:text-[50px] font-bold leading-tight text-center'>
              BENEFITS OF BEING AN <span className='custom-color'>ONLYWHEELS</span> <br /> MEMBER!
            </h1>
            <div className='space-y-4 sm:space-y-6 pr-0 sm:pr-6 my-10 sm:my-20'>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-normal text-left'>
                  Every Promotion Giveaway we run, you're automatically in it.
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-normal text-left'>
                  Your entries are accumulating every month increasing your chances of winning!
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-normal text-left'>
                  All Members will receive a Membership Package!
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-normal text-left'>
                  Gain access to the Onlywheels Platform.
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-normal text-left'>
                  Open to Australian Residents.
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-normal text-left'>
                  Invites to Exclusive Events reserved for OnlyWheels Members.
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------ */}

          <div className="give-away-detials flex flex-col items-center justify-center">
            <h1 className='font-bai-jamjuree text-[30px] sm:text-[40px] lg:text-[50px] font-bold leading-tight text-center'>
              <span className='custom-color'>GIVEAWAY</span> DETAILS
            </h1>

            <div className='space-y-4 sm:space-y-6 my-10 sm:my-20 lg:px-28'>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] lg:text-[30px] font-medium leading-normal text-left'>
                  The Giveaway winner will be announced on our Instagram Live! and posted on all our social media platforms.
                </p>
              </div>
              <div className='flex '>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] lg:text-[30px] font-medium leading-normal text-left'>
                  Winner will have the privilege of choosing the specific type of BCRacing coilovers that matches their vehicle! (NOTE: Winner will be required to provide proof of ownership of the vehicle if they select the coilovers!)
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] lg:text-[30px] font-medium leading-normal text-left'>
                  If the winner is not found, there will be a redraw with all Members who entered.
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] lg:text-[30px] font-medium leading-normal text-left'>
                  Prize will be delivered to the winner Australia-wide within 15-20 business days of the announcement.
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] lg:text-[30px] font-medium leading-normal text-left'>
                  The Prize will be hand-picked, drawn using our Prize Barrel!
                </p>
              </div>
              <div className='flex'>
                <div>

                  <FaCircleCheck color='green' className='mr-2  mt-3' size={20} />
                </div>
                <p className='font-bai-jamjuree text-[18px] sm:text-[22px] lg:text-[30px] font-medium leading-normal text-left'>
                  Giveaway will end on May 31st, and the winner will be announced on June 1st.
                </p>
              </div>
            </div>
          </div>
          <div className="more-entries bg-black flex flex-col items-center justify-center">

            <Image
            src='/entry-img.png'
            width={307}
            height={375}
            alt=''
            />
            <h1 className='font-roboto text-[20px]  md:text-[32px] font-bold text-center my-10'>
  More <span className='custom-color'>ENTRIES </span> .... More <span className='custom-color'>CHANCES</span>
</h1>
<p className='font-bai-jamjuree text-[12px] sm:text-[16px] md:text-[24px] font-medium leading-[20px] sm:leading-[28px] md:leading-[36.1px] text-center max-w-xs sm:max-w-lg lg:max-w-4xl'>
  The more entries you have, the greater chance you have of winning! Varied packages provide different amounts of entries, which can increase the chances of Members winning.
</p>


          </div>


        </div>




      </div>
      <Footer/>

    </div>
  )
}

export default membership
