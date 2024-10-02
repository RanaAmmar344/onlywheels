'use client';

import { OUR_GALLERY } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import insta from '../../public/follow-us-insta.png';

const OurGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerFrame, setItemsPerFrame] = useState(4); 

    useEffect(() => {
        
        const updateItemsPerFrame = () => {
            const width = window.innerWidth;
            if (width <= 640) {
                setItemsPerFrame(1); 
            } else {
                setItemsPerFrame(6); 
            }
        };

        updateItemsPerFrame(); 
        window.addEventListener('resize', updateItemsPerFrame); 

        return () => {
            window.removeEventListener('resize', updateItemsPerFrame);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerFrame >= OUR_GALLERY.length ? 0 : prevIndex + itemsPerFrame
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? OUR_GALLERY.length - itemsPerFrame : prevIndex - itemsPerFrame
        );
    };

    const currentItems = OUR_GALLERY.slice(currentIndex, currentIndex + itemsPerFrame);

    return (
        <div className=" our-gallery w-screen  mx-auto  relative bottom-3.5 flex flex-col h-full py-20 bg-black items-center justify-center">
           
            <div>
                <h1 className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-white font-semibold tracking-tighter'>
                    OUR <span className='custom-color'>GALLERY</span>
                </h1>
            </div>

          
            <div className="relative w-full max-w-full h-[420px]">
               
                <button
                    onClick={handlePrevious}
                    className=" relative top-80 left-6  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
                >
                    &#8592;
                </button>

                
                <div className="flex gap-6 w-full h-full rounded-lg overflow-hidden mt-20">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className=" relative  w-[280px] h-full md:basis-1/2 lg:basis-1/4  rounded-xl overflow-hidden"
                        >
                            <div className="gallery-clip" > 

                           
                            <video
                                src={item.video}
                                autoPlay
                                muted
                                loop
                                className="object-cover  w-[243px] h-[420px] rounded-xl"
                            />

                           
                            <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-20">
                                <img
                                    src={item.profile}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                                />
                                <p className="text-white font-semibold">{item.name}</p>
                            </div>
                            </div>

                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-10 top-80 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
                >
                    &#8594;
                </button>
            </div>

            <div className="flex items-center justify-center sm:px-10 mt-60">
                <Image src={insta} height={900} alt="Follow us on Instagram" />
            </div>
        </div>
    );
};

export default OurGallery;
