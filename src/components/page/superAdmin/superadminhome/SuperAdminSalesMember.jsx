import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../../../redux/superAdmin/SuperAdmin'

const SuperAdminSalesMember = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')


  const token = localStorage.getItem('authtoken')

  const tableData = [
    {
      Referral: "SP-2025-001",
      salesperson: "Rajesh Kumar",
      number: "9876567809",
      address: "Mumbai Maharashtra",
      salon: 10,
      subscriptions: 23,
      commission: "₹45,000"
    },
    {
      Referral: "SP-2025-001",
      salesperson: "Rajesh Kumar",
      number: "9876567809",
      address: "Mumbai Maharashtra",
      salon: 10,
      subscriptions: 23,
      commission: "₹45,000"
    },
    {
      Referral: "SP-2025-001",
      salesperson: "Rajesh Kumar",
      number: "9876567809",
      address: "Mumbai Maharashtra",
      salon: 10,
      subscriptions: 23,
      commission: "₹45,000"
    },
    {
      Referral: "SP-2025-001",
      salesperson: "Rajesh Kumar",
      number: "9876567809",
      address: "Mumbai Maharashtra",
      salon: 10,
      subscriptions: 23,
      commission: "₹45,000"
    },
    {
      Referral: "SP-2025-001",
      salesperson: "Rajesh Kumar",
      number: "9876567809",
      address: "Mumbai Maharashtra",
      salon: 10,
      subscriptions: 23,
      commission: "₹45,000"
    }
  ]
  const dispatch = useDispatch()


  const handleGetSalesMember = () => {
    dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}salesman/get-all-salesmen`, key: "salesmember", token: token }))
  }
  const { data, loading, error } = useSelector((state) => state.salons)

  const handleAddSalesMember = (e) => {
    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      "name": name,
      "mobile": mobile,
      "email": email
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${import.meta.env.VITE_API_URL}salesman/register-salesman`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setName('')
        setEmail('')
        setMobile('')
        setOpen(false)
      })
      .catch((error) => {
        console.error(error)
        setName('')
        setEmail('')
        setMobile('')
        setOpen(false)
      });
  }
  useEffect(() => {
    handleGetSalesMember()
  }, [])
  return (
    <div className='shadow-md p-2'>
      <div>
        <div>
          <div className='flex items-center justify-between p-3'>
            <p className='font-medium text-2xl'>Sales Team Management</p>
            <button style={{ background: "var(--primary-gradient)" }} onClick={() => setOpen(true)} className='px-4 p-2 font-medium text-white  rounded-lg cursor-pointer'>+ Register New Sales Person</button>
          </div>
          <div className='w-full overflow-x-scroll'>
            <table>
              <thead>
                <tr className='bg-gray-50 text-gray-700'>
                  <th className='md:p-4 p-2'>Referral ID</th>
                  <th className='md:p-4 p-2'>Sales Person</th>
                  <th className='md:p-4 p-2'>Phone/WhatsApp</th>
                  <th className='md:p-4 p-2'>Address</th>
                  <th className='md:p-4 p-2'>Salons</th>
                  <th className='md:p-4 p-2'>Subscriptions</th>
                  <th className='md:p-4 p-2'>Commission</th>
                  <th className='md:p-4 p-2'>Action</th>
                </tr>

              </thead>
              <tbody >
                {loading && Array.from({ length: 5 }).map((item) =>
                  <tr>
                    <td colspan="8" class="p-4">
                      <div class="h-6 w-full rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                    </td>
                  </tr>
                )}
                {data?.salesmember?.salesmen?.map((item) =>
                  <tr className='border-b border-gray-400 '>
                    <td className='md:p-4 p-2 text-[#9333EA] font-medium'>{item.referralId}</td>
                    <td className='md:p-4 p-2 font-semibold'>{item.user.name} </td>
                    <td className='md:p-4 p-2 text-gray-700'>{item.user.phone}</td>
                    <td className='md:p-4 p-2 text-gray-700'>null</td>
                    <td className='md:p-4 p-2 '><span className='bg-[#F3E8FF] p-1 px-3 text-[#9333EA] rounded-2xl'>{item.salon || "null"}</span></td>
                    <td className='md:p-4 p-2'><span className='bg-[#DBEAFE] p-1 px-3 text-[#1D4ED8] rounded-2xl'>{item.subscriptions || "null"}</span></td>
                    <td className='md:p-4 p-2 text-[#16A34A]'>{item.commissionRate}</td>
                    <td className='md:p-4 p-2 text-[#9333EA]'>View</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {open && <div className="flex items-center justify-center p-4 absolute z-10 top-0 left-0 w-full">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">

          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-red-500 hover:text-red-600 font-bold text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-xl font-semibold">Register New Sales Person</h2>
          <p className="text-sm text-gray-500">
            Enter Details to create a new sales person account
          </p>

          {/* Form Fields */}
          <form onSubmit={handleAddSalesMember}>
            <div className="mt-5 space-y-4">

              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>


              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
                  type='number'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>

            </div>

            {/* Button */}
            <button
              className="w-full mt-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500"
            >
              Register Sales Person
            </button>
          </form>
        </div>
      </div>}
    </div>
  )
}

export default SuperAdminSalesMember
