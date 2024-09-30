'use client'
import { WELCOME_DATA } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Welcome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerFrame, setItemsPerFrame] = useState(4); // Default to 4 for large screens

    useEffect(() => {
        const updateItemsPerFrame = () => {
            const width = window.innerWidth;
            if (width <= 640) {
                setItemsPerFrame(2); // 1 frame for mobile devices
            } else if (width <= 1024) {
                setItemsPerFrame(3); // 2 frames for tablets
            } else {
                setItemsPerFrame(3); // 4 frames for larger screens
            }
        };

        updateItemsPerFrame(); // Call once to set the correct frame count on load
        window.addEventListener('resize', updateItemsPerFrame); // Update on window resize

        return () => {
            window.removeEventListener('resize', updateItemsPerFrame);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerFrame >= WELCOME_DATA.length ? 0 : prevIndex + itemsPerFrame
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? WELCOME_DATA.length - itemsPerFrame : prevIndex - itemsPerFrame
        );
    };

    const currentItems = WELCOME_DATA.slice(currentIndex, currentIndex + itemsPerFrame);

    return (
        <div className="welcom-container mx-auto pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row pt-20 md:p-20 space-y-6">
                <div className="max-w-2xl">
                    <h1 className="mb-6 text-3xl lg:text-6xl md:text-4xl sm:text-3xl">Welcome to our website!</h1>
                    <p className="text-sm pr-20">— For only $9.99 a month you'll gain access to the OnlyWheels platform where
                        you will be able to access content such as behind the scenes videos, clips and
                        images from creators and FREE entry into giveaways and competitions once
                        you become a Member! Here at OnlyWheels we are trying to bring the car and
                        bike community together. By joining the members club you will also have
                        access to future promotion Giveaways, Competitions and Events!</p>
                </div>

                {/* Membership CTA */}
                <div className="mx-auto">
                    <h3 className="text-center custom-bg px-6 py-3 rounded-full cursor-pointer text-white hover:bg-red-700">
                        Start Your Membership Today!
                    </h3>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full max-w-[1600px] h-[420px] lg:mx-20 mx-5 pb-20">
                {/* Buttons for mobile and large devices */}
                <div className="absolute top-5  right-2   lg:right-40 pb-20 mx-6  flex space-x-2 z-10">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="text-black px-2 mr-4  lg:px-4 bg-white p-1 lg:p-2 rounded-full"
                    >
                        <FaLongArrowAltLeft />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="text-black px-2 lg:px-4 bg-white p-1 lg:p-2 rounded-full"
                    >
                        <FaLongArrowAltRight />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex gap-2 m lg:gap-4 w-full h-full rounded-lg overflow-hidden ">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[150px] md:w-[200px] lg:w-[280px] h-full  bg-green md:basis-1/2 lg:basis-1/3 rounded-xl overflow-hidden"
                        >
                            <div className="absolute bottom-3 lg:bottom-1 left-2 lg:left-4 flex items-center space-x-1 z-20">
                                <img
                                    src={item.image}
                                    className="object-cover aspect-video  w-[450px] md:w-[600px] lg:w-[900px] h-[190px] md:h-[200px] lg:h-[250px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <h1 className="text-transparent bg-clip-text bg-[linear-gradient(176.13deg,_rgba(0,_0,_0,_0.115)_-79.58%,_rgba(188,_0,_13,_0.46)_56.68%)] text-9xl member-res text-center">
                MEMBERS ONLY
            </h1>
        </div>
    );
}

export default Welcome;
