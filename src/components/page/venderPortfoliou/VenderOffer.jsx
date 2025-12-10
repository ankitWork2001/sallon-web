import React from "react";
// import { FaShareAlt, FaDownload, FaSparkles  } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { LuShare } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";


const offers = [
  {
    id: 1,
    title: "New Year Special",
    desc: "Get 30% OFF on all services",
    img: "https://images.unsplash.com/photo-1588776814546-3121a1d37b86?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Bridal Package",
    desc: "Complete makeover at ₹12,999",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
];

const VenderOffer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-12 px-6 md:px-16 rounded-2xl text-white">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
            <GiStarFormation className="text-2xl"/>
          <h2 className="text-2xl font-semibold">Special Offers</h2>
        </div>
        <button className="flex items-center gap-2 text-sm border border-white/70 px-3 py-1.5 rounded-lg hover:bg-white/20 transition">
          ✏️ Create Offer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative h-56">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">{offer.title}</h3>
                <p className="text-sm opacity-90">{offer.desc}</p>
              </div>
            </div>

            <div className="flex gap-2 p-4 bg-gray-50">
              <button className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
                <LuShare/>
                Share
              </button>
              <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
<MdOutlineFileDownload />
Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenderOffer;
