import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: false
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      message: formData.message === ''
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(error => error);
    if (!hasErrors) {
      const form = e.target;
      form.submit();
    }
  }
  return (
    <div name='Contact' id="Contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} action="https://getform.io/f/nbvvlyyb" method='POST' className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
                    mx-auto flex items-center justify-center rounded-md hover:scale-110 duration-300 w-full md:w-auto">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

