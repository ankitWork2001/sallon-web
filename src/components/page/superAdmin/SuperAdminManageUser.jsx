import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getdata } from '../../../redux/superAdmin/SuperAdmin';
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import CardLoader from '../homePage/CardLoader';


const SuperAdminManageUser = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch()
  const handlegetData = () => {
    dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}super-admin/get-all-users?page=${pageNumber}&limit=12`, key: "user", token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDA5ZGRhYjVkZWZkY2YzMjUyNzUxNiIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTc2NDI1NjIzNiwiZXhwIjoxNzY0ODYxMDM2fQ.YoRAhLqpPp4eY6kNzKdX1BWBdR7h2LGPyREjti61CRE' }))
  }

  const { data, loading, error } = useSelector((state) => state.salons)
  console.log(data)
  useEffect(() => {
    if (data?.user?.totalPages) {
      setTotalPages(data.user.totalPages);
    }
  }, [data]);
  useEffect(() => {
    handlegetData()
  }, [pageNumber])
  return (
    <div className='p-2 mt-2'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading && Array.from({ length: 8 }).map((_, item) =>
          <CardLoader />)}
        {data.user?.users?.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md p-4 rounded-xl  hover:shadow-lg duration-300 relative"
          >
            {/* Status */}
            {item.status === "active" ? <div className="absolute top-1 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">Active</div> : <div className="absolute top-1 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">Inactive</div>}

            {/* Name + Email */}
            <div className="mt-3">
              <p className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
                <FaUser className="text-gray-500" /> {item.name}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-600 mt-1 break-all">
                <FaEnvelope className="text-gray-500" /> {item.email}
              </p>
            </div>

            {/* Phone + Role */}
            <div className="mt-3">
              <p className="flex items-center gap-2 text-gray-700 font-medium">
                <FaPhone className="text-gray-500" /> {item.phone}
              </p>
              <p className="mt-1 text-sm text-gray-500 capitalize">Role: {item.role}</p>
            </div>
          </div>
        ))}
      </div>
        <div className=' w-full flex justify-center items-center p-2'>
          <div className="flex gap-2  mt-4 ">

            {/* PREV */}
            <button
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              disabled={pageNumber === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
            >
              Prev
            </button>

            {/* MID PAGE NUMBERS */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPageNumber(i + 1)}
                className={`px-3 py-1 border rounded cursor-pointer ${pageNumber === i + 1 ? "bg-black text-white" : ""}`}
              >
                {i + 1}
              </button>
            ))}

            {/* NEXT */}
            <button
              onClick={() => setPageNumber(p => Math.min(totalPages, p + 1))}
              disabled={pageNumber === totalPages}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              Next
            </button>
          </div> 
           </div>
    </div>
  )
}

export default SuperAdminManageUser
