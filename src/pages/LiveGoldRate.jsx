import { useState } from "react";

function LiveGoldRate() {
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState("24");

  const rates = { 24: 7250, 22: 6645, 18: 5438 };
  const estimatedValue = weight
    ? (parseInt(weight) * rates[purity]).toLocaleString()
    : "72,500";

  return (
    <section className="py-16 px-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
            Today's Live Gold Rate (per gram)
          </h2>
          <div className="flex flex-wrap gap-4 p-4">
            {[
              { karat: "24 Karat", rate: "₹7,250" },
              { karat: "22 Karat", rate: "₹6,645" },
              { karat: "18 Karat", rate: "₹5,438" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#3a3727]">
                <p className="text-[#F5F5F5] text-base font-medium leading-normal">
                  {item.karat}
                </p>
                <p className="text-yellow-400 tracking-light text-2xl font-bold leading-tight">
                  {item.rate}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#bcb79a] text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Last updated: Today. Data sourced from IBJA.
          </p>
        </div>
        <div className="lg:col-span-1 bg-[#23200f] border border-[#3a3727] rounded-xl p-6">
          <h3 className="text-white text-xl font-bold mb-4">
            Get an Instant Estimate
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#E0E0E0] mb-1">
                Weight (grams)
              </label>
              <input
                type="number"
                placeholder="e.g., 10"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#111111] border border-[#3a3727] rounded-lg h-10 px-3 text-white text-sm focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#E0E0E0] mb-1">
                Purity (karat)
              </label>
              <select
                value={purity}
                onChange={(e) => setPurity(e.target.value)}
                className="w-full bg-[#111111] border border-[#3a3727] rounded-lg h-10 px-3 text-white text-sm focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-2">
                <option value="24">24 Karat</option>
                <option value="22">22 Karat</option>
                <option value="18">18 Karat</option>
              </select>
            </div>
            <button
              type="button"
              className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-yellow-400 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-yellow-300 transition">
              <span className="truncate">Calculate Value</span>
            </button>
            <div className="text-center pt-2">
              <p className="text-sm text-[#E0E0E0]">Estimated Value:</p>
              <p className="text-2xl font-bold text-yellow-400">
                ₹{estimatedValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveGoldRate;
