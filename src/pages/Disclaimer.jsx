import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-[#1e3a5f]/20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6 border-b pb-3 border-[#D4AF37]">
          Disclaimer – Gold-Encash
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-semibold text-[#1e3a5f]">Last Updated:</span>{" "}
          (Add Date)
        </p>

        {/* 1. General Information */}
        <Section
          number="1"
          title="General Information"
          content={
            <>
              <p>
                Gold-Encash (www.gold-encash.in) is an online platform that
                displays live gold rates and allows users to submit a request
                for selling gold.
              </p>
              <p className="mt-2">We DO NOT buy or sell gold.</p>
              <p>We only connect users with jewellers.</p>
            </>
          }
        />

        {/* 2. Accuracy of Gold Rates */}
        <Section
          number="2"
          title="Accuracy of Gold Rates"
          content={
            <>
              <p>
                Gold rates displayed on the website are based on publicly
                available market sources.
              </p>
              <p className="mt-2">Actual selling rates may vary due to:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Purity</li>
                <li>Market fluctuations</li>
                <li>Labour charges</li>
                <li>Deductions by jewellers</li>
              </ul>
              <p className="mt-2">We do NOT guarantee any final price.</p>
            </>
          }
        />

        {/* 3. No Financial Advice */}
        <Section
          number="3"
          title="No Financial Advice"
          content={
            <p>
              Gold-Encash is not a financial advisor. Any rate, number, or
              calculation shown is for informational purposes only.
            </p>
          }
        />

        {/* 4. Third-Party Jewellers */}
        <Section
          number="4"
          title="Third-Party Jewellers"
          content={
            <>
              <p>When a user submits a request:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>We share the details with a jeweller</li>
                <li>
                  The jeweller directly handles pricing, purity testing, and
                  payment
                </li>
                <li>All transactions happen between user & jeweller only</li>
              </ul>

              <p className="mt-2">We are not responsible for:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Fraud</li>
                <li>Misbehaviour</li>
                <li>Under-valuation</li>
                <li>Disputes</li>
                <li>Payment delays</li>
              </ul>

              <p className="mt-2">
                Users must verify the jeweller before giving gold.
              </p>
            </>
          }
        />

        {/* 5. No Liability */}
        <Section
          number="5"
          title="No Liability"
          content={
            <>
              <p>Gold-Encash is not responsible for any:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Loss of gold</li>
                <li>Loss of money</li>
                <li>Incorrect valuation</li>
                <li>Damage</li>
                <li>Scams</li>
                <li>Purity testing disputes</li>
              </ul>
              <p className="mt-2">Users deal at their own risk.</p>
            </>
          }
        />

        {/* 6. External Links */}
        <Section
          number="6"
          title="External Links"
          content={
            <p>
              We are not responsible for third-party website content or
              policies.
            </p>
          }
        />

        {/* 7. Consent */}
        <Section
          number="7"
          title="Consent"
          content={<p>By using the website, you agree with this Disclaimer.</p>}
        />
      </div>
    </div>
  );
};

const Section = ({ number, title, content }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-[#1e3a5f] border-l-4 border-[#D4AF37] pl-3 mb-3">
      {number}. {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{content}</div>
  </div>
);

export default Disclaimer;
