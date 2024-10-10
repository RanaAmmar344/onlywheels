import Navbar from '@/components/Navbar'
import React from 'react'
import { FiHome } from "react-icons/fi";
import { LuHash } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { Button } from '@/components/ui/button'
import { MEMBERS_FEED } from '@/constants';
import Image from 'next/image';
import { IoEarthSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";






const feed = () => {
    return (
        <div className='feed-main-container mx-auto '>
            <Navbar />
            <div className=' my-52 '>
                <div className='text-white  w-[249px] h-[1186px] absolute top-[148px] p-[2px_12px_12px_12px] gap-[594px] hidden lg:block '>
                    <ul className=' space-y-4 mx-4'>
                        <div className='flex hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer  '>
                            <div className='mr-2' ><FiHome /></div>
                            <li> Home</li>
                        </div>
                        <div className='flex hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer  '>
                            <div className='mr-2'>
                                <LuHash />

                            </div>
                            <li> Explore</li>
                        </div>
                        <div className='flex hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer  '>
                            <div className='mr-2'>
                                < FiBell />
                            </div>
                            <li> Notifications</li>
                        </div>
                        <div className='flex hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer  '>
                            <div className='mr-2'>
                                <IoMailOutline />
                            </div>
                            <li> Messages</li>
                        </div>
                        <div className='flex  hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer '>
                            <div className='mr-2'>
                                <IoBookmarkOutline />
                            </div>
                            <li> Bookmarks</li>
                        </div>
                        <div className='flex  hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer '>
                            <div className='mr-2'>
                                <IoDocumentTextOutline />
                            </div>
                            <li> Videos</li>
                        </div>
                        <div className='flex  hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer '>
                            <div className='mr-2'>
                                <FiUser />
                            </div>
                            <li> Profile</li>
                        </div>
                        <div className='flex  hover:text-red-600  font-segoe-ui text-[20px] font-semibold leading-[24px] text-left  cursor-pointer '>
                            <div className='mr-2'>
                                <CgMoreO />
                            </div>
                            <li> More</li>
                        </div>

                        <Button className='w-[225px] h-[48px] p-[10px_10px] font-bold custom-bg text-center rounded-full hover:border mt-2'  >Post</Button>
                    </ul>
                </div>

                {/* ----------------------------------------------section-2----------------------------------------------------- */}
                <div className='text-white w-full h-auto absolute top-[128px] left-1/2 -translate-x-1/2 md:w-[619px] md:left-[290px] md:transform-none'>

    {
        MEMBERS_FEED.map((item, index) => (
            <div key={index} className='rounded-[30px] py-10 bg-black flex flex-wrap flex-col lg:p-6 space-y-4 mb-10 p-6 '>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <Image
                            className='rounded-full'
                            src={item.profile}
                            width={42}
                            height={42}
                            alt='main-profile'
                        />
                        <div className='flex flex-col mx-2'>
                            <h1 className='font-inter text-[18px] font-bold leading-[21.78px] text-left'>{item.name}</h1>
                            <p className='font-inter text-[14px] font-normal leading-[16.94px] text-left custom-color flex'>{item.time} <IoEarthSharp className='ml-2' />
                            </p>
                        </div>
                    </div>
                    <div>
                        <IoIosMore size={20} className='flex items-center justify-end cursor-pointer relative right-10' />
                    </div>
                </div>
                <h1>{item.title}</h1>
                <Image
                    className='rounded-[24px] h-[400px] aspect-video object-cover'
                    src={item.image}
                    width={671}
                    height={400}
                    alt='main image'
                />
                <div className='flex items-center justify-between custom-color text-sm mx-4'>
                    <p>{item.like}</p>
                    <p>{item.comments_status}</p>
                </div>
                <div className='flex items-center justify-between  feed-btn'>
                    <Button className='custom-bg rounded-full w-[170px] h-[51px] p-[12px_0px] hover:border font-bold text-center'><BiSolidLike color='white' className='mr-1' />Liked</Button>
                    <Button className='custom-bg rounded-full w-[170px] h-[51px] p-[12px_0px] hover:border font-bold'><BiComment className='mr-1' />Comment</Button>
                    <Button className='custom-bg rounded-full w-[170px] h-[51px] p-[12px_0px] hover:border font-bold'>Share</Button>
                </div>
                <div className='w-full max-w-[671px] h-[167px] p-[12px_16px]'>
                    <div>
                        <Image
                            className='rounded-full relative right-6 top-6'
                            src={item.comment_image}
                            width={32}
                            height={32}
                            alt='comment dp'
                        />
                    </div>
                    <div className='ml-6 my-4'>
                        <p className='font-inter text-[16px] font-bold leading-[19.36px] text-left'>{item.comment_name}</p>
                        <p className='font-inter text-[14px] font-normal leading-[18.62px] tracking-[0.03em] text-left mt-2'>{item.comments}</p>
                    </div>
                </div>
                <div className='flex space-x-4 text-sm ml-6 custom-color cursor-pointer'>
                    <h1 className='hover:text-neutral-400'>Like</h1>
                    <h1 className='hover:text-neutral-400'>Reply</h1>
                    <p>{item.comment_time}</p>
                </div>
                <div>
                    <Image
                        className='rounded-full custom-color relative right-2 top-6'
                        src={item.profile}
                        width={32}
                        height={32}
                        alt=''
                    />
                    <input
                        type="text"
                        className="relative left-10 text-sm bg-black placeholder-red-600 placeholder:text-sm"
                        placeholder="Write a comment..."
                    />
                </div>
            </div>
        ))
    }
</div>

                {/* ------------------------------------section-3-------------------------------- */}

                <div className='text-white  w-[308px] h-[1114px] absolute top-[151px] left-[950px] hidden lg:block  '>
                    <div>
                        <i className=" fa-search"><IoSearchOutline /></i>
                        <input type="text" placeholder=' Search ONLLYWHEELS' className='w-full p-4 text-center rounded-full' />
                        <div className='w-[308] h-[510] bg-black space-y-6 p-4 rounded-xl mt-6'>

                            <div className=''>
                                <h1 className='font-segoe-ui text-[20px] font-extrabold leading-[24px] text-left'>What’s happening</h1>
                                <div className='flex items-center justify-between pt-8 custom-color'>
                                    <p className='custom-color'>Trending in Colombia</p>
                                    <IoIosMore size={20} className=' flex items-center justify-end cursor-pointer' />
                                </div>
                                <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>What’s happening</h1>
                                <p className='custom-color'>16.9K Tweets</p>
                            </div>

                            <div>
                                <div className='flex items-center justify-between custom-color'>
                                    <p className='custom-color'>Trending in Colombia</p>
                                    <IoIosMore size={20} className=' flex items-center justify-end cursor-pointer' />
                                </div>
                                <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>What’s happening</h1>
                                <p className='custom-color'>16.9K Tweets</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <Image src='/feed-profile-1.png' className='rounded-full mr-1' width={20} height={20} alt='' />

                                    <span className='font-segoe-ui text-[13px] font-semibold leading-[16px] text-left'>Trending in Colombia </span>   <span className='custom-color font-segoe-ui text-[13px] font-semibold leading-[16px] text-left'>. This morning </span> <br />
                                </div>

                                <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>The pros and cons of the new iPhone - Tips and tricks</h1>

                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <Image src='/feed-profile-1.png' className='rounded-full mr-1' width={20} height={20} alt='' />

                                    <span className='font-segoe-ui text-[13px] font-semibold leading-[16px] text-left'>Trending in Colombia </span>   <span className='custom-color font-segoe-ui text-[13px] font-semibold leading-[16px] text-left'>. This morning </span> <br />
                                </div>

                                <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>The pros and cons of the new iPhone - Tips and tricks</h1>

                            </div>
                            <div>
                                <div className='flex items-center justify-between custom-color'>
                                    <p className='custom-color'>Trending in Colombia</p>
                                    <IoIosMore size={20} className=' flex items-center justify-end cursor-pointer' />
                                </div>
                                <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>What’s happening</h1>
                                <p className='custom-color'>16.9K Tweets <span className='text-white font-segoe-ui text-[13px] font-normal leading-[16px] text-left ml-2' >#GoodMorning</span></p>
                            </div>
                            <h1 className='font-segoe-ui text-[15px] font-normal leading-[20px] text-left'>Show more</h1>

                        </div>
                    </div>

                    <div className=' w-[308] h-[236] bg-black my-10 p-4 rounded-xl'>
                                <h1 className='font-segoe-ui text-[20px] font-extrabold leading-[24px] text-left'>Who to follow</h1>
                                <div className=' flex items-center justify-between mt-8'>
                                    <div className='flex'>
                                        <Image src='/feed-profile-1.png' className='rounded-full' width={42} height={42} alt='' />
                                        <div className='ml-1'>
                                        <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>Elon Musk</h1>
                                        <p className='custom-color'>@elonmusk</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className='w-[79px] h-[32px]  rounded-[20px]  border'>Follow</Button>
                                    </div>
                                </div>
                                <div className=' flex items-center justify-between mt-8'>
                                    <div className='flex'>
                                        <Image src='/feed-profile-1.png' className='rounded-full' width={42} height={42} alt='' />
                                        <div className='ml-1'>
                                        <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>Elon Musk</h1>
                                        <p className='custom-color'>@elonmusk</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className='w-[79px] h-[32px]  rounded-[20px]  border '>Follow</Button>
                                    </div>
                                </div>
                                <div className='mt-6'>

                                <h1 className='font-segoe-ui text-[15px] font-normal leading-[20px] text-left'>Show more</h1>
                                </div>
                            </div>
                            {/* ------------------------- */}
                            <div className=' w-[308] h-[236] bg-black my-10 p-4 rounded-xl'>
                                <h1 className='font-segoe-ui text-[20px] font-extrabold leading-[24px] text-left'>Topics to follow</h1>
                                <div className=' flex items-center justify-between mt-8'>
                                    <div className='flex'>
                                        
                                        <div className='ml-1'>
                                        <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>UX Design</h1>
                                        <p className='custom-color'>Computer programming</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className='w-[79px] h-[32px]  rounded-[20px]  border'>Follow</Button>
                                    </div>
                                </div>
                                <div className=' flex items-center justify-between mt-8'>
                                    <div className='flex'>
                                        
                                        <div className='ml-1'>
                                        <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>Technology</h1>
                                        <p className='custom-color'>All about technology</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className='w-[79px] h-[32px]  rounded-[20px]  border'>Follow</Button>
                                    </div>
                                </div>
                                <div className=' flex items-center justify-between mt-8'>
                                    <div className='flex'>
                                        
                                        <div className='ml-1'>
                                        <h1 className='font-segoe-ui text-[15px] font-bold leading-[20px] text-left'>Python</h1>
                                        <p className='custom-color'>Computer programming</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className='w-[79px] h-[32px]  rounded-[20px]  border'>Follow</Button>
                                    </div>
                                </div>
                                <div className='mt-6'>

                                <h1 className='font-segoe-ui text-[15px] font-normal leading-[20px] text-left'>Show more</h1>
                                </div>
                            </div>

                </div>

            </div>

        </div>
    )
}

export default feed
