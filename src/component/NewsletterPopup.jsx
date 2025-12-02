import React, { useState } from "react";

const NewsletterPopup = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", mobile: "" });

  const handleSubmit = () => {
    const { name, mobile } = form;

    if (!name || !mobile.trim()) {
      alert("Please enter your name and mobile number");
      return;
    }

    if (mobile.length < 10) {
      alert("Enter a valid mobile number");
      return;
    }

    // WhatsApp Message
    const msg = `New Newsletter Enquiry:\nName: ${name}\nMobile: ${mobile}`;
    const phone = "919311362462";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-sm p-6 shadow-lg text-center relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}>
          ×
        </button>

        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">
          Join Our Newsletter
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Get latest gold updates & exclusive offers!
        </p>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border rounded-md px-3 py-2 mb-3 text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        {/* Mobile Input */}
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="w-full border rounded-md px-3 py-2 mb-4 text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#D4AF37] text-[#1e3a5f] font-semibold py-2 rounded-md hover:opacity-90">
          Send on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
