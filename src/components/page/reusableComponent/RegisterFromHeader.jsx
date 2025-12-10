import React from 'react'
import { FaCheck, FaRegUserCircle } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { MdVerifiedUser } from 'react-icons/md'

const RegisterFromHeader = (props) => {
    return (
        <div>
            <header className="px-6 py-6 border-b text-white" style={{ background: "var(--primary-gradient)" }}>
                <h1 className="text-2xl font-semibold ">Earn with Us</h1>
                <p className="font-medium  mt-1">Partner Registration — register your shop and start earning</p>
            </header>

            <nav className="px-6 py-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full  text-white text-xl ${props.green ? 'bg-green-400' : 'bg-[var(--primary)]'}`}>
                            {props.icon1 ? <FaCheck /> : <FaRegUserCircle />}
                        </div>
                        <div>
                            <p className="text-sm font-medium">Contact Details</p>
                            <p className="text-xs text-gray-500">Provide your basic contact</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full   text-xl ${props.green2 ? 'bg-green-400 text-white' : 'bg-gray-200 text-[var(--primary)]'}`}>
                            {props.icon2 ? <FaCheck /> : <FaCartShopping />}                         </div>
                        <div>
                            <p className="text-sm font-medium">Shop Details</p>
                            <p className="text-xs text-gray-500">Tell us about your shop</p>
                        </div>
                    </div>



                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-xl">
                            <MdVerifiedUser className='text-[var(--primary)]' />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Verification</p>
                            <p className="text-xs text-gray-500">Upload documents to verify</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default RegisterFromHeader
