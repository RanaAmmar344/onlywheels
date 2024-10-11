'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Checkbox } from "@/components/ui/checkbox";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { BiSolidUserDetail } from "react-icons/bi";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
    };
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.password) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className='login-container mx-auto'>
      <Navbar />
      <div className='login-form relative top-[129px] left-[220px]'>
        <div className="max-w-md mx-auto  p-8">
          <h2 className="font-nunito text-4xl font-extrabold leading-[49.1px] text-left custom-color mb-4">SIGN UP</h2>
          <p className='font-nunito text-base font-bold leading-[21.82px] text-left text-[#888EA8] mb-8'>
            Enter your email and password to register
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <i className='font-nunito text-[14px] font-semibold leading-[19.1px] text-left text-white not-italic normal-case'>Name</i>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BiSolidUserDetail className="text-gray-400" size={22} />

                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full lg:w-[440px] h-[38px] p-4 pl-10 text-start text-sm font-nunito font-semibold text-white rounded-lg bg-[rgba(34,33,33,0.36)] focus:outline-none"
                  placeholder="Full Name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <i className='font-nunito text-[14px] font-semibold leading-[19.1px] text-left text-white not-italic normal-case'>Email</i>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full lg:w-[440px] h-[38px] p-4 pl-10 text-start text-sm font-nunito font-semibold text-white rounded-lg bg-[rgba(34,33,33,0.36)] focus:outline-none"
                  placeholder="Full Email"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <i className='font-nunito text-[14px] font-semibold leading-[19.1px] text-left text-white not-italic normal-case'>Password</i>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="text-gray-400" />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full lg:w-[440px] h-[38px] p-4 pl-10 text-start text-sm font-nunito font-semibold text-white rounded-lg bg-[rgba(34,33,33,0.36)] focus:outline-none"
                  placeholder="Full Password"
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="terms2" />
                <label htmlFor="terms2" className="text-sm font-medium leading-none text-[#888EA8] checkbox">
                  Accept terms and conditions
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center login-btn  w-[440px]">
              <button
                type="submit"
                className="h-[38px] w-full bg-red-600 hover:bg-red-700 text-white text-[14px] font-normal rounded-lg transition duration-300"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
        <div className='flex items-center justify-center text-white'>
          <h1 className='my-10 text-[14px]'>
            Already have an account? <span className='custom-color'>SIGN IN</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
