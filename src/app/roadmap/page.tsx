import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'


const Roadmap = () => {
    return (
        <div className='w-full mx-auto bg-black'>
            <div className='road-map-container text-center'>
                <Navbar />
                <div className='py-20 md:py-48'>
                    <h1 className='font-bai-jamjuree custom-color text-[50px] font-bold leading-[68px] text-center'>
                        ROADMAP
                    </h1>
                </div>

                <div className='text-white flex flex-col items-center justify-center'>
                    <h1 className='font-bai-jamjuree text-[50px] font-bold leading-[67.5px] text-center mb-10 lg:mb-20'>
                        HOW <span className='custom-color'>GIVEAWAYS</span> WORK!
                    </h1>
                    <h3 className='custom-color font-bai-jamjuree text-[40px] font-bold leading-[67.5px] text-center mb-6'>
                        FREE ENTRIES EACH MONTH
                    </h3>
                    <p className='font-bai-jamjuree text-[30px] font-bold leading-[43px] text-center max-w-2xl'>
                        Each Month you are a member you gain an extra free entry into every draw, but also access to exclusive content from CAR and BIKE creators and enthusiasts.
                    </p>
                </div>
            </div>

            <div className='accumulate text-center text-white'>
                <h1 className='font-bai-jamjuree text-[49.59px] font-semibold leading-[58px] text-center pt-10 md:pt-20 mb-10'>
                    How Your <span className='custom-color'>Entries</span> Accumulate
                </h1>
                <h1 className='font-bai-jamjuree text-[30px] font-medium leading-[41px] text-center'>
                    Gain additional entries every single month that you’re a member!
                </h1>

                <div className='flex flex-col md:flex-row items-center justify-around my-10 md:my-20'>
                    <Image
                        className='mr-16 md:mr-20'
                        src='/Ticket1.png'
                        width={470}
                        height={400}
                        alt=''
                    />
                    <div className='pt-10 mx-5 md:mx-10 my-10'>
                        <span className='font-bai-jamjuree text-[49.59px] font-semibold leading-[58px] text-left mb-4'>
                            The Day You Sign Up
                        </span>
                        <p className='font-bai-jamjuree text-[30px] font-medium leading-[41px] text-left'>
                            Immediately gain 1 entry into <br /><span className='text-[30px] font-bold'>EVERY SINGLE</span> giveaway we do!
                        </p>
                        <Image
                               className="mt-4" 
                               width={381} 
                               height={286} 
                               src="/bike.png" 
                               alt="A bike" 
                        />
                    </div>
                </div>

                <div className='flex items-center justify-center relative bottom-10 md:bottom-28'>
                    <Image
                        className=''
                        src='/cliped-arrow.png'
                        height={310}
                        width={232}
                        alt='cliped-arrow'
                    />
                </div>

                {/* Section 2 */}
                <div className='flex flex-col md:flex-row items-center justify-around relative bottom-0 md:bottom-60'>
                    <div className='mx-5 md:mx-10'>
                        <span className='font-bai-jamjuree text-[49.59px] font-semibold leading-[58px] text-left mb-4'>
                            3 Months = 3 Entries
                        </span>
                        <p className='font-bai-jamjuree text-[30px] font-medium leading-[41px] text-left'>
                            Automatically gain 3 entries <br /> into every single giveaway <br /> we do!
                        </p>
                        <Image
                            className='mt-4'
                            width={381} 
                            height={286}
                            src='/car.png'
                            alt=''
                        />
                    </div>
                    <Image
                        className='mr-16 md:mr-20'
                        src='/Ticket2.png'
                        width={470}
                        height={400}
                        alt=''
                    />
                </div>

                <div className='flex items-center justify-center relative  md:bottom-52'>
                    <Image
                        src='/cliped-arrow-2.png'
                        height={310}
                        width={332}
                        alt='cliped-arrow'
                    />
                </div>

                {/* Section 3 */}
                <div className='flex flex-col md:flex-row items-center justify-around my-10 md:my-20 relative bottom-0 md:bottom-80'>
                    <Image
                        className='mr-16 md:mr-20'
                        src='/Ticket3.png'
                        width={470}
                        height={400}
                        alt=''
                    />
                    <div className='pt-10 mx-5 md:mx-10'>
                        <span className='font-bai-jamjuree text-[49.59px] font-semibold leading-[58px] text-left mb-4'>
                            6 Months = 6 Entries
                        </span>
                        <p className='font-bai-jamjuree text-[30px] font-medium leading-[41px] text-left'>
                            + Receive a FREE GIFT!
                        </p>
                        <Image
                            className='mt-4'
                            width={381} 
                            height={286}
                            src='/gift.png'
                            alt=''
                        />
                    </div>
                </div>

                <div className='flex items-center justify-center relative bottom-10 md:bottom-96'>
                    <Image
                        src='/cliped-arrow-3.png'
                        height={310}
                        width={332}
                        alt='cliped-arrow'
                    />
                </div>

                {/* Section 4 */}
                <div className='flex flex-col md:flex-row items-center justify-around mb-20 md:mb-32 relative bottom-0 md:bottom-96'>
                    <div className='pt-10 mx-5 md:mx-10'>
                        <span className='font-bai-jamjuree text-[49.59px] font-semibold leading-[58px] text-left flex items-start justify-start mb-4'>
                            12 Months = 12 Entries
                        </span>
                        <p className='font-bai-jamjuree text-[30px] font-medium leading-[41px] text-left'>
                            + Receive another FREE GIFT!
                        </p>
                        <Image
                            className='mt-4'
                            width={381} 
                            height={286}
                            src='/gift.png'
                            alt=''
                        />
                    </div>
                    <Image
                        className='mr-16 md:mr-20'
                        src='/Ticket4.png'
                        width={470}
                        height={400}
                        alt=''
                    />
                </div>
            </div>

            <span>
                <Footer />
            </span>
        </div>
    )
}

export default Roadmap
