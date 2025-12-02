import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function GoldEncash() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ SEND DATA ON WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // WhatsApp phone number (without +)
    const phoneNumber = "919311362462";

    const whatsappMessage = `New Enquiry:
      Name: ${name}
      Email: ${email}
      Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(url, "_blank");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-yellow-300/50 to-yellow-500/30 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-800 font-medium">
            We're here to help you get the best value for your gold.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Office Address */}
            <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-yellow-400/30">
              <div className="flex items-center mb-4">
                <MapPin className="text-yellow-500 mr-3" size={28} />
                <h3 className="text-xl font-bold text-gray-800">
                  Office Address
                </h3>
              </div>
              <p className="text-gray-700">
                644, DLF Tower, 15 Shivaji Marg, Najafgarh Road, Moti Nagar, New
                Delhi - 110015
              </p>
            </div>

            {/* Email */}
            <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-yellow-400/30">
              <div className="flex items-center mb-4">
                <Mail className="text-yellow-500 mr-3" size={28} />
                <h3 className="text-xl font-bold text-gray-800">
                  Email Address
                </h3>
              </div>
              <p className="text-gray-700">
                <a
                  href="mailto:sanjay.y@kissandhan.com"
                  className="text-yellow-600 font-medium hover:text-yellow-700">
                  sanjay.y@kissandhan.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-yellow-400/30">
              <div className="flex items-center mb-4">
                <Phone className="text-yellow-500 mr-3" size={28} />
                <h3 className="text-xl font-bold text-gray-800">
                  Phone Number
                </h3>
              </div>
              <a
                href="tel:+919217247347"
                className="text-gray-700 hover:text-yellow-600">
                +91-9217247347
              </a>
            </div>

            {/* Working Hours */}
            <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-yellow-400/30">
              <div className="flex items-center mb-4">
                <Clock className="text-yellow-500 mr-3" size={28} />
                <h3 className="text-xl font-bold text-gray-800">
                  Working Hours
                </h3>
              </div>
              <p className="text-gray-700">Monday - Saturday: 10 AM – 7 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 rounded-lg shadow-lg max-w-2xl mx-auto border border-yellow-400/40">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-400/40 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-400/40 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-yellow-400/40 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
                  placeholder="Enter your message"></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-yellow-500 text-white text-base font-bold hover:bg-yellow-600 transition">
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
