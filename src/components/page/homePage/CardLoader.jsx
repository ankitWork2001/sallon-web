import React from 'react'
import { memo } from 'react'

const CardLoader = (props) => {
  return (
    <div>
       <div
              className="bg-white rounded-2xl shadow-sm p-4 animate-pulse"
            >
              <div className="h-36 bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
    </div>
  )
}

export default memo(CardLoader)
