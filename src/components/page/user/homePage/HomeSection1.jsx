import React, { memo, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import AOS from "aos";
import "aos/dist/aos.css";
// Swiper styles
import 'swiper/css'

import TextType from './TextType';

const HomeSection1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in-up">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={
            {
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }
          }
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerGroup={1}
          onSlideChangeTransitionEnd={() => {
            AOS.refresh();
          }}

        >
          <SwiperSlide>
            <div className='flex justify-center mt-4'>
              <div className='w-4xl'>
                <h1 className='text-center text-purple-600 text-3xl font-bold'>
                  <TextType
                    text={'Book Your Salon Appointment in 3 Easy Steps'}
                    typingSpeed={80}
                    pauseDuration={4000}
                    showCursor={true}
                    cursorCharacter="..."
                  /></h1>
                <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white font-[Poppins]">

                  <div className="flex flex-col space-y-12 w-full lg:w-1/2">

                    <div data-aos="fade-right" data-aos-delay="100" className="flex items-start space-x-4">
                      <div className="bg-[#EDEAFF] p-4 rounded-xl shadow">
                        📅
                      </div>
                      <div>
                        <h3 className="text-purple-600 font-bold text-lg">Step 1 Choose Your Salon</h3>
                        <p className="text-gray-500 text-sm mt-1">Browse nearby salons and pick your favorite one.</p>
                      </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="300" className="flex items-start space-x-4">
                      <div className="bg-[#EDEAFF] p-4 rounded-xl shadow">
                        ✂️
                      </div>
                      <div>
                        <h3 className="text-purple-600 font-bold text-lg">Step 2 Select Your Services</h3>
                        <p className="text-gray-500 text-sm mt-1">Haircut, grooming, facial & more.</p>
                      </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="500" className="flex items-start space-x-4">
                      <div className="bg-[#EDEAFF] p-4 rounded-xl shadow">
                        📆
                      </div>
                      <div>
                        <h3 className="text-purple-600 font-bold text-lg">Step 3 Pick Date & Time + Confirm</h3>
                        <p className="text-gray-500 text-sm mt-1">Choose your slot & confirm instantly.</p>
                      </div>
                    </div>

                  </div>

                  <div className="mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center">
                    <div className="w-64 h-auto bg-white border-4 border-gray-800 rounded-3xl p-4 shadow-lg">
                      <h3 className="font-semibold text-gray-700 mb-4">Book a Salon Visit</h3>

                      <div className="space-y-4">
                        <div data-aos="zoom-in-up" className="border p-3 rounded-xl shadow-sm">
                          <h4 className="font-semibold text-gray-800">Glow Up Studio <span className="text-gray-500 text-sm">Khar</span></h4>
                          <p className="text-yellow-500 text-sm mt-1">⭐ 4.8 | 625</p>
                          <p className="text-purple-600 font-bold mt-1">₹1500</p>
                        </div>

                        <div data-aos="zoom-in-up" className="border p-3 rounded-xl shadow-sm">
                          <h4 className="font-semibold text-gray-800">Stylista <span className="text-gray-500 text-sm">Bandra</span></h4>
                          <p className="text-yellow-500 text-sm mt-1">⭐ 4.8 | 202</p>
                          <p className="text-purple-600 font-bold mt-1">₹2000</p>
                        </div>

                        <div data-aos="zoom-in-up" className="border p-3 rounded-xl shadow-sm">
                          <h4 className="font-semibold text-gray-800">Salon 360 <span className="text-gray-500 text-sm">Andheri</span></h4>
                          <p className="text-yellow-500 text-sm mt-1">⭐ 4.7 | 88</p>
                          <p className="text-purple-600 font-bold mt-1">₹1800</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <marquee behavior="alternative" direction="right">
              <p className="text-center text-gray-600 mt-8 text-lg">
                • Fast Booking • No Waiting • Verified Salons
              </p>
            </marquee>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center mt-4'>
              <div className='w-4xl'>
                <h1 className='text-center text-purple-600 text-3xl font-bold'>
                  <TextType
                    text={'How to Book a Beautician / Barber at Home'}
                    typingSpeed={80}
                    pauseDuration={4000}
                    showCursor={true}
                    cursorCharacter="..."
                  /></h1>
                <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white font-[Poppins]">

                  <div className="flex flex-col space-y-12 w-full lg:w-1/2">

                    <div data-aos="fade-right" className="flex items-start space-x-4">
                      <div className="bg-[#EDEAFF] p-4 rounded-xl shadow">
                        📅
                      </div>
                      <div>
                        <h3 className="text-purple-600 font-bold text-lg">Step 1 Choose Your Beautician</h3>
                        <p className="text-gray-500 text-sm mt-1">Browse available beautician and  pick your favorite one.</p>
                      </div>
                    </div>

                    <div data-aos="fade-right" className="flex items-start space-x-4">
                      <div className="bg-[#EDEAFF] p-4 rounded-xl shadow">
                        ✂️
                      </div>
                      <div>
                        <h3 className="text-purple-600 font-bold text-lg">Step 2 Select Your Services</h3>
                        <p className="text-gray-500 text-sm mt-1">Choose the services you want - haircut, shave, or more</p>
                      </div>
                    </div>

                    <div data-aos="fade-right" className="flex items-start space-x-4">
                      <div className="bg-[#EDEAFF] p-4 rounded-xl shadow">
                        📆
                      </div>
                      <div>
                        <h3 className="text-purple-600 font-bold text-lg">Step 3 Pick Date & Time + Confirm</h3>
                        <p className="text-gray-500 text-sm mt-1">Select your convenient slot and confirm instantly</p>
                      </div>
                    </div>

                  </div>

                  <div className="mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center">
                    <div className="w-64 h-auto bg-white border-4 border-gray-800 rounded-3xl p-4 shadow-lg">
                      <h3 className="font-semibold text-gray-700 mb-4">Book a Beautician</h3>

                      <div className="space-y-4">
                        <div data-aos="zoom-in-up" className="border p-3 rounded-xl shadow-sm flex gap-3 items-center">
                          <img className='md:h-15 md:w-15 h-10 w-10 rounded-full' src="https://m.media-amazon.com/images/I/71PmT8R3rfL.jpg" alt="" />
                          <div>
                            <h4 className="font-semibold text-gray-800">Aisha <span className="text-gray-500 text-sm">Koregaon Park</span></h4>
                            <p className="text-yellow-500 text-sm mt-1">⭐ 4.8 | 180</p>
                            <p className="text-purple-600 font-bold mt-1">₹1500</p>
                          </div>
                        </div>

                        <div data-aos="zoom-in-up" className="border p-3 rounded-xl shadow-sm flex gap-3 items-center">
                          <img className='md:h-15 md:w-15 h-10 w-10 rounded-full' src="https://m.media-amazon.com/images/I/71PmT8R3rfL.jpg" alt="" />
                          <div>
                            <h4 className="font-semibold text-gray-800">geeta <span className="text-gray-500 text-sm">Bandra</span></h4>
                            <p className="text-yellow-500 text-sm mt-1">⭐ 4.8 | 210</p>
                            <p className="text-purple-600 font-bold mt-1">₹2000</p>
                          </div>
                        </div>

                        <div data-aos="zoom-in-up" className="border p-3 rounded-xl shadow-sm flex gap-3 items-center">
                          <img className='md:h-15 md:w-15 h-10 w-10 rounded-full' src="https://m.media-amazon.com/images/I/71PmT8R3rfL.jpg" alt="" />
                          <div>
                            <h4 className="font-semibold text-gray-800">Neetu <span className="text-gray-500 text-sm">mumbai</span></h4>
                            <p className="text-yellow-500 text-sm mt-1">⭐ 4.7 | 170</p>
                            <p className="text-purple-600 font-bold mt-1">₹1800</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <marquee behavior="alternative" direction="right">
              <p className="text-center text-gray-600 mt-8 text-lg">
                • Fast Booking • No Waiting • Verified Salons
              </p>
            </marquee>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default memo(HomeSection1)