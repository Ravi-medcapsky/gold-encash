import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#181710] px-4 md:px-10 lg:px-40 py-10">
      {/* Page Title */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h1 className="text-[#ffd900] text-4xl sm:text-5xl font-black tracking-[-0.033em] min-w-72">
          About Gold-Encash
        </h1>
      </div>

      {/* About Text */}
      <div className="px-4 pt-4 pb-8">
        <p className="text-white-700/40  text-base sm:text-lg leading-relaxed">
          Carshala Services Pvt. Ltd. presents Gold-Encash, India’s most
          transparent and trusted online gold-selling platform. We ensure you
          get the highest value for your gold, based on real-time IBJA prices
          and instant payment systems.
        </p>
      </div>

      {/* Details Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-[150px_1fr] md:grid-cols-[20%_1fr] gap-x-6">
        {/* CIN */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#565139] py-5">
          <p className="text-[#e7d565] text-sm">CIN</p>
          <p className="text-white-700/40  text-sm">U12345XYZ67890</p>
        </div>

        {/* Registered Office */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#565139] py-5">
          <p className="text-[#e7d565] text-sm">Registered Office</p>
          <p className="text-white-700/40  text-sm">
            123 Commerce Avenue, Business Park, New Delhi, 110001, India
          </p>
        </div>

        {/* Directors */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#565139] py-5">
          <p className="text-[#e7d565] text-sm">Directors</p>
          <p className="text-white-700/40  text-sm">
            Vivek Kumar Yadav, [Other Director Name]
          </p>
        </div>

        {/* Email */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-[#565139] py-5">
          <p className="text-[#e7d565] text-sm">Email</p>
          <a
            href="mailto:info@gold-encash.in"
            className="text-white-700/40 hover:underline text-sm">
            info@gold-encash.in
          </a>
        </div>
      </div>
    </div>
  );
}
