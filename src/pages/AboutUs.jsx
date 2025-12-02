import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1e3a5f] px-4 md:px-10 lg:px-40 py-10">
      {/* Page Title */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h1 className="text-[#D4AF37] text-4xl sm:text-5xl font-black tracking-[-0.033em] min-w-72">
          About Gold-Encash
        </h1>
      </div>

      {/* About Text */}
      <div className="px-4 pt-4 pb-8">
        <p className="text-white text-base sm:text-lg leading-relaxed">
          Carshala Services Pvt. Ltd. presents Gold-Encash, India’s most
          transparent and trusted online gold-selling platform. We ensure you
          get the highest value for your gold, based on real-time IBJA prices
          and instant payment systems.
        </p>
      </div>

      {/* Details Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-[150px_1fr] md:grid-cols-[20%_1fr] gap-x-6">

        {/* CIN */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#D4AF37] py-5">
          <p className="text-[#D4AF37] text-sm font-semibold">CIN</p>
          <p className="text-white text-sm">U12345XYZ67890</p>
        </div>

        {/* Registered Office */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#D4AF37] py-5">
          <p className="text-[#D4AF37] text-sm font-semibold">Registered Office</p>
          <p className="text-white text-sm">
            D-44, KRISHAN VIHAR, DELHI-110086 India
          </p>
        </div>

        {/* Directors */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#D4AF37] py-5">
          <p className="text-[#D4AF37] text-sm font-semibold">Directors</p>
          <p className="text-white text-sm">
            Vivek Kumar Yadav
          </p>
        </div>

        {/* Email */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#D4AF37] py-5">
          <p className="text-[#D4AF37] text-sm font-semibold">Email</p>
          <a
            href="mailto:info@gold-encash.in"
            className="text-white hover:text-[#D4AF37] hover:underline text-sm transition"
          >
            info@gold-encash.in
          </a>
        </div>
      </div>
    </div>
  );
}
