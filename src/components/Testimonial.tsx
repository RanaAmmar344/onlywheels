import React from 'react'

const Testimonial = () => {
    return (
        <div className='testimonial bg-black pb-20 '>
            <div className='text-center py-20'>
                <h1 className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl custom-color font-semibold tracking-tighter'>
                TESTIMONIALS <br /> <span className='text-white lg:text-5xl'>Reviews of our <span className='custom-color'>Work</span> </span>
                </h1>
            </div>
            <div className='flex items-center justify-center'>
            <img src="/testimonials.png" alt="" />

            </div>

        </div>
    )
}

export default Testimonial
