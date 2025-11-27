import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-[#1e3a5f]/20">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6 border-b pb-3 border-[#D4AF37]">
          Refund & Cancellation Policy – Gold-Encash
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-semibold text-[#1e3a5f]">Last Updated:</span> (Add Date)
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] border-l-4 border-[#D4AF37] pl-3 mb-3">
            1. No Payments on Website
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Gold-Encash does not take any:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>Payments</li>
            <li>Booking fees</li>
            <li>Deposits</li>
            <li>Online charges</li>
          </ul>
          <p className="text-gray-700 mt-2">Therefore, refunds do not apply.</p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] border-l-4 border-[#D4AF37] pl-3 mb-3">
            2. Request Submission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Once a user submits the “Sell Gold Request” form:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>The request is forwarded to a jeweller</li>
            <li>The jeweller may contact the user</li>
            <li>Users can cancel their request anytime by not proceeding with the deal</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] border-l-4 border-[#D4AF37] pl-3 mb-3">
            3. Deal Cancellation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A user may cancel the gold-selling process at any time before handing over gold to the jeweller.
            Gold-Encash has no role in:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>Negotiation</li>
            <li>Final deal</li>
            <li>Cancellation after handing over gold</li>
          </ul>
          <p className="text-gray-700 mt-2">
            This process is strictly between the user and the jeweller.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] border-l-4 border-[#D4AF37] pl-3 mb-3">
            4. No Refund Scenario
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Since:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>No money is collected by Gold-Encash</li>
            <li>No transaction takes place on our website</li>
          </ul>
          <p className="text-gray-700 mt-2">
            There is <span className="font-semibold text-[#1e3a5f]">NO REFUND POLICY REQUIRED.</span>
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] border-l-4 border-[#D4AF37] pl-3 mb-3">
            5. Contact for Queries
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Email: <span className="font-semibold text-[#1e3a5f]">info@goldencash.in</span> <br />
            Phone: <span className="font-semibold text-[#1e3a5f]">+91-9922117866</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
