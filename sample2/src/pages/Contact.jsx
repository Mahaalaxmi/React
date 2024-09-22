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
      <div className="relative p-6 flex flex-col md:flex-row rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[60%] backdrop-blur-lg border-2 border-black ">
        {/* Left side with image and details */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <img
            src="https://img.freepik.com/free-photo/business-woman-working-laptop-computer_1150-104.jpg?w=826&t=st=1726895032~exp=1726895632~hmac=8e1d5fd02a2e0765ef4b9f9829b267f5bb3f57e2fe5c2b82f5f62c9d92770847"
            alt="Working Woman"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md mb-4"
          />
          <h2 className="font-bold text-blue-600 text-bold text-3xl">
            MAHALAKSHMI K
          </h2>
          {/* <p className="text-center text-black font-bold">
            Full-Stack Developer with a passion for creating innovative
            solutions
          </p> */}
          <p className="text-center mt-2  font-bold text-white text-xl">
            Email: Mahakgm0827@gmail.com
          </p>
          <p className="text-center font-bold text-white text-xl">
            Phone: +91 9943077813
          </p>
        </div>

        {/* Right side with the contact form */}
        <div className="w-full md:w-1/2 p-4">
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
                className="w-full p-2 mt-1 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                className="w-full p-2 mt-1 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                className="w-full p-2 mt-1 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
