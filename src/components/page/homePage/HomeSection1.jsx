import React, { memo, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// Swiper styles
import 'swiper/css'

import TextType from './TextType';

const HomeSection1 = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true,delay:500, });
  }, []);

  const data = [
    {
      image: 'https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.jpg?s=612x612&w=0&k=20&c=3dO_HWS8WvSGNbGmxTsqK70vZMGqM2REnbVJG09YnmI=',
      title: "Discover and Book the Best Salons Near You",
      text: "Find top-rated beauty services and book your appointment in minutes",
    },
    {
      image: 'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-705255.jpg&fm=jpg',
      title: "Discover and Book the Best Salons Near You",
      text: "Find top-rated beauty services and book your appointment in minutes",
    },
    {
      image: 'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-705255.jpg&fm=jpg',
      title: "Discover and Book the Best Salons Near You",
      text: "Find top-rated beauty services and book your appointment in minutes",
    }

  ]
  return (
    <div >
{/* 
      <div data-aos="fade-down">
        <div className="w-full relative ">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={
              {
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }
            }
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerGroup={1}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className='pb-7'>
                  <img
                    src={item.image}
                    alt="salon_img"
                    className='w-full h-[90vh] object-cover'
                  />
                  <div className='absolute z-20 lg:top-50 md:top-30 sm:top-22 top-5 text-white flex md:justify-between justify-center p-4 w-full'>
                    <button style={{ background: 'var(--primary-gradient)' }} className=" hidden md:flex custom-prev cursor-pointer justify-center items-center h-15 w-15 text-2xl text-black  rounded-full ">
                      <FaChevronLeft />
                    </button>
                    <div className='text-center '>
                      <h2 className='font-bold md:text-5xl sm:text-2xl text-xl'>{<TextType
                        text={item.title}
                        typingSpeed={85}
                        pauseDuration={1800}
                        showCursor={true}
                        cursorCharacter="|"
                      />}</h2>
                      <p className='font-semibold md:text-2xl md:pt-3 pt-2 sm:text-xl'>{<TextType
                        text={item.text}
                        typingSpeed={80}
                        pauseDuration={1800}
                        showCursor={true}
                        cursorCharacter="|"
                      />}</p>
                      <p className='md:pt-3 sm:pt-2 pt-1 md:text-xl'>{item.time}</p>
                    </div>
                    <button style={{ background: 'var(--primary-gradient)' }} className="custom-next hidden md:flex cursor-pointer   text-black justify-center items-center h-15 w-15 text-2xl rounded-full  ">
                      <FaChevronRight />
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      </div> */}

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
          <div class="flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white font-[Poppins]">

            <div class="flex flex-col space-y-12 w-full lg:w-1/2">

              <div data-aos="fade-right" class="flex items-start space-x-4">
                <div class="bg-[#EDEAFF] p-4 rounded-xl shadow">
                  📅
                </div>
                <div>
                  <h3 class="text-purple-600 font-bold text-lg">Step 1 Choose Your Salon</h3>
                  <p class="text-gray-500 text-sm mt-1">Browse nearby salons and pick your favorite one.</p>
                </div>
              </div>

              <div data-aos="fade-right" class="flex items-start space-x-4">
                <div class="bg-[#EDEAFF] p-4 rounded-xl shadow">
                  ✂️
                </div>
                <div>
                  <h3 class="text-purple-600 font-bold text-lg">Step 2 Select Your Services</h3>
                  <p class="text-gray-500 text-sm mt-1">Haircut, grooming, facial & more.</p>
                </div>
              </div>

              <div data-aos="fade-right" class="flex items-start space-x-4">
                <div class="bg-[#EDEAFF] p-4 rounded-xl shadow">
                  📆
                </div>
                <div>
                  <h3 class="text-purple-600 font-bold text-lg">Step 3 Pick Date & Time + Confirm</h3>
                  <p class="text-gray-500 text-sm mt-1">Choose your slot & confirm instantly.</p>
                </div>
              </div>

            </div>

            <div class="mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center">
              <div  class="w-64 h-auto bg-white border-4 border-gray-800 rounded-3xl p-4 shadow-lg">
                <h3 class="font-semibold text-gray-700 mb-4">Book a Salon Visit</h3>

                <div class="space-y-4">
                  <div data-aos="zoom-in-up" class="border p-3 rounded-xl shadow-sm">
                    <h4 class="font-semibold text-gray-800">Glow Up Studio <span class="text-gray-500 text-sm">Khar</span></h4>
                    <p class="text-yellow-500 text-sm mt-1">⭐ 4.8 | 625</p>
                    <p class="text-purple-600 font-bold mt-1">₹1500</p>
                  </div>

                  <div data-aos="zoom-in-up" class="border p-3 rounded-xl shadow-sm">
                    <h4 class="font-semibold text-gray-800">Stylista <span class="text-gray-500 text-sm">Bandra</span></h4>
                    <p class="text-yellow-500 text-sm mt-1">⭐ 4.8 | 202</p>
                    <p class="text-purple-600 font-bold mt-1">₹2000</p>
                  </div>

                  <div data-aos="zoom-in-up" class="border p-3 rounded-xl shadow-sm">
                    <h4 class="font-semibold text-gray-800">Salon 360 <span class="text-gray-500 text-sm">Andheri</span></h4>
                    <p class="text-yellow-500 text-sm mt-1">⭐ 4.7 | 88</p>
                    <p class="text-purple-600 font-bold mt-1">₹1800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <marquee behavior="alternative" direction="right">
            <p class="text-center text-gray-600 mt-8 text-lg">
              • Fast Booking • No Waiting • Verified Salons
            </p>
          </marquee>
    </div>
  )
}

export default memo(HomeSection1)