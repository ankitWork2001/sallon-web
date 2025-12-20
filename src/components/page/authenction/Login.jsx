import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
const Login = () => {
  const notify = (value) => toast(value);
  const navigate = useNavigate()
  
  const schema = z.object({
    email: z.string().email("please enter valid email"),
    password: z.string().min(5, "valid password 5 later"),
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(schema) })



  const onSubmit = async (data) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "email": data.email,
        "password": data.password
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, requestOptions)
      const result = await response.json()
      console.log(result)
      notify(result.message)
      reset()
      if (result.message == "Login successful") {
        localStorage.setItem("authtoken", result.token);
        localStorage.setItem("userrole", result.user.role);

      }
      if (result.user?.role === "customer") {
        localStorage.setItem("userdata", JSON.stringify(result.user));
        navigate("/")
      } else if (result.user.role === "salon_owner") {
        localStorage.setItem("admindata", JSON.stringify(result.user));
        navigate('/admin')
      } else {
        localStorage.setItem("superadmindata", JSON.stringify(result.user));
        navigate("/superadmin")
      }
    } catch (error) {
      console.log(error)
      reset()
    }
  }


  return (
    <div>
      <ToastContainer
        theme="light"
      />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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
                {...register('email')}
                // value={form.email}
                // onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"

                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.email && <p className='text-red-600 font-semibold text-sm p-1'>{errors.email?.message}</p>}
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
                {...register("password")}
                type="password"
                // value={form.password}
                // onChange={handleChange}
                placeholder="Enter a secure password"
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.password && <p className='text-red-600 font-semibold text-sm p-1'>{errors.password?.message}</p>}
            </div>
            <button type="submit" onClick={handleSubmit(onSubmit)} style={{ background: "var(--primary-gradient)" }} className="w-full inline-flex justify-center items-center px-4 py-2  text-white font-medium rounded-md  focus:outline-none focus:ring-2 cursor-pointer ">
              Login
            </button>
          </form>
          <Link to="/forgot" className='text-blue-600 font-medium text-sm cursor-pointer hover:text-blue-700 hover:underline'>Forgot password?</Link>
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
            <Link to="/sign-up" className="text-blue-600 hover:text-blue-700 hover:underline font-medium ml-2">Sign Up</Link>
          </div>
          <p>By continuing, you agree to our <span className='
                    text-blue-600 font-medium'>Terms</span>  of <span className='text-blue-600 font-medium'>Service</span> and <span className='text-blue-600 font-medium'>Privacy Policy</span></p>

        </div>
      </div>
    </div>
  )
}

export default Login
