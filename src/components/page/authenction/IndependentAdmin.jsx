import { BsCardImage } from 'react-icons/bs'
import React, { useEffect, useReducer, useState } from "react";
import IndenpendtHeader from '../reusableComponent/IndenpendtHeader';
import { initialState, registerFromReducer } from '../../../reducer/registerFrom';
import { GrFormPreviousLink } from 'react-icons/gr';
  import { ToastContainer, toast } from 'react-toastify';


const IndependentAdmin = () => {
  const [state, dispatch] = useReducer(registerFromReducer, initialState);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [indenpendForm, setIndenpendForm] = useState({
    name: "", email: "", phone: "", password: "",
    role: "independent_pro", profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s", independentData: {
      specializations: "69298004f63ac61abbb13f00",
      experienceYears: "",
      gender: "",
      availability: [],
      governmentId: {
        idType: "",
        idNumber: "",
        idImageUrl: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/untitled_design_90-sixteen_nine.jpg"
      }
    },
  })

        const notify = (value) => toast(value);


  console.log(indenpendForm)
  const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlotsList = ["Full Morning", "Full Afternoon", "Full Evening"];


  // ---- Days selection ----
  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const selectAllDays = () => setSelectedDays([...daysList]);
  const selectWeekDays = () => setSelectedDays(["Mon", "Tue", "Wed", "Thu", "Fri"]);

  // ---- Slots selection ----
  const toggleSlot = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  const selectAllSlots = () => setSelectedSlots([...timeSlotsList]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setIndenpendForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleIndependentChange = (e) => {
    const { name, value } = e.target;
    setIndenpendForm((prev) => ({
      ...prev,
      independentData: {
        ...prev.independentData,
        [name]: value,
      },
    }));
  };


  useEffect(() => {
    setIndenpendForm((prev) => ({
      ...prev,
      independentData: {
        ...prev.independentData,
        availability: selectedDays.map((day) => ({
          day,
          slots: selectedSlots,
        })),
      },
    }));
  }, [selectedDays, selectedSlots]);


  const handleGovtChange = (e) => {
    const { name, value } = e.target;
    setIndenpendForm((prev) => ({
      ...prev,
      independentData: {
        ...prev.independentData,
        governmentId: {
          ...prev.independentData.governmentId,
          [name]: value,
        },
      },
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(indenpendForm);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const data = await fetch(`${import.meta.env.VITE_API_URL}auth/signup`, requestOptions)
      const result = await data.json()
      console.log(result)
      notify(result.message)
      setIndenpendForm({
        name: "", email: "", phone: "", password: "",
        role: "", profilePhoto: "", independentData: {
          specializations: "",
          experienceYears: "",
          gender: "",
          availability: [],
          governmentId: {
            idType: "",
            idNumber: "",
            idImageUrl: ""
          }
        },
      })
    } catch (error) {
      console.log(error)
      notify(error.message)
       setIndenpendForm({
        name: "", email: "", phone: "", password: "",
        role: "", profilePhoto: "", independentData: {
          specializations: "",
          experienceYears: "",
          gender: "",
          availability: [],
          governmentId: {
            idType: "",
            idNumber: "",
            idImageUrl: ""
          }
        },
      })
    }
  }

  return (
    <>
     <ToastContainer
          theme="light"
          />
    <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
      <form onSubmit={handleSubmit}>
        <main >
          {state.step == 1 && <section className="mb-6 p-6">
            <IndenpendtHeader />
            <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>

            <div className='flex justify-center'>
              <label htmlFor='userimg' className='bg-[var(--secondary)] h-30 w-30 flex items-center justify-center rounded-full text-4xl cursor-pointer'><BsCardImage className='text-gray-600' />
                <input
                  className='hidden' type="file" name="" id="userimg" />

              </label>
            </div>
            <p className='text-center p-2'>Upload your profile photo*</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Full Name</label>
                <input style={{ background: "var(--secondary)" }}

                  id="ownerName" name="name" type="text" value={indenpendForm.name}
                  onChange={handleChange}
                  placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm outline-none h-10 p-3" />
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input style={{ background: "var(--secondary)" }}
                  id="contactNumber" name="phone"
                  value={indenpendForm.phone}
                  onChange={handleChange}
                  type="number"  placeholder="Enter contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm outline-none h-10 p-3" />
              </div>

              <div>
                <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Email</label>
                <input style={{ background: "var(--secondary)" }}
                  value={indenpendForm.email}
                  onChange={handleChange}
                  id="email1" name="email" type="email" placeholder="Enter your email " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm outline-none h-10 p-3" />
              </div>

              <div>
                <label htmlFor="userpas" className="block text-sm font-medium text-gray-700">Password</label>
                <input style={{ background: "var(--secondary)" }}
                  value={indenpendForm.password}
                  onChange={handleChange}
                  id="userpas" name="password" type="password" placeholder="Enter your password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm outline-none h-10 p-3" />
              </div>


              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Professional Experience*</label>
                <input style={{ background: "var(--secondary)" }}
                  value={indenpendForm.independentData.experienceYears}
                  onChange={handleIndependentChange}
                  id="experience" name="experienceYears" type="number" placeholder="E.g., 5 years" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm outline-none h-10 p-3" />
              </div>
              <div>
                <label htmlFor="gender1">Gender*</label>
                <select
                  className="w-full border border-[var(--secondary)] rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                  id='gender1'
                  name="gender"
                  value={indenpendForm.independentData.gender}
                  onChange={handleIndependentChange}
                >
                  <option value="" >Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex justify-end">
                <button type='button' onClick={() => dispatch({ type: "NEXT_STEP" })} className="cursor-pointer font-medium px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-600">Save & Continue</button>
              </div>
            </div>
          </section>}

          {state.step == 2 && <section>
            <IndenpendtHeader icon1={'icon1'} green={'green'} />

            <div className="p-6 ">
              <h2 className="text-xl font-bold text-pink-600">Availability</h2>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">Available Days *</h3>
                <p className="text-gray-500 text-sm">Select the days you're available for bookings</p>

                <div className="flex gap-4 mt-4 flex-wrap">
                  <button
                    type='button'
                    className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg"
                    onClick={selectAllDays}
                  >
                    Select All Days
                  </button>

                  <button
                    type='button'

                    className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg"
                    onClick={selectWeekDays}
                  >
                    Weekdays Only
                  </button>
                </div>

                {/* Days */}
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3 mt-6">
                  {daysList.map((day) => (
                    <button
                      type='button'

                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`px-4 py-2 border rounded-lg ${selectedDays.includes(day)
                        ? "bg-pink-500 text-white border-pink-500"
                        : "text-gray-700 border-gray-300"
                        }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* Selected Count */}
                <p className="mt-3 text-pink-600 font-medium">
                  📅 {selectedDays.length} days {selectedDays + " "}  selected
                </p>
              </div>

              <hr className="my-6" />

              {/* Time Slots Section */}
              <div>
                <h3 className="font-semibold text-lg">Available Time Slots *</h3>
                <p className="text-gray-500 text-sm">Choose your working hours - tap slots to toggle</p>

                <button
                  type='button'

                  className="mt-4 border border-pink-500 text-pink-500 px-4 py-2 rounded-lg"
                  onClick={selectAllSlots}
                >
                  Select All Slots
                </button>

                {/* Slots */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                  {timeSlotsList.map((slot) => (
                    <button
                      type='button'

                      key={slot}
                      onClick={() => toggleSlot(slot)}
                      className={`px-4 py-2 border rounded-lg ${selectedSlots.includes(slot)
                        ? "bg-pink-500 text-white border-pink-500"
                        : "text-gray-700 border-gray-300"
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <p className="mt-3 text-pink-600 font-medium">
                  🕒 {selectedSlots.length} slots selected
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center pt-4">
                  <button type='button' onClick={() => dispatch({ type: "PREV_STEP" })} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                    <GrFormPreviousLink size={16} />
                    Back
                  </button>
                  <button type='button' onClick={() => dispatch({ type: "NEXT_STEP" })} className="cursor-pointer font-medium px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-600">Save & Continue</button>
                </div>
              </div>
            </div>
          </section>}
          {state.step == 3 && <section>
            <IndenpendtHeader icon2={'icon1'} green2={'green'} icon1={'icon1'} green={'green'}
            />

            <main className="px-6 py-6">
              <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Verification Documents</h2>
                  <p className="text-sm text-gray-500">
                    Upload your ID proof for verification
                  </p>
                </div>

                {/* ID Proof Type */}
                <div>
                  <label htmlFor='id-prof' className="block text-sm font-medium text-gray-700 mb-1">
                    ID Proof Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
                    defaultValue=""
                    name="idType"
                    value={indenpendForm?.independentData?.governmentId?.idType}
                    onChange={handleGovtChange}
                    id='id-prof'
                  >
                    <option value="" disabled>
                      Select ID proof type
                    </option>
                    <option value="Aadhaar">Aadhar Card</option>
                    <option value="PAN">PAN Card</option>
                    <option value="DL">Driving License</option>
                  </select>
                </div>

                {/* ID Number */}
                <div>
                  <label htmlFor='id-number' className="block text-sm font-medium text-gray-700 mb-1">
                    ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id='id-number'
                    name="idNumber"
                    value={indenpendForm?.independentData?.governmentId?.idNumber}
                    onChange={handleGovtChange}
                    placeholder="Enter ID number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                {/* Upload Section */}
                <div>
                  <label htmlFor='documents' className="block text-sm font-medium text-gray-700 mb-1">
                    Upload ID Proof <span className="text-red-500">*</span>
                  </label>
                  <input className='hidden' name='image' type="file" id='documents'
                    accept="image/*"
                  />
                  <label htmlFor='documents' className="border-2 border-gray-300 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-pink-600 transition">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <span className="text-gray-500 text-xl">📎</span>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      Click to upload ID proof <br />
                      <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
                    </p>
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center pt-4">
                  <button onClick={() => dispatch({ type: "PREV_STEP" })} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                    <GrFormPreviousLink size={16} />
                    Back
                  </button>

                  <button className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition">
                    Submit Registration
                  </button>
                </div>
              </div>
            </main>
          </section>}

        </main>
      </form>
    </div>
    </>
  )
}

export default IndependentAdmin
