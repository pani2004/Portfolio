import React, { useState } from 'react'
import { useToast } from './ToastProvider'
import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

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
    <div name='Contact' id="Contact" className='relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black p-4 text-white py-24 overflow-hidden'>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl'></div>
      <div className="relative flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <SectionHeading index="07" title="Contact" subtitle="Have an opportunity or just want to say hi? Drop a message below." align="center" />

        <div className="flex justify-center items-center">
          <Reveal delay={0.1} className='w-full md:w-1/2'>
            <form onSubmit={handleSubmit} className="flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
              {/* <div className='flex items-center gap-2 mb-5 text-gray-400'>
                <HiOutlineMail className='text-cyan-400' size={20} />
              </div> */}

              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 bg-black/30 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-white/10'}`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">Name must be at least 2 characters</p>}

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 my-4 bg-black/30 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-white/10'}`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>}

              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={`p-3 bg-black/30 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none transition-all duration-200 ${errors.message ? 'border-red-500' : 'border-white/10'}`}
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">Message must be at least 10 characters</p>}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mt-6 flex items-center justify-center rounded-lg shadow-lg shadow-cyan-500/20 duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : "Let's Talk"}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Contact

