import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../../redux/superAdmin/SuperAdmin'
import { CiCircleRemove } from "react-icons/ci";

const SuperAdminCityAndState = () => {
  const [openState, setOpenState] = useState(false)
  const [openCity, setOpenCity] = useState(false)
  const [state, setState] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    country: "india",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const dispatch = useDispatch()
  const token = localStorage.getItem('authtoken')



  const handleAddState = async (e) => {
    e.preventDefault();
    if (state === "") {
      alert('state is required')
      return
    }
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify({
        "name": state
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const data = await fetch(`${import.meta.env.VITE_API_URL}state-city/create-state`, requestOptions)
      const result = await data.json();
      console.log(result)
      alert(result.message)
      setState('')
      setOpenState(false)
    } catch (error) {
      console.log(error)
      setState('')
      setOpenState(false)

    }
  }
  const handleAddCityes = async (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.state === "") {
      alert('city and state is required')
      return
    }
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify(formData);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const data = await fetch(`${import.meta.env.VITE_API_URL}state-city/create-city`, requestOptions)
      const result = await data.json();
      console.log(result)
      alert(result.message)
      setFormData({
        name: "",
        state: "",
        country: "",
        pincode: "",
      })
      setOpenCity(false)
    } catch (error) {
      console.log(error)
      setFormData({
        name: "",
        state: "",
        country: "",
        pincode: "",
      })
      setOpenCity(false)

    }
  }

  const handlegetData = () => {
    dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}state-city/get-all-states`, key: "allState", token: token }))
    dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}state-city/get-all-cities`, key: "allCityes", token: token }))
  }
  useEffect(() => {
    handlegetData()
  }, [handleAddState, handleAddCityes])
  const { data, loading, error } = useSelector((state) => state.salons)
  return (
    <div className='p-3 relative'>
      <div className='flex flex-wrap justify-between p-2 mt-2'>
        <p className='p-2 text-2xl font-medium'>States </p>
        <button onClick={() => setOpenState(!openState)} style={{ background: " var(--primary-gradient)" }} className='p-2   font-medium rounded-lg cursor-pointer px-6'>+ Add State</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.allState?.states?.map((state, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {state.name}
              </h2>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                {state.code || 'null'}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Country: <span className="font-medium text-gray-700">{state.country}</span>
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Created: {new Date(state.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>


      <div className='flex flex-wrap justify-between p-2 mt-4'>
        <p className='p-2 text-2xl font-medium'>Cityes </p>
        <button onClick={() => setOpenCity(!openCity)} style={{ background: " var(--primary-gradient)" }} className='p-2   font-medium rounded-lg cursor-pointer px-6'>+ Add City</button>
      </div>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.allCityes?.cities?.map((state, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {state.name}
              </h2>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                {state.pincode || 'null'}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Country: <span className="font-medium text-gray-700">{state.country}</span>
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Created: {new Date(state.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

    {openState && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    
    {/* Modal */}
    <div className="relative w-[90%] sm:w-[420px] bg-white rounded-lg shadow-xl">

      {/* Close Button */}
      <button
        onClick={() => setOpenState(false)}
        className="absolute top-3 right-3 text-2xl text-red-500 cursor-pointer"
      >
        <CiCircleRemove />
      </button>

      {/* Form */}
      <form
        onSubmit={handleAddState}
        className="p-6"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          State Form
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter your state name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          style={{ background: "var(--primary-gradient)" }}
          className="w-full py-2 rounded-md text-white font-medium hover:opacity-90 transition"
        >
          Save State
        </button>
      </form>
    </div>
  </div>
)}



     {openCity && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    
    {/* Modal Box */}
    <div className="relative w-[92%] sm:w-[450px] bg-white rounded-lg shadow-xl">

      {/* Close Button */}
      <button
        onClick={() => setOpenCity(false)}
        className="absolute top-3 right-3 text-2xl text-red-500 cursor-pointer"
      >
        <CiCircleRemove />
      </button>

      {/* Form */}
      <form
        onSubmit={handleAddCityes}
        className="p-6"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Add City
        </h2>

        {/* City Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            City Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter city name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select State</option>
            {data?.allState?.states?.map((state, index) => (
              <option key={state?._id || index} value={state?._id}>
                {state?.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pincode */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            placeholder="Enter pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md
          font-medium hover:bg-blue-700 transition"
        >
          Save City
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  )
}

export default SuperAdminCityAndState
