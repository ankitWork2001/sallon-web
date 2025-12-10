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
    AOS.init({ duration: 2000, once: true });
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
    <div data-aos="fade-down">

      <div>
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
      </div>
    </div>
  )
}

export default memo(HomeSection1)