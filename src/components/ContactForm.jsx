import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("⚠️ Please fill out all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("⚠️ Invalid email address.");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setStatus("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setStatus("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("❌ Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E3EEFF] via-[#F6F9FF] to-[#DDE9FF] px-4 py-12">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-blue-100 transition-all duration-300 hover:shadow-blue-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#0066FF] to-[#33AAFF] text-transparent bg-clip-text mb-4 sm:mb-6">
          Get in Touch
        </h1>

        <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
          We'd love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 hover:bg-white transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 hover:bg-white transition-all"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 hover:bg-white transition-all"
              placeholder="Enter your 10-digit phone number"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 hover:bg-white transition-all resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-gradient-to-r from-[#0066FF] to-[#33AAFF] text-white rounded-2xl font-semibold text-lg shadow-lg transition-transform duration-200 ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:shadow-blue-300 hover:-translate-y-0.5"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center mt-4 font-medium ${
                status.includes("✅")
                  ? "text-green-600"
                  : status.includes("⚠️")
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
