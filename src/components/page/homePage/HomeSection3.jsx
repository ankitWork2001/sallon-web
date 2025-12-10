import React, { memo, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import CardLoader from "./CardLoader";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getSalondata } from "../../../redux/userSlice/homeSalon";
import HomeSection23 from "./HomeSection23";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection3 = () => {
  const [category, setCategory] = useState("men");
  const dispatch = useDispatch();
  const navigate = useNavigate();


 useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const handledetails = (id) => {
    navigate(`/home/product/${id}`)
  }

  const token = localStorage.getItem("authtoken")



  const getData = () => {

    dispatch(getSalondata({
      url: `${import.meta.env.VITE_API_URL}user/get-home-salons?category=${category}`,
      key: 'salons',
      token: token
    }))
  }

  useEffect(() => {
    getData();
  }, [category]);

  const { data, loading, error } = useSelector((state) => state.homeSalon);
  const ButtonStyle = (btnCat) => ({
    background:
      category === btnCat ? "#d6aeb0" : "",
    color: category === btnCat ? "white" : "black",
    transition: "0.3s",
  });

  const [currentlatitude, setCurrentlatitude] = useState(null);
  const [currentlongitude, setCurrentlongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position => {
        setCurrentlatitude(position.coords.latitude);
        setCurrentlongitude(position.coords.longitude);
        console.log(position)
      }));
    } else {
      console.log("geolocation not supported")
    }

  }, [])

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in KM
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in KM
    return distance.toFixed(2); // round karke return
  };
  return (
    <div className="p-6 mt-3 ">
      <div>
      <div>
          <div className="flex gap-1 items-center font-medium p-2 mt-3 rounded-4xl bg-[#f7eded] md:w-90 sm:w-70 w-60 text-xs md:text-sm">
          <button
            onClick={() => setCategory("men")}
            className="md:px-4 md:p-2 p-1 px-2 rounded-3xl flex items-center gap-3"
            style={ButtonStyle("men")}
          >
            <img className="w-7" src="https://cdn-icons-png.flaticon.com/128/3667/3667832.png" alt="" />
            Men Salon
          </button>

          <button
            onClick={() => setCategory("women")}
            className="md:px-4 md:p-2 p-1 px-2 rounded-3xl flex items-center gap-3"
            style={ButtonStyle("women")}
          >
            <img className="w-7" src="https://cdn-icons-png.flaticon.com/128/5498/5498588.png" alt="" />
            Women Salon
          </button>
        </div>
      </div>

        <div >
          <HomeSection23 category={category} />
        </div>

        <div className='flex justify-between p-2'>
          <div><p className="text-2xl font-medium ">Salon at Home Services</p></div>
          <div><p className="text-lg text-gray-600 font-medium text-sm">View All </p></div>
        </div>

        {error && <p className="font-medium text-2xl text-red-500 text-center p-3">{error}</p>}
        <div data-aos="fade-right" className="grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-3">

          {loading &&
            Array.from({ length: 4 }).map((_, i) => (

              <CardLoader />
            ))}

          {/* ---- Actual Data Cards ---- */}
          {!loading &&
            data?.salons?.data.map((item) => (
              <div onClick={() => handledetails(item._id)}
                key={item.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md  cursor-pointer transition-all mt-2"
              >
                <div className="h-36 bg-gray-200 rounded-lg">
                  {item.galleryImages.length > 1 ? item.galleryImages.slice(0, 1).map((img, i) => (
                    <img className="rounded w-full h-full object-cover" key={i} src={img} alt={item.shopName} />
                  )) :
                    <img className="rounded w-full h-full object-cover" src="https://img.freepik.com/premium-photo/hairdressers-makeup-artist-working-beauty-salon_10069-11140.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                  }
                </div>

                <div className="p-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{item.shopName}</h3>
                    <p>{item.salonCategory}</p>
                  </div>


                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="font-medium">Categories:</span>
                    {item?.categories.map((srv, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-sm rounded-2xl px-2 py-0.5"
                      >
                        {srv.name}
                      </span>
                    ))}
                  </div>
                  <div>

                    <p className="flex items-center text-sm text-gray-500 mb-2"> <span > <FaMapMarkerAlt className="mr-1" /> </span>{getDistance(currentlatitude, currentlongitude, item.location.coordinates[0], item.location.coordinates[1])} km</p>

                  </div>

                  <div className="flex justify-end text-sm">
                    <button className="text-indigo-600 font-medium hover:underline">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};


export default memo(HomeSection3);
