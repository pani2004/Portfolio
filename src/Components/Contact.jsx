import React, { useState } from 'react'
import { useToast } from './ToastProvider'

const Contact = () => {
  const { addToast } = useToast();
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {
      name: formData.name.trim() === '' || formData.name.length < 2,
      email: !validateEmail(formData.email),
      message: formData.message.trim() === '' || formData.message.length < 10
    };
    
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(error => error);
    
    if (hasErrors) {
      addToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/nbvvlyyb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        addToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      addToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div name='Contact' id="Contact" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white py-20'>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6 text-base md:text-lg">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 ${errors.name ? 'border-red-500' : 'border-gray-500'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name must be at least 2 characters</p>}
            
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`p-3 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 ${errors.email ? 'border-red-500' : 'border-gray-500'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>}
            
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              className={`p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 resize-none ${errors.message ? 'border-red-500' : 'border-gray-500'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">Message must be at least 10 characters</p>}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-110 duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : "Let's Talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

