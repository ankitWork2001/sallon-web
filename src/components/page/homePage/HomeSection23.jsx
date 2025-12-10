import React, { useEffect, memo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const HomeSection23 = (props) => {
    const [categories, setCategories] = useState('');


    useEffect(() => {
        fetch(`https://saloonbackend-mumt.onrender.com/api/user/get-all-categories?gender=${props.category}`)
            .then(res => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, []);

        if (!categories) return <p>Loading...</p>;  
    return (
        <div  className="w-full relative p-5 mt-3">
              <div className='flex justify-between p-2'>
        <div><p className="text-2xl font-medium ">Salon categories</p></div>
        <div><p className="text-lg text-gray-600 font-medium text-sm">View All </p></div>
      </div>
           <div className='p-4'>
             <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".cat-next-btn",
                    prevEl: ".cat-prev-btn",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop={true}
                speed={600}
                spaceBetween={20}

                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}

                className="rounded-2xl"
            >

                { categories&&categories?.categories?.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col items-center p-4   hover:scale-105 transition-all duration-300">

                            <div className="w-30 h-30 rounded-full overflow-hidden shadow-md p-2 bg-white">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <p className="mt-3 font-semibold text-center">
                                {item.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
           </div>

            {/* ⭐ CUSTOM UNIQUE NAV BUTTONS (NO CONFLICT EVER) */}
            <button  style={{background:'var(--primary-gradient)'}} className="cat-prev-btn absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer text-white p-3 rounded-full shadow-lg hidden md:flex z-30">
                <FaChevronLeft size={18} />
            </button>

            <button style={{background:'var(--primary-gradient)'}} className="cat-next-btn absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-white p-3 rounded-full shadow-lg hidden md:flex z-30">
                <FaChevronRight size={18} />
            </button>

        </div>
    )
}

export default memo(HomeSection23)
