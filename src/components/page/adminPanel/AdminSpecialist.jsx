import React, { useEffect, useState } from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { BeatLoader } from "react-spinners";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { getDataAdmin } from '../../../redux/adminSlice/adminSlice';


const AdminSpecialist = () => {
    const [specialists, setSpecialists] = useState('')
    const [specialForm, setspecialForm] = useState(false)
    // const [loading, setLoading] = useState(false)
    const [updateForm, setUpdateForm] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const token = localStorage.getItem("authtoken");


    const dispatch = useDispatch()

    // get data for redux
    const handleGetData = () => {
        dispatch(getDataAdmin({ url: `${import.meta.env.VITE_API_URL}salon-admin/get-specialists`, key: 'speciallist', token: token }))
    }

    useEffect(() => {
        handleGetData()
    }, [])
    const { data, loading, error } = useSelector((state) => state.admin)




    const [form, setForm] = useState({
        name: "",
        contactNumber: "",
        expertise: [],
        experienceYears: "",
        image: "",
        certifications: [""],
        availability: [
            { day: "Mon", start: "", end: "" }
        ],
    });

    const expertiseOptions = ["Hair", "Skin", "Makeup", "Massage", "Nails", "Other"];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // INPUT CHANGE HANDLER
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // MULTIPLE EXPERTISE
    const handleExpertiseChange = (e) => {
        const value = e.target.value;
        setForm((prev) => ({
            ...prev,
            expertise: prev.expertise.includes(value)
                ? prev.expertise.filter((i) => i !== value)
                : [...prev.expertise, value],
        }));
    };

    // CERTIFICATIONS
    const handleCertificationChange = (index, value) => {
        const updated = [...form.certifications];
        updated[index] = value;
        setForm({ ...form, certifications: updated });
    };

    const addCertification = () => {
        setForm({ ...form, certifications: [...form.certifications, ""] });
    };

    // AVAILABILITY
    const handleAvailabilityChange = (index, field, value) => {
        const updated = [...form.availability];
        updated[index][field] = value;
        setForm({ ...form, availability: updated });
    };

    const addAvailability = () => {
        setForm({
            ...form,
            availability: [...form.availability, { day: "Mon", start: "", end: "" }],
        });
    };

    // SUBMIT FORM
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !form.name || !form.contactNumber) {
            alert("Please fill all required fields: Salon ID, Name, Contact Number");
            setspecialForm(false);
            return;
        }
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${token}`);

            const raw = JSON.stringify(form);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${import.meta.env.VITE_API_URL}salon-admin/add-specialist`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    alert("Specialist Added Successfully!");
                    handleGetData();
                })
        } catch (err) {
            console.log(err);
        }
    };


    const handlespecialDelete = (id) => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            const raw = "";

            const requestOptions = {
                method: "DELETE",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${import.meta.env.VITE_API_URL}salon-admin/delete-specialist/${id}`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    alert("Specialist Deleted Successfully");
                    handleGetData();
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdates = async (e) => {
        e.preventDefault();
        setUpdateForm(false);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify(form);

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${import.meta.env.VITE_API_URL}salon-admin/update-specialist/${updateId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success === false) {
                    alert(result.message);

                    return;
                }
                console.log(result)
                alert("Specialist Updated Successfully");
                handleGetData();
            })
            .catch((error) => console.error(error));
    }
    return (
        <div className='relative'>

            <div className="flex flex-wrap justify-between items-center mb-6 p-3">
                <h2 className="md:text-2xl text-xl font-semibold text-[var(--primary)]">Specialists Management</h2>
                <button onClick={() => setspecialForm(!specialForm)} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg cursor-pointer font-semibold">
                    <span className="text-xl">＋</span> Add Specialists
                </button>
            </div>

            {loading && <div className="flex justify-center items-center h-64"><BeatLoader size={20} /></div>}

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data &&
                    data?.speciallist?.specialists?.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-gray-200"
                        >
                            <img
                                src={item.image ? item.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dSEtDvpd9KAn4SdFJVoL0K1lj4Xfc-wVWQ&s"}
                                alt={item.name}
                                className="w-full h-44 object-cover"
                            />

                            <div className="p-4">
                                <div className='flex justify-between flex-wrap items-center p-1'>
                                    <p className="text-sm">
                                        Name :- {item.name}
                                    </p>
                                    <div className="flex gap-3 text-gray-600">
                                        <FiEdit2 onClick={() => {
                                            setUpdateForm(true); setUpdateId(item._id); setForm({
                                                salon: item.salon,
                                                name: item.name,
                                                contactNumber: item.contactNumber,
                                                expertise: item.expertise,
                                                experienceYears: item.experienceYears,
                                                image: item.image,
                                                certifications: item.certifications,
                                                availability: item.availability
                                            });
                                        }} className="cursor-pointer" size={18} />
                                        <FiTrash2 onClick={() => handlespecialDelete(item._id)} className="cursor-pointer" size={18} />
                                    </div>

                                </div>
                                <div className='flex justify-between flex-wrap items-center p-1'>

                                    <p className="text-sm text-gray-700 font-medium mb-3">
                                        Experience: {item.experienceYears} years
                                    </p>
                                    <p className="text-sm text-gray-700 font-medium mb-3">
                                        Mob. {item.contactNumber}
                                    </p>

                                </div>
                                <div className="mb-3">
                                    <p className="font-medium text-gray-700 mb-1">Expertise :</p>
                                    {item.expertise.map((i) => (
                                        <span
                                            key={i}
                                            className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                                        >
                                            {i}
                                        </span>
                                    ))}
                                </div>



                                <div className="mb-3">
                                    <p className="font-medium text-gray-700 mb-1">Certifications:</p>
                                    {item.certifications.map((i) => (
                                        <span
                                            key={i}
                                            className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                                        >
                                            {i}
                                        </span>
                                    ))}
                                </div>

                                <p className="font-medium text-gray-700 mb-2">Availability:</p>
                                <div className="grid grid-cols-3 gap-2 border-t border-gray-200 pt-3">
                                    {item.availability.map((i, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center bg-green-50 border border-green-200 p-2 rounded"
                                        >
                                            <p className="text-xs font-semibold text-green-700">{i.day}</p>
                                            <p className="text-xs text-gray-600">{i.start}</p>
                                            <p className="text-xs text-gray-600">{i.end}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>




            {specialForm && <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-5 absolute z-10 top-20 right-0 left-0 border border-gray-300">
                <div className='flex justify-between items-center p-3 mb-4'>
                    <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Add Specialist</h2>
                    <p>  <CiCircleRemove className="cursor-pointer text-3xl text-red-700 font-medium" onClick={() => setspecialForm(false)} /></p>
                </div>
               

                {/* NAME */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full outline-0 bg-[var(--secondary)]  p-2 rounded mb-3"
                    onChange={handleChange}
                />

                {/* CONTACT */}
                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                    onChange={handleChange}
                />

                {/* EXPERTISE */}
                <p className="font-semibold mb-1 text-[var(--primary)]">Expertise</p>
                <div className="flex flex-wrap gap-3 mb-3">
                    {expertiseOptions.map((exp) => (
                        <label key={exp} className="flex items-center gap-2">
                            <input

                                type="checkbox"
                                value={exp}
                                onChange={handleExpertiseChange}
                            />
                            {exp}
                        </label>
                    ))}
                </div>

                {/* EXPERIENCE */}
                <input
                    type="number"
                    name="experienceYears"
                    placeholder="Experience Years"
                    className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                    onChange={handleChange}
                />

                {/* IMAGE */}
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                    onChange={handleChange}
                />

                {/* CERTIFICATIONS */}
                <p className="font-semibold mb-1 text-[var(--primary)]">Certifications</p>
                {form.certifications.map((c, index) => (
                    <input
                        key={index}
                        type="text"
                        value={c}
                        onChange={(e) => handleCertificationChange(index, e.target.value)}
                        placeholder={`Certification ${index + 1}`}
                        className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-2"
                    />
                ))}
                <button
                    type="button"
                    style={{ background: "var(--primary-gradient)" }}
                    className=" text-white px-3 py-1 rounded mb-3"
                    onClick={addCertification}
                >
                    + Add Certification
                </button>

                {/* AVAILABILITY */}
                <p className="font-semibold mb-2 text-[var(--primary)]">Availability</p>
                {form.availability.map((a, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                        <select
                            value={a.day}
                            onChange={(e) => handleAvailabilityChange(index, "day", e.target.value)}
                            className="outline-0 bg-[var(--secondary)] p-2 rounded"
                        >
                            {days.map((d) => (
                                <option key={d}>{d}</option>
                            ))}
                        </select>

                        <input
                            type="time"
                            value={a.start}
                            onChange={(e) => handleAvailabilityChange(index, "start", e.target.value)}
                            className="outline-0 bg-[var(--secondary)] p-2 rounded"
                        />

                        <input
                            type="time"
                            value={a.end}
                            onChange={(e) => handleAvailabilityChange(index, "end", e.target.value)}
                            className="outline-0 bg-[var(--secondary)] p-2 rounded"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    style={{ background: "var(--primary-gradient)" }}
                    className=" text-white px-3 py-1 rounded mb-4"
                    onClick={addAvailability}
                >
                    + Add Availability
                </button>

                {/* SUBMIT */}
                <button type='submit' style={{ background: "var(--primary-gradient)" }} className="w-full  text-white p-2 rounded hover:bg-gray-800 font-medium text-lg  cursor-pointer">
                    Submit
                </button>
            </form>}

            {updateForm && (
                <form onSubmit={handleUpdates} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-5 absolute z-10 top-20 right-0 left-0 border border-gray-300">
                    <div className='flex justify-between items-center p-3 mb-4'>
                        <h2 className="text-2xl font-bold ">Update Specialist</h2>
                        <CiCircleRemove className="cursor-pointer text-3xl text-red-700 font-medium" onClick={() => setUpdateForm(false)} />
                    </div>
                   

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        placeholder="Name"
                        className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="contactNumber"
                        value={form.contactNumber}
                        placeholder="Contact Number"
                        className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    <p className="font-semibold mb-1">Expertise</p>
                    <div className="flex flex-wrap gap-3 mb-3">
                        {expertiseOptions.map((exp) => (
                            <label key={exp} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={exp}
                                    checked={form.expertise.includes(exp)}
                                    onChange={handleExpertiseChange}
                                />
                                {exp}
                            </label>
                        ))}
                    </div>

                    <input
                        type="number"
                        name="experienceYears"
                        value={form.experienceYears}
                        placeholder="Experience Years"
                        className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="image"
                        value={form.image}
                        placeholder="Image URL"
                        className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    <p className="font-semibold mb-1">Certifications</p>
                    {form.certifications.map((c, index) => (
                        <input
                            key={index}
                            type="text"
                            value={c}
                            onChange={(e) => handleCertificationChange(index, e.target.value)}
                            className="w-full outline-0 bg-[var(--secondary)] p-2 rounded mb-2"
                        />
                    ))}

                    <button type="button" className="px-3 py-1 text-white rounded mb-3" onClick={addCertification}
                        style={{ background: "var(--primary-gradient)" }}>
                        + Add Certification
                    </button>

                    <p className="font-semibold mb-2">Availability</p>
                    {form.availability.map((a, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                            <select
                                value={a.day}
                                onChange={(e) => handleAvailabilityChange(index, "day", e.target.value)}
                                className="outline-0 bg-[var(--secondary)] p-2 rounded"
                            >
                                {days.map((d) => <option key={d}>{d}</option>)}
                            </select>

                            <input
                                type="time"
                                value={a.start}
                                onChange={(e) => handleAvailabilityChange(index, "start", e.target.value)}
                                className="outline-0 bg-[var(--secondary)] p-2 rounded"
                            />

                            <input
                                type="time"
                                value={a.end}
                                onChange={(e) => handleAvailabilityChange(index, "end", e.target.value)}
                                className="outline-0 bg-[var(--secondary)] p-2 rounded"
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addAvailability}
                        className="px-3 py-1 text-white rounded mb-4"
                        style={{ background: "var(--primary-gradient)" }}
                    >
                        + Add Availability
                    </button>

                    <button
                        type="submit"
                        className="w-full text-white p-2 rounded font-medium text-lg cursor-pointer"
                        style={{ background: "var(--primary-gradient)" }}
                    >
                        Update
                    </button>
                </form>
            )}

        </div>
    )
}

export default AdminSpecialist