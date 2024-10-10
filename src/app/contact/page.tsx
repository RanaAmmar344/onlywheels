'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const page = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };
  return (
    <div className=' contact-page  mx-auto  ' >
        <Navbar/>
        <div className='  flex flex-col lg:flex-row lg:justify-around items-center lg:items-start lg:space-x-20 my-40 px-4 lg:px-0'>

               
                <div className='mb-10 lg:mt-48 '>
                    <h1 className='font-bai-jamjuree text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-left text-white border-b-2 pb-3 border-red-600'>
                    CONTACT <span className='custom-color'>US</span> 
                    </h1>
                    <p className='font-bai-jamjuree text-base sm:text-lg lg:text-xl leading-[30px] text-left text-white mt-4'>
                    Feel free to write us.
                    </p>
                </div>

                {/* Contact form */}

                <div>
                <div className="max-w-md mx-auto p-4  my-10 ">
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-[436px] h-[66px] p-4 text-start text-[18px] font-normal text-white  rounded-full bg-[rgba(188,0,13,0.28)]"
                        required
                        placeholder='Name'
                    />
                </div>
                <div className="mb-8">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-[436px] h-[66px] p-4 text-start text-[18px] font-normal text-white rounded-full bg-[rgba(188,0,13,0.28)]"
                        required
                        placeholder='Email'
                    />
                </div>
                <div className="mb-8">
                    
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-[436px] h-[212px] p-4 text-start text-[18px] font-normal text-white   rounded-xl bg-[rgba(188,0,13,0.28)] "
                        rows={4}
                        required
                        placeholder='Write something...'
                    ></textarea>
                </div>
                <div className='flex items-center justify-center'>

                <button
                    type="submit"
                    className=" flex  hover:bg-neutral-400  text-white font-bai-jamjuree text-center text-[22px] font-normal px-4 rounded-full bg-[rgba(188,0,13,0.28)] transition duration-300"
                    >
                    Submit
                </button>
                    </div>
            </form>
        </div>

                </div>
                
            </div>
        

      <Footer/>
        
    </div>
  )
}

export default page
