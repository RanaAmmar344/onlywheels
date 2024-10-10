import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ } from '@/constants'
import { MdArrowOutward } from "react-icons/md";
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Faq = () => {
    return (
        <div className='faq-container mx-auto w-screen'>
            <Navbar />

            <div className='flex flex-col lg:flex-row lg:justify-around items-center lg:items-start lg:space-x-20 my-40 px-4 lg:px-0'>

                <div className='mb-10 lg:mt-48 '>
                    <h1 className='font-bai-jamjuree text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-left text-white border-b-2 pb-3 border-red-600'>
                        Frequently Asked <br /> Questions
                    </h1>
                    <p className='font-bai-jamjuree text-base sm:text-lg lg:text-xl leading-[30px] text-left text-white mt-4'>
                        Have a Question?
                    </p>
                </div>

              
                <div className='w-full  text-white bg-[rgba(188,0,13,0.28)] p-6 rounded-xl lg:max-w-2xl'>
                    <h1 className='font-bai-jamjuree text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-center'>
                        Do you have questions?
                    </h1>
                    {
                        FAQ.map((faq, index) => (
                            <Accordion key={index} type="single" collapsible className="w-full my-6">
                                <AccordionItem value={faq.value}>
                                    <AccordionTrigger className="text-lg sm:text-xl lg:font-family: Nunito Sans;font-size: 20px;font-weight: 600;line-height: 27.28px;text-align: left;
">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-sm sm:text-base lg:font-nunito-sans text-[16px] font-normal leading-[21.82px] text-left">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }

                    <div className='flex flex-col sm:flex-row items-center justify-center my-10'>
                        <p className='font-nunito-sans text-sm sm:text-base lg:text-lg font-normal leading-[30px] text-center mr-2'>
                            My question is not here.
                        </p>
                        <Button className='bg-white text-black rounded-xl flex items-center mt-4 sm:mt-0'>
                            CONNECT US <MdArrowOutward className='ml-2' />
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Faq
