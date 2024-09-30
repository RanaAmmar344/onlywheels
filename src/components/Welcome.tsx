'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { WELCOME_DATA } from "@/constants"
import { PlayIcon } from "lucide-react"



const Welcome = () => {
    return (
        <div className='welcom-container mx-auto pb-10'>

            <div className='flex flex-col md:flex-row p-5 md:p-20 space-y-6 '>
                <div className='max-w-2xl  '>
                    <h1 className=' mb-6   sm:w-sm  text-3xl lg:text-6xl md:text-4xl sm:text-3xl '>Welcome to our website!</h1>
                    <p className='text-sm pr-20'>— For only $9.99 a month you'll gain access to the OnlyWheels platform where
                        you will be able to access content such as behind the scenes videos, clips and
                        images from creators and FREE entry into giveaways and competitions once
                        you become a Member! Here at OnlyWheels we are trying to bring the car and
                        bike community together. By joining the members club you will also have
                        access to future promotion Giveaways, Competitions and Events!</p>
                </div>




                <div className=' mx-auto '>
                    <h3 className='text-center custom-bg px-6 py-3 rounded-full cursor-pointer text-white hover:bg-red-700'>Start Your membership Today!</h3>
                </div>
            </div>

            <div className="flex items-center justify-center mx-6 px-20 relative">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-screen-xl border-none"
                >
                    <CarouselContent>
                        {WELCOME_DATA.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 border-none lg:basis-1/3">
                                <div className=" mt-20">
                                    <Card >
                                        <CardContent className="flex aspect-video border-none  items-center justify-center p-1">
                                            <img
                                                src={item.image}
                                                height={400}
                                                width={800}
                                                alt={`Welcome ${index + 1}`}
                                                className="object-cover w-full h-full border-none cursor-pointer "
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute wlc-icon-res top-0 right-0 flex space-x-2 p-8"> 
                        <CarouselPrevious className="bg-black w-16  rounded-full   hover:bg-white hover:text-black mx-4" />
                        <CarouselNext className="bg-black rounded-full  w-16 hover:bg-white hover:text-black" />
                    </div>
                </Carousel>
            </div>




            <h1 className=' text-transparent bg-clip-text bg-[linear-gradient(176.13deg,_rgba(0,_0,_0,_0.115)_-79.58%,_rgba(188,_0,_13,_0.46)_56.68%)]  text-9xl  member-res text-center'>MEMBERS ONLY</h1>



        </div>
    )
}

export default Welcome
