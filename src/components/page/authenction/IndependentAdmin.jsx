import React from 'react'
import RegisterFormHeader from "../reusableComponent/RegisterFromHeader"
const IndependentAdmin = () => {
  return (
    <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
      <RegisterFormHeader/>
      <main >
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Full Name</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="ownerName" name="ownerName" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="contactNumber" name="" 
                        type="tel" placeholder="Enter contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Email</label>
                      <input style={{ background: "var(--secondary)" }}

                        id="email1" name="" type="email" placeholder="Enter your email " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input style={{ background: "var(--secondary)" }}

                        id="password" name="" type="password" placeholder="Enter your password " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>


                    <div>
                      <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                      <input style={{ background: "var(--secondary)" }}


                        id="whatsappNumber" name="whatsappNumber" type="tel" placeholder="Enter WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>
                  </div>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Shop Details</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Shop / Salon Name</label>
                        <input style={{ background: "var(--secondary)" }}

                          id="shopName" name="shopName" type="text" placeholder="Enter shop name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Category <span className="text-red-500">*</span>
                        </label>
                        <select

                          className="w-full border border-[var(--secondary)] rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"

                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          <option value="men">Men Salon</option>
                          <option value="beautyParlour">Beauty Parlour</option>
                          <option value="unisex">Unisex Salon</option>
                          <option value="spa">Spa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

    </div>
  )
}

export default IndependentAdmin
