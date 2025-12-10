import React, { useEffect, useState } from 'react'
import { FiEdit2, FiTrash2, FiClock } from "react-icons/fi";
import { BeatLoader } from 'react-spinners';
import { getDataAdmin } from '../../../redux/adminSlice/adminSlice';
import { useDispatch, useSelector } from "react-redux"

const AdminService = () => {
  const [serviceItems, setServiceItems] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [updateFormOpen, setUpdateFormOpen] = useState(false);
  const [id, setId] = useState('');
  const [updateForm, setUpdateForm] = useState({});
  const dispatch = useDispatch()
  const token = localStorage.getItem("authtoken");
  const [category,setCategory] = useState('')


  // get data for redux
  const handleGetData = () => {
    dispatch(getDataAdmin({ url: `${import.meta.env.VITE_API_URL}salon-admin/get-service-items`, key: 'service', token: token }))
  }

//    const handlegetcategory = () => {

    
//      fetch(`${import.meta.env.VITE_API_URL}super-admin/getAllCategories`,)
//      .then((res)=>res.json())
//      .then((data)=>{
//       setCategory(data)
//       console.log(data)
//    })
//      .then((err)=>{
// console.log(err)
//      })
//     }


  useEffect(() => {
    handleGetData()
    // handlegetcategory()

  }, [])
  


   const { data, loading, error } = useSelector((state) => state.admin)
  
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    durationMins: 30,
    discountPercent: 0,
    description: "",
    image: "",
    status: "active",
    providerType: "salon",
    // providerId: "",
    gender : 'men'
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name === "" || form.category === "" || form.price === "" || form.providerId === "" || form.description === ""  || form.image === "") {
      alert("Please fill all  fields!");
      return;
    }
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify({
        "name": form.name,
        "category": form.category,
        "price": form.price,
        "durationMins": form.durationMins,
        "discountPercent": form.discountPercent,
        "description": form.description,
        "image": form.image,
        "status": form.status,
        "providerType": form.providerType,
        // "providerId": form.providerId,
        'gender' : form.gender
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(`${import.meta.env.VITE_API_URL}salon-admin/create-service-item`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (!result.status) {
            alert("Error: " + result.message);
            form.name = "";
            form.category = "";
            form.price = "";
            form.durationMins = 30;
            form.discountPercent = 0;
            form.description = "";
            form.image = "";
            form.status = "active";
            form.providerType = "salon";
            // form.providerId = "";
            form.gender = ''
            setFormOpen(false);
            return;
          }
          form.name = "";
          form.category = "";
          form.price = "";
          form.durationMins = 30;
          form.discountPercent = 0;
          form.description = "";
          form.image = "";
          form.status = "active";
          form.providerType = "salon";
          form.providerId = "";
                      form.gender = ''

          setFormOpen(false);
          console.log(result)
          alert("Service Item Added Successfully!");
        })

    } catch (error) {
      console.log(error);
      alert("Error while adding service!");
      form.name = "";
      form.category = "";
      form.price = "";
      form.durationMins = 30;
      form.discountPercent = 0;
      form.description = "";
      form.image = "";
      form.status = "active";
      form.providerType = "salon";
      // form.providerId = "";
      setFormOpen(false);
    }
  };



  const handleUpdateChange = (e) => {
    setUpdateForm({
      ...updateForm,
      [e.target.name]: e.target.value
    });
  };


  const handleUpdates = (e) => {
    e.preventDefault();

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify(updateForm);

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(`${import.meta.env.VITE_API_URL}salon-admin/update-service-item/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          setUpdateFormOpen(false);
          alert("Service Item Updated Successfully!");
          handleGetData()
        })
    } catch (error) {
      console.log(error)
    }
  }


  const handleDelete = (Id) => {

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

      fetch(`${import.meta.env.VITE_API_URL}salon-admin/delete-service-item/${Id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            alert(result.message);
            handleGetData()

          } else {
            alert("Error: " + result.message);
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='relative'>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto border border-gray-500 rounded-xl p-6 bg-white">

          {/* Header */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="md:text-2xl text-xl font-semibold text-[var(--primary)]">Services Management</h2>
            <button onClick={() => setFormOpen(!formOpen)} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg cursor-pointer">
              <span className="text-xl">＋</span> Add Service
            </button>
          </div>

          {loading && <div className="flex justify-center items-center h-64"><BeatLoader size={20} /></div>}


          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6 bg-gray-50">
            {data?.service?.services?.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-xl p-5 shadow-sm relative"
              >
                {service.status === "active" ? <div className="absolute top-1 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</div> : <div className="absolute top-1 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Inactive</div>}
                <div className="flex justify-between items-start mt-4">
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                  </div>

                  <div className="flex gap-3 text-gray-600">
                    <FiEdit2 className="cursor-pointer" onClick={() => { setId(service._id), setUpdateFormOpen(true) }} size={18} />
                    <FiTrash2 className="cursor-pointer" onClick={() => handleDelete(service._id)} size={18} />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 text-sm">
                  <p className="font-medium flex gap-1">
                    <span>₹</span> {service.price}
                  </p>

                  <p className="flex items-center gap-1 text-gray-700">
                    <FiClock size={16} /> {service.durationMins} min
                  </p>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-4 text-sm">
                  <p className="font-medium flex gap-1">
                    <span>Discount</span> {service.discountPercent} %
                  </p>

                  <p className="flex items-center gap-1 text-gray-700">
                    <span className='font-medium text-black text-sm'>Provider Type:</span>  {service.providerType}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>


      {formOpen && <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto absolute top-5 right-45 bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Service Item</h2>


        <div className='grid md:grid-cols-2 gap-3'>

          <div>


            {/* Name */}
            <div className="mb-4">
              <label className="font-semibold">Service Name</label>
              <input
                type="text"
                name="name"
                className="w-full border p-2 rounded"
                value={form.name}
                onChange={handleChange}

              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="font-semibold">Category ID</label>
              <input
                type="text"
                name="category"
                className="w-full border p-2 rounded"
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="font-semibold">Price</label>
              <input
                type="number"
                name="price"
                className="w-full border p-2 rounded"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="font-semibold">Duration (Minutes)</label>
              <input
                type="number"
                name="durationMins"
                className="w-full border p-2 rounded"
                value={form.durationMins}
                onChange={handleChange}
              />
            </div>

            {/* Discount */}
            <div className="mb-4">
              <label className="font-semibold">Discount (%)</label>
              <input
                type="number"
                name="discountPercent"
                className="w-full border p-2 rounded"
                value={form.discountPercent}
                onChange={handleChange}
              />
            </div>

          </div>
          <div>


             <div className='mb-4'>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              value={form.gender}
              onChange={handleChange}
              className="w-full border p-2 rounded cursor-pointer "
              required
            >
              <option  value="men">Men</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
            </select>
        </div>
          

            {/* Image URL */}
            <div className="mb-4">
              <label className="font-semibold">Image URL</label>
              <input
                type="text"
                name="image"
                className="w-full border p-2 rounded"
                value={form.image}
                onChange={handleChange}
              />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="font-semibold">Status</label>
              <select
                name="status"
                className="w-full border p-2 rounded"
                value={form.status}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Provider Type */}
            <div className="mb-4">
              <label className="font-semibold">Provider Type</label>
              <select
                name="providerType"
                className="w-full border p-2 rounded"
                value={form.providerType}
                onChange={handleChange}
              >
                <option value="salon">Salon</option>
                <option value="independent">Independent</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="font-semibold">Description</label>
              <textarea
                rows={1}
                name="description"
                className="w-full border p-2 rounded"
                value={form.description}
                onChange={handleChange}
              ></textarea>
            </div>

          </div>
        </div>
       
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>}



      {updateFormOpen && <form
        onSubmit={handleUpdates}
        className="max-w-xl mx-auto absolute top-5 right-45 bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Update Service Item</h2>


        <div className='grid md:grid-cols-2 gap-3'>

          <div>


            {/* Name */}
            <div className="mb-4">
              <label className="font-semibold">Service Name</label>
              <input
                type="text"
                name="name"
                className="w-full border p-2 rounded"
                value={updateForm.name}
                onChange={handleUpdateChange}

              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="font-semibold">Category ID</label>
              <input
                type="text"
                name="category"
                className="w-full border p-2 rounded"
                value={updateForm.category}
                onChange={handleUpdateChange}

              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="font-semibold">Price</label>
              <input
                type="number"
                name="price"
                className="w-full border p-2 rounded"
                value={updateForm.price}
                onChange={handleUpdateChange}

              />
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="font-semibold">Duration (Minutes)</label>
              <input
                type="number"
                name="durationMins"
                className="w-full border p-2 rounded"
                value={updateForm.durationMins}
                onChange={handleUpdateChange}
              />
            </div>

            {/* Discount */}
            <div className="mb-4">
              <label className="font-semibold">Discount (%)</label>
              <input
                type="number"
                name="discountPercent"
                className="w-full border p-2 rounded"
                value={updateForm.discountPercent}
                onChange={handleUpdateChange}
              />
            </div>

          </div>
          <div>


            {/* Provider ID */}
            <div className="mb-4">
              <label className="font-semibold">Provider ID</label>
              <input
                type="text"
                name="providerId"
                className="w-full border p-2 rounded"
                value={updateForm.providerId}
                onChange={handleUpdateChange}

              />
            </div>

            {/* Image URL */}
            <div className="mb-4">
              <label className="font-semibold">Image URL</label>
              <input
                type="text"
                name="image"
                className="w-full border p-2 rounded"
                value={updateForm.image}
                onChange={handleUpdateChange}
              />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="font-semibold">Status</label>
              <select
                name="status"
                className="w-full border p-2 rounded"
                value={updateForm.status}
                onChange={handleUpdateChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Provider Type */}
            <div className="mb-4">
              <label className="font-semibold">Provider Type</label>
              <select
                name="providerType"
                className="w-full border p-2 rounded"
                value={updateForm.providerType}
                onChange={handleUpdateChange}
              >
                <option value="salon">Salon</option>
                <option value="independent">Independent</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="font-semibold">Description</label>
              <textarea
                rows={1}
                name="description"
                className="w-full border p-2 rounded"
                value={updateForm.description}
                onChange={handleUpdateChange}
              ></textarea>
            </div>

          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleUpdates}
        >
          Submit
        </button>
      </form>}

    </div>
  )
}

export default AdminService
