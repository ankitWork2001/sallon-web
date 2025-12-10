import React from 'react'

const GalleryDetails = () => {
    const img = [
        {image:'https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA='},
        {image:'https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA='},
        {image:'https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA='},
        {image:'https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA='},
    ]
  return (
    <div>
        <p className='font-medium text-2xl mt-3 p-2'>Gallery</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        {img.map((item, index) => (
          <div key={index} className="h-48 w-full object-cover rounded-xl overflow-hidden">
            <img src={item.image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryDetails
