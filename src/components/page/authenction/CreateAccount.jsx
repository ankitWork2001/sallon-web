import React, { useState, useEffect } from 'react'

const CreateAccount = () => {
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '' })
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [avatarFile, setAvatarFile] = useState(null)

  useEffect(() => {
    // cleanup object URL when component unmounts or avatarFile changes
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview)
    }
  }, [avatarPreview])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarPreview(url)
      setAvatarFile(file)
    } else {
      setAvatarPreview(null)
      setAvatarFile(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // simple client-side validation example
    if (!form.name || !form.username || !form.email || !form.password) {
      alert('Please fill all required fields')
      return
    }

    // prepare form data (example: for API upload)
    const fd = new FormData()
    fd.append('name', form.name)
    fd.append('username', form.username)
    fd.append('email', form.email)
    fd.append('password', form.password)
    if (avatarFile) fd.append('avatar', avatarFile)

    // Replace the following with actual submission logic (fetch/axios)
    console.log('Submitting form:', { ...form, avatarFile })
    alert('Form submitted (see console)')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile image upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 overflow-hidden">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar preview" className="w-full h-full object-cover" />
                ) : (
                  <svg
                    className="w-10 h-10 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.121 17.804z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>

              <div>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="avatar" style={{ background: "var(--secondary)" }}
                  className="cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 ">
                  Choose Image
                </label>
                {avatarPreview && (
                  <button type="button" onClick={() => { setAvatarPreview(null); setAvatarFile(null) }} className="ml-2 text-sm text-red-500">
                    Remove
                  </button>
                )}
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              style={{ background: "var(--secondary)" }}
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              style={{ background: "var(--secondary)" }}
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
              className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

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
              required
              className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button type="submit" style={{ background: "var(--primary-gradient)" }} className="w-full inline-flex justify-center items-center px-4 py-2  text-white font-medium rounded-md  focus:outline-none focus:ring-2 cursor-pointer ">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
