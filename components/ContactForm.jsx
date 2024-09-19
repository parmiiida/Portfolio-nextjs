import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('QNjfNYYZuDZF1s6rT'); // Replace with your user ID
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_fmmf9le', // Replace with your service ID
      'template_c5wcvcv', // Replace with your template ID
      formData,
      'QNjfNYYZuDZF1s6rT', // Replace with your user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
    }).catch((err) => {
      console.error('FAILED...', err);
      setError(`Failed to send message. Please try again later. Error: ${err.text}`);
    });
  };

  return (
    <div>
      <div className={`${styles.innerWidth} flex mx-auto my-8 items-center justify-center lg:leading-[150px] md:leading-[60px] sm:leading-[74.4px] leading-[74.4px]`}>
        <div className="flex gap-8">
          <div className="h-[1px] sm:w-80 w-40 mt-20 hide bg-[#8892b0]" />
          <p className="flex flex-1 lg:text-[35px] sm:text-[20px] text-[30px] md:text-[33px] mx-auto text-white sm:h-[30]">
            Get in touch
          </p>
          <div className="h-[1px] sm:w-80 w-40 mt-20 hide bg-[#8892b0]" />
        </div>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-[#2d3244] rounded-lg shadow-lg">
        {isSubmitted ? (
          <p className="text-green-500 text-center">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="username@gmail.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please write me a message!"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#604b75] hover:bg-[#554168] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
