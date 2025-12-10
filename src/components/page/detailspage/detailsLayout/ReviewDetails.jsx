import React from 'react'

const ReviewDetails = () => {
    const reviews = [
        {
            name: 'Jennifer S.',
          
            comment: 'Absolutely amazing service! My stylist was professional and gave me exactly what I wanted. The ambiance is also very relaxing.',
            date: '2023-09-15'
        },
        {
            name: 'Michael T.',
            comment: 'Great haircut and friendly staff. The only reason for 4 stars is that I had to wait a bit despite having an appointment.',
            date: '2023-09-10'

        },
        {
            name: 'Sarah L.',
            comment: 'I got the balayage service and Im in love with the results! Will definitely be coming back.',
            date: '2023-09-02'
        }
    ];
    return (
        <div>
            <div className='flex justify-between items-center mt-2'>
                <p className='text-gray-500'>Customer Reviews</p>
                <button className='bg-gray-400 flex gap-2 px-3 p-2 rounded-lg items-center text-white'>+ Write a Review</button>
            </div>
            <div>
                {
                    reviews.map((review, index) => (
                        <div key={index} className='border-b p-3 flex justify-between items-center mt-3'>
                            <div>
                                <p >{review.name}</p>
                                <p >⭐⭐⭐⭐⭐</p>
                                <p>{review.comment}</p>
                            </div>
                            <p>{review.date}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ReviewDetails
