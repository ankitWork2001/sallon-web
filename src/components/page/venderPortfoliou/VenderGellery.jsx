import React from 'react'

const VenderGellery = () => {
  return (
    <div>
      <section className="bg-gray-50 py-10 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
      <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
        <span className="text-lg">+</span> Upload
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70" alt="Haircut" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Haircut</span>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba2" alt="Bridal" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Bridal</span>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143" alt="Makeup" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Makeup</span>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1556229010-aa3ed51747f6" alt="Hair Spa" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Hair Spa</span>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1556229010-aa3ed51747f6" alt="Hair Spa" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Skincare</span>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img src="https://images.unsplash.com/photo-1556229010-aa3ed51747f6" alt="Hair Spa" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Bridal</span>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default VenderGellery
