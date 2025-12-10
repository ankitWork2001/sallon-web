import React, { useEffect, memo, useState } from "react";
import { FaStar, FaRupeeSign, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { RiColorFilterAiLine } from "react-icons/ri";

const HomeSection3 = () => {
  const [priceRange, setPriceRange] = useState(2000);
  const [categories, setCategories] = useState('');
  const [selectedGender, setSelectedGender] = useState("men");
  const [open,setOpen] = useState(false);


  const salon = [
    {
      id: 1,
      name: "Elegance Beauty Lounge",
      distance: "1.4 km",
      rating: 4.8,
      services: [
        { name: "Women's Haircut", price: 499 },
        { name: "Balayage", price: 399 },
      ],
    },
    {
      id: 2,
      name: "Modern Cut Studio",
      distance: "2.1 km",
      rating: 4.8,
      services: [
        { name: "Men's Haircut", price: 299 },
        { name: "Beard Trim", price: 199 },
      ],
    },
    {
      id: 3,
      name: "Serene Spa & Wellness",
      distance: "3.5 km",
      rating: 4.9,
      services: [
        { name: "Swedish Massage", price: 999 },
        { name: "Facial Treatment", price: 499 },
      ],
    },
    {
      id: 4,
      name: "Glow Nail Bar",
      distance: "0.8 km",
      rating: 4.9,
      services: [
        { name: "Gel Manicure", price: 499 },
        { name: "Pedicure", price: 599 },
      ],
    },
    {
      id: 5,
      name: "Luxe Hair Salon",
      distance: "2.7 km",
      rating: 4.9,
      services: [
        { name: "Women's Haircut", price: 499 },
        { name: "Highlights", price: 599 },
      ],
    },
    {
      id: 6,
      name: "Radiant Skin Clinic",
      distance: "1.9 km",
      rating: 4.9,
      services: [
        { name: "Hydra Facial", price: 999 },
        { name: "Chemical Peel", price: 1499 },
      ],
    },
  ];


  useEffect(() => {
    fetch(`https://saloonbackend-mumt.onrender.com/api/user/get-all-categories?gender=${selectedGender}`)
      .then(res => res.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [selectedGender])
  return (
    <div className="p-6">
      <div>
        <p className='font-bold text-2xl'>Top Rated Salons</p>
      </div>

    
      <button onClick={()=>setOpen(true)} className="px-4 md:hidden mt-3 m-2 bg-gray-100 rounded font-medium flex items-center gap-2">Filter <RiColorFilterAiLine />
</button>
      <div className="flex bg-gray-50 md:h-190 ">

        {open&& <div className={`w-1/3 bg-white absolute  rounded-2xl p-5 shadow-sm md:hidden md:overflow-y-scroll  scrollbar-hideen   transition-all ease-in  ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                <div className='flex justify-end p-2'><p onClick={()=>setOpen(false)} className='text-red-500 text-xl'>X</p></div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button className="text-sm text-gray-500 hover:text-indigo-600">
              Reset All
            </button>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Location</h3>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-indigo-500"
            />
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Services</h3>
            <div className="flex gap-4 items-center mb-2">
              <label className="flex gap-1.5 items-center font-medium p-2">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "men"}
                  onChange={() => setSelectedGender("men")}
                />

                Men
              </label>

              <label className="flex gap-1.5 items-center font-medium p-2">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "women"}
                  onChange={() => setSelectedGender("women")}
                />
                Women
              </label>
            </div>
            {categories && categories.categories.map(
              (service) => (
                <div key={service._id} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" id={service._id} />
                  <label htmlFor={service._id}>{service.name}</label>
                </div>
              )
            )}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-indigo-600"
            />
            <p className="text-sm text-gray-500 mt-1">
              ₹{priceRange}
            </p>
          </div>

          {/* Salon at Home */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Salon at Home</h3>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="homeService" />
              <label htmlFor="homeService">Available for Home Service</label>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md font-medium">
            Apply Filters
          </button>
        </div>}
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white  rounded-2xl p-5 shadow-sm hidden md:block md:overflow-y-scroll  scrollbar-hideen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button className="text-sm text-gray-500 hover:text-indigo-600">
              Reset All
            </button>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Location</h3>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-indigo-500"
            />
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Services</h3>
            <div className="flex gap-4 items-center mb-2">
              <label className="flex gap-1.5 items-center font-medium p-2">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "men"}
                  onChange={() => setSelectedGender("men")}
                />

                Men
              </label>

              <label className="flex gap-1.5 items-center font-medium p-2">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "women"}
                  onChange={() => setSelectedGender("women")}
                />
                Women
              </label>
            </div>
            {categories && categories.categories.map(
              (service) => (
                <div key={service._id} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" id={service._id} />
                  <label htmlFor={service._id}>{service.name}</label>
                </div>
              )
            )}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-indigo-600"
            />
            <p className="text-sm text-gray-500 mt-1">
              ₹{priceRange}
            </p>
          </div>

          {/* Salon at Home */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Salon at Home</h3>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="homeService" />
              <label htmlFor="homeService">Available for Home Service</label>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md font-medium">
            Apply Filters
          </button>
        </div>

        {/* Salon Cards */}
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4  md:overflow-y-scroll scrollbar-hideen">
          {salon.map((salon) => (
            <div
              key={salon.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-4 cursor-pointer transition-all"
            >
              <div className="h-36 bg-gray-200 rounded-lg mb-3"></div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">{salon.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <FaStar /> {salon.rating}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-1" /> {salon.distance}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                {salon.services.map((srv, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{srv.name}</span>
                    <span className="flex items-center">
                      <FaRupeeSign className="text-xs mr-1" /> {srv.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FaClock /> 30–60 min
                </span>
                <button className="text-indigo-600 font-medium hover:underline">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(HomeSection3)
