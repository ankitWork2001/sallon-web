import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";



const SuperAdminHeader = () => {
    const salesData = [
        {
            text: 'Total Sales Persons',
            number: 24,
            groth: '+12%',
            icon: <FiUsers />
        },
        {
            text: 'Total Sales Registered',
            number: 156,
            groth: '+23%',
            icon: <FaRegCalendarAlt />
        },
        {
            text: 'Total Subscriptions Sold',
            number: 342,
            groth: '+18%',
            icon: <MdOutlineSubscriptions />
        },
        {
            text: 'Total Revenue  Received',
            number: '₹8.4L',
            groth: '+31%',
            icon: <LuDollarSign />
        },
    ]
  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 '>
        {
            salesData.map((item,index)=>
                <div key={index} className='shadow-emerald-100 shadow-md p-4 m-2 bg-[#F5FFFE] rounded-lg mt-2'>
                 <div className='flex items-center justify-between'>
                       <div>
                        <p className='text-sm text-gray-600'>{item.text}</p>
                        <p className='font-medium text-xl'>{item.number}</p>
                        <p className='text-green-600 flex items-center gap-1 text-lg'><span><BsGraphUpArrow className='text-sm font-medium'/></span>{item.groth}</p>
                    </div>
                    <div className={`p-2 text-white rounded text-2xl ${item.text=="Total Sales Persons"?"bg-[#9333EA]":item.text=="Total Sales Registered"?"bg-[#DB2777]":item.text=="Total Subscriptions Sold"?"bg-[#2563EB]":"bg-[#16A34A]"}`}>{item.icon}</div>
                 </div>
                    </div>
                    )
        }
      </div>
    </div>
  )
}

export default SuperAdminHeader
