import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      className="min-h-screen w-full h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/luxury-working-room-executive-office_105762-1725.jpg?t=st=1726893567~exp=1726897167~hmac=e1ccd6eb76067eaa97a3824773551e5a81b75702af48cc593832bc9e59e3047d&w=900')`,
      }}
    >
      {/* Background blur
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div> */}

      {/* Contact form with 2px black border */}
      <div className="relative  p-6 rounded-lg shadow-lg w-[85%] sm:w-[70%] md:w-[50%] lg:w-[30%] backdrop-blur-lg border-2 border-black">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Enter your message"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
