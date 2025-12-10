import React, { useEffect, useState } from 'react'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux"
import { getdata } from '../../../redux/superAdmin/SuperAdmin';
import CardLoader from '../homePage/CardLoader';
import { CiCircleRemove } from "react-icons/ci";

const SuperAdminManageCategory = () => {
  const [addform, setAddform] = useState(false)
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')
  const [id, setId] = useState('')
  const [addbutton, setAddbutton] = useState(false)
  const [gender, setGender] = useState('men')
  

  const token = localStorage.getItem('authtoken')

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.salons)

  const handlegetData = () => {
    dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}super-admin/getAllCategories`, key: "saloncategory", token: token }))
  }

  const handleAddData = (e) => {
    e.preventDefault()
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify({
        "name": name,
        "icon": icon,
        "gender": gender
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(`${import.meta.env.VITE_API_URL}super-admin/create-category`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          handlegetData()
          alert(result.message)


        })
    } catch (error) {
      console.log(error);

    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = {};
      if (name) {
        raw.name = name
      }
      if (icon) {
        raw.icon = icon
      }
      if (gender) {
        raw.gender = gender
      }

      const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: "follow"
      };

      fetch(`${import.meta.env.VITE_API_URL}super-admin/update-category/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          handlegetData()
          alert(result.message)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handlegetData()
  }, [dispatch])
  return (
    <div className='p-2 mt-2 relative'>
      <div className='flex justify-end p-2'>
        <button style={{ background: "var(--primary-gradient)" }} className='px-4 p-2 font-medium text-white  rounded-lg cursor-pointer' onClick={() => { setAddbutton(true), setAddform(true) }}>+ Add Category</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
        {loading && Array.from({ length: 6 }).map((_, item) =>
          <CardLoader />)}
        {error && <p>{error}</p>}
        {data.saloncategory?.categories?.map((service) => (
          <div
            key={service._id}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl
             hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Left Section */}
            <div className="flex flex-col justify-between">
              <p className="text-lg font-semibold text-gray-800">{service.name}</p>
              <p className="text-sm text-gray-500 mt-1 capitalize">
                Gender: <span className="font-medium text-gray-700">{service.gender}</span>
              </p>

              {/* Actions */}
              <div className="flex gap-4 text-gray-600 mt-3">
                <FiEdit2
                  onClick={() => {
                    setId(service._id);
                    setAddform(true);
                  }}
                  className="cursor-pointer hover:text-blue-500 transition"
                  size={20}
                />
                <FiTrash2
                  className="cursor-pointer hover:text-red-500 transition"
                  size={20}
                />
              </div>
            </div>

            {/* Right Section (Image) */}
            <img
              className="w-16 h-16 rounded-xl object-cover border border-gray-200 shadow-sm"
              src={
                service.icon ||
                "https://cdn-icons-png.flaticon.com/512/1005/1005661.png"
              }
              alt={service.name}
            />
          </div>

        ))}
      </div>


      {addform &&<div className='w-full flex justify-center'>
       <div className=" w-100  mx-auto  absolute top-7  bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">{addbutton ? 'Add Category' : 'Edit Category'}</h2>

        <div className='flex justify-end -2'>
          <p onClick={() => setAddform(false)} className='text-2xl font-bold text-red-500 cursor-pointer'><CiCircleRemove /></p>
        </div>

        <form className="space-y-5">

          {/* Category Name */}
          <div>
            <label className="block mb-1 font-medium">Category Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              placeholder="Enter category name"
              className="w-full bg-[var(--secondary)] p-2 outline-0 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Icon Upload */}
          <div>
            <label className="block mb-1 font-medium">Category Icon</label>
            <input
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              placeholder='Category Icon'
              className="w-full bg-[var(--secondary)] outline-0 p-2 rounded-lg cursor-pointer"
              required
            />
          </div>

          {/* add gender */}

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-[var(--secondary)] p-2 outline-0 rounded-lg cursor-pointer focus:border-blue-500"
              required
            >
              <option  value="men">Men</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>

          {addbutton ? <button
            type="submit"
            onClick={handleAddData}

            style={{ background: 'var(--primary-gradient)' }}
            className="w-full font-medium text-lg  text-white py-2 rounded-lg cursor-pointer transition "
          >
            Submit
          </button>
            :
            <button
              type="submit"
              onClick={() => handleUpdate()}

              style={{ background: 'var(--primary-gradient)' }}
              className="w-full font-medium text-lg  text-white py-2 rounded-lg cursor-pointer transition "
            >
              Save
            </button>}

        </form>
      </div>
      </div>}
    </div>
  )
}

export default SuperAdminManageCategory
