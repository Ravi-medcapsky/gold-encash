import React from "react";

export default function SellGold() {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5 ">
      <div className="w-full max-w-5xl flex flex-col flex-1">
        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="flex-grow py-16 sm:py-24">
          <div className="flex flex-col items-center gap-16 px-4">
            {/* Steps Section */}
            <div className="flex flex-col gap-12 w-full text-center">
              <div>
                <h1 className="text-yellow-600 text-4xl md:text-5xl font-bold tracking-tight">
                  Sell Your Gold in 4 Simple Steps
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
                  Experience a seamless and transparent process to get the best
                  value for your gold, instantly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((step, idx) => (
                  <div
                    key={idx}
                    className=" border border-yellow-500 rounded-xl p-6 text-center flex flex-col items-center gap-4 shadow-md">
                    <div className="bg-yellow-500/20 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step}
                    </div>

                    <h3 className="text-yellow-600 text-lg font-semibold">
                      {
                        [
                          "Fill Your Gold Details",
                          "Get Estimated Value",
                          "Schedule Pickup / Visit",
                          "Get Instant Cash",
                        ][idx]
                      }
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {
                        [
                          "Provide basic information about your gold.",
                          "Receive a real-time valuation.",
                          "Choose a convenient pickup time.",
                          "Get paid instantly via cash or bank transfer.",
                        ][idx]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- FORM CARD ---------------- */}
            <div className="w-full max-w-4xl  border border-yellow-500/50 rounded-xl p-8 sm:p-12 flex flex-col gap-8 shadow-lg">
              <div className="flex flex-col gap-2">
                <h2 className="text-yellow-600 text-3xl font-bold">
                  Get Your Quote Now
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will contact you.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Fields */}
                {[
                  ["Full Name", "text"],
                  ["Mobile Number", "tel"],
                  ["City / Pincode", "text"],
                  ["Gold Weight (grams)", "number"],
                ].map(([label, type], i) => (
                  <label key={i} className="flex flex-col gap-2">
                    <span className="text-yellow-700 font-medium">{label}</span>
                    <input
                      type={type}
                      className=" border border-yellow-500/40 rounded-lg h-12 px-4 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500"
                      placeholder={`Enter ${label}`}
                    />
                  </label>
                ))}

                {/* Purity Select */}
                <label className="flex flex-col gap-2">
                  <span className="text-yellow-700 font-medium">Purity</span>
                  <select className=" border border-yellow-500/40 rounded-lg h-12 px-4 text-white focus:ring-2 focus:ring-yellow-500">
                    <option value="" className="text-black">
                      Select Purity
                    </option>
                    <option value="24k" className="text-black">
                      24K (99.9% Pure)
                    </option>
                    <option value="22k" className="text-black">
                      22K (91.6% Pure)
                    </option>
                    <option value="18k" className="text-black">
                      18K (75.0% Pure)
                    </option>
                  </select>
                </label>

                {/* Message */}
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-yellow-700 font-medium">
                    Message (Optional)
                  </span>
                  <textarea
                    className=" border border-yellow-500/40 rounded-lg min-h-24 p-4 text-white focus placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500"
                    placeholder="Any additional details about your gold..."
                  />
                </label>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white h-14 rounded-lg text-lg font-bold hover:bg-yellow-600 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                    Submit & Get Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
