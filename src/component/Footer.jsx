import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Left Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <p className="text-sm text-gray-300">
              Office: Gold-Encash Office, New Delhi, India
            </p>
            <p className="text-sm text-gray-300">
              Email:{" "}
              <a href="mailto:support@gold-encash.in" className="text-blue-400 hover:underline">
                support@gold-encash.in
              </a>
            </p>
          </div>

          {/* Right Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <p className="text-sm text-gray-300">Phone: +91-XXXXXXXXXX</p>
            <p className="text-sm text-gray-300">
              Working Hours: Mon - Sat: 10 AM – 7 PM
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 www.gold-encash.in. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
