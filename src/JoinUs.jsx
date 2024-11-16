import React, { useState } from "react";

const JoinUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For back end use
    alert(`Thank you, ${name}! You have successfully joined our community.`);
  };

  return (
    <section className="bg-blue-100 py-16 px-8" id="join">
      
      <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center">Join Our Community</h2>
      
      
      <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
        Become a part of our vibrant anime community! Stay updated on events, connect with like-minded fans, and be the first to know about exciting news. We can't wait to have you with us!
      </p>

      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-blue-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-blue-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-blue-600 mb-2">
              Why do you want to join us?
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Tell us about your interests in anime"
              rows="4"
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
