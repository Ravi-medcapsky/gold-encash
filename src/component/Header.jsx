import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header Top */}
      <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-4 bg-white shadow-md border-b border-[#D4AF37]/40 relative z-50">
        {/* Logo + Title */}
        <div
          className="flex items-center gap-3 text-[#1e3a5f] cursor-pointer"
          onClick={() => navigate("/")}>
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
          <h2 className="text-[#1e3a5f] text-xl font-extrabold tracking-tight">
            Gold-Encash
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-end gap-8 items-center">
          {["/", "/aboutus", "/contactus"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="text-[#1e3a5f] font-medium hover:text-[#D4AF37] transition text-sm">
              {["Home", "About Us", "Contact"][i]}
            </Link>
          ))}

          <button
            className="flex h-10 px-5 items-center justify-center rounded-lg bg-[#D4AF37] text-white text-sm font-bold hover:bg-[#c39b2f] transition cursor-pointer"
            onClick={() => navigate("/sellGold")}>
            Sell Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-[#1e3a5f]"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="sm:hidden absolute left-0 top-full w-full bg-white shadow-lg border-b border-[#D4AF37]/30 py-5 px-6">
            <div className="flex flex-col gap-5">
              {["/", "/aboutus", "/contactus"].map((path, i) => (
                <Link
                  key={i}
                  to={path}
                  className="text-[#1e3a5f] text-sm font-semibold hover:text-[#D4AF37] transition"
                  onClick={() => setMenuOpen(false)}>
                  {["Home", "About Us", "Contact"][i]}
                </Link>
              ))}

              <button
                className="w-full h-11 bg-[#D4AF37] text-white rounded-lg text-sm font-bold hover:bg-[#c39b2f] transition cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/sellGold");
                }}>
                Sell Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Navigation Banner Buttons */}
      {/* <nav className="flex flex-wrap gap-3 justify-center py-3 px-4 border-b border-[#D4AF37]/40">
        {[
          { label: "Get Instant Cash if Required", path: "/instant-cash" },
          { label: "100% Fair & Precise Valuation", path: "/valuation" },
          { label: "Transparent & Reliable Process", path: "/process" },
          { label: "Get Gold Checked at Home", path: "/home-check" },
        ].map((item, idx) => (
          <button
            key={idx}
            // onClick={() => navigate(item.path)}
            onClick={() => alert("Not Implemented at")}
            className="text-[#ffffff] bg-[#D4AF37] text-xs sm:text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-[#c39b2f] transition duration-200 cursor-pointer">
            {item.label}
          </button>
        ))}
      </nav> */}
    </div>
  );
}

export default Header;
