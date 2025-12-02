import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="pt-14 pb-8"
      style={{ backgroundColor: "#1e3a5f", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <div className="size-7 text-[#D4AF37]">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              Gold-Encash
            </h2>

            <p className="mt-3 text-sm text-gray-200 leading-relaxed">
              Secure • Transparent • Instant Gold Selling Platform
            </p>

            <div className="mt-6">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#D4AF37" }}>
                Support
              </h3>

              <div className="flex flex-col text-sm">
                <a href="tel:+919217247347" className="hover:text-[#D4AF37]">
                  Mobile: +91-9217247347
                </a>

                <a
                  href="mailto:info@goldencash.in"
                  className="hover:text-[#D4AF37]">
                  Email: info@goldencash.in
                </a>
              </div>

              {/* <p className="text-sm mt-1 text-gray-300">
                Mon – Sat: 10 AM – 7 PM
              </p> */}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "#D4AF37" }}>
              Contact Information
            </h3>

            <p className="text-sm leading-relaxed">
              Registered Office: D-44, KRISHAN VIHAR, DELHI-110086
            </p>

            <p className="text-sm mt-2">
              Company: Carshala Services Private Limited
            </p>

            <p className="text-sm mt-2">Website: www.goldencash.in</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "#D4AF37" }}>
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-[#D4AF37]">
                Home
              </Link>
              <Link to="/aboutus" className="hover:text-[#D4AF37]">
                About Us
              </Link>
              <Link to="/contactus" className="hover:text-[#D4AF37]">
                Contact
              </Link>
              <Link to="/termsconditions" className="hover:text-[#D4AF37]">
                Terms & Conditions
              </Link>
              <Link to="/disclaimer" className="hover:text-[#D4AF37]">
                Disclaimer
              </Link>
              <Link to="/privacypolicy" className="hover:text-[#D4AF37]">
                Privacy Policy
              </Link>
              <Link
                to="/refundcancellationpolicy"
                className="hover:text-[#D4AF37]">
                Refund Cancellation Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[FaFacebook, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-white transition text-xl hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}>
              <Icon />
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className="pt-5 text-center"
          style={{ borderTop: "1px solid rgba(212,175,55,0.3)" }}>
          <p className="text-sm">
            © 2024 <span style={{ color: "#D4AF37" }}>Gold-Encash</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
