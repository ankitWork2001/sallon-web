import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

      const notify = (value) => toast(value);


  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    // const { name, value } = e.target
    // setForm((prev) => ({ ...prev, [name]: value }))
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      alert('Please fill all required fields')
      return
    }


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": form.email,
      "password": form.password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${import.meta.env.VITE_API_URL}auth/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        notify(result.message)
        localStorage.setItem("authtoken", result.token);
        localStorage.setItem("userrole", result.user.role);
        if (result.user?.role === "customer") {
          localStorage.setItem("userdata", JSON.stringify(result.user));
          navigate("/")
          setForm({ email: "", password: "" });
        } else if (result.user.role === "salon_owner") {
          localStorage.setItem("admindata", JSON.stringify(result.user));
          navigate('/admin')
          setForm({ email: "", password: "" });
        } else {
          localStorage.setItem("superadmindata", JSON.stringify(result.user));
          navigate("/superadmin")
          setForm({ email: "", password: "" });
        }
      })
      .catch((error) => console.error(error));
    setForm({ email: "", password: "" });
  }


  return (
    <div>
      <ToastContainer
      theme="light"
      />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                style={{ background: "var(--secondary)" }}
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"

                required
                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                style={{ background: "var(--secondary)" }}
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter a secure password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* 
            <div>
              <label htmlFor="Location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                style={{ background: "var(--secondary)" }}
                id="location"
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter your location"
                required
                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
              />
              <p className='text-gray-700 text-sm p-2 font-medium'>Use My Current Location</p>
            </div> */}

            <button type="submit" style={{ background: "var(--primary-gradient)" }} className="w-full inline-flex justify-center items-center px-4 py-2  text-white font-medium rounded-md  focus:outline-none focus:ring-2 cursor-pointer ">
              Login
            </button>
          </form>
          <div className='flex gap-1 items-center my-5'>
            <div className='border-b w-1/2'></div>
            <p className='text-center font-medium text-xl'>or</p>
            <div className='border-b w-1/2'></div>
          </div>
          <button type="button" style={{ background: "var(--primary-gradient)" }} className="w-full inline-flex justify-center items-center px-4 py-2  text-white font-medium rounded-md  focus:outline-none focus:ring-2 cursor-pointer mt-2 ">
            Continue with Google
          </button>
          <div className='flex gap-1 items-center justify-center my-3'>
            <p>Don’t have account? Sign Up </p>
            <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium ml-2">Sign Up</Link>
          </div>
          <p>By continuing, you agree to our <span className='
                    text-blue-600 font-medium'>Terms</span>  of <span className='text-blue-600 font-medium'>Service</span> and <span className='text-blue-600 font-medium'>Privacy Policy</span></p>

        </div>
      </div>
    </div>
  )
}

export default Login
