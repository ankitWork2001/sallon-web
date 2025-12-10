import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardLoader from '../homePage/CardLoader';
import { getdata } from '../../../redux/superAdmin/SuperAdmin';
import { Link } from "react-router-dom"

const SuperAdminManageSalon = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch()

  const handlegetData = () => {
    dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}super-admin/getAllSaloons?page=${pageNumber}&limit=10`, key: "allSalon", token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDA5ZGRhYjVkZWZkY2YzMjUyNzUxNiIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTc2NDI1NjIzNiwiZXhwIjoxNzY0ODYxMDM2fQ.YoRAhLqpPp4eY6kNzKdX1BWBdR7h2LGPyREjti61CRE' }))
  }

  const { data, loading, error } = useSelector((state) => state.salons)
  console.log(data)
  useEffect(() => {
    if (data?.allSalon?.totalPages) {
      setTotalPages(data.allSalon.totalPages);
    }
  }, [data]);

  useEffect(() => {
    handlegetData()
  }, [pageNumber])
  return (
    <div className='p-2 mt-2'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {loading && Array.from({ length: 8 }).map((_, item) =>
          <CardLoader />)}

        {data.allSalon?.saloons.map((item) => (
          <Link to={`/superadmin/${item._id}`} state={{ salon: item }}
            key={item._id} >

            <div key={item._id} className="p-4 shadow rounded bg-white">
              <p className="font-bold text-lg">{item.shopName}</p>

              <p className="text-sm text-gray-600">
                Owner: {item?.owner?.name}
              </p>

              <p className="text-sm">
                Contact: {item.contactNumber}
              </p>

              <p className="text-sm">
                Staff: {item.numberOfStaff}
              </p>

              <p className="text-sm text-blue-600 mt-2">
                {item?.location?.address || "No Address"}
              </p>
            </div>
          </Link>
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

export default SuperAdminManageSalon
