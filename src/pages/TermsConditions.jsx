import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-[#1e3a5f]/20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6 border-b pb-3 border-[#D4AF37]">
          Terms & Conditions – Gold-Encash
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-semibold text-[#1e3a5f]">Last Updated:</span>{" "}
          (Add Date)
        </p>

        {/* Basic Info */}
        <div className="mb-8 text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold">Website:</span> www.gold-encash.in
          </p>
          <p>
            <span className="font-semibold">Brand:</span> Gold-Encash
          </p>
          <p>
            <span className="font-semibold">Company:</span> Carshala Services
            Private Limited
          </p>
          <p>
            <span className="font-semibold">Registered Office:</span> Rohini,
            Sector-2, North West Delhi, 110085, India
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@goldencash.in
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91-9922117866
          </p>
        </div>

        {/* Sections */}
        {/* 1. Definitions */}
        <Section
          number="1"
          title="Definitions"
          content={
            <>
              <p>
                Company / We / Us / Our refers to Carshala Services Private
                Limited.
              </p>
              <p>
                Website refers to the Gold-Encash platform available at
                www.gold-encash.in.
              </p>
              <p>
                Service means checking gold rates and submitting a request to
                connect with a jeweller.
              </p>
              <p>You / User refers to anyone using the Website.</p>
              <p>Device means any device that can access the Website.</p>
            </>
          }
        />

        {/* 2. Service Overview */}
        <Section
          number="2"
          title="Service Overview"
          content={
            <>
              <p>Gold-Encash provides:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Latest gold rate information</li>
                <li>
                  A request form for users interested in selling their gold
                </li>
              </ul>
              <p className="mt-2">Gold-Encash DOES NOT buy or sell gold.</p>
              <p>
                We only help users check rates and forward their request to a
                nearby jeweller.
              </p>
            </>
          }
        />

        {/* 3. No Online Payments */}
        <Section
          number="3"
          title="No Online Payments"
          content={
            <>
              <ul className="list-disc ml-6">
                <li>Users are not required to pay anything on our website.</li>
                <li>
                  We never collect any advance, booking amount, or online
                  payment.
                </li>
                <li>Your use of the Service is free.</li>
              </ul>
            </>
          }
        />

        {/* 4. Gold Rate Information Disclaimer */}
        <Section
          number="4"
          title="Gold Rate Information Disclaimer"
          content={
            <>
              <ul className="list-disc ml-6">
                <li>
                  Gold rates on the website are sourced from market-based
                  sources.
                </li>
                <li>
                  Actual buying rates may vary depending on jewellers, purity,
                  KDM/916 level, deductions, and business practices.
                </li>
                <li>
                  We do not guarantee the same selling rate shown on the
                  website.
                </li>
              </ul>
            </>
          }
        />

        {/* 5. Our Role is Limited */}
        <Section
          number="5"
          title="Our Role is Limited"
          content={
            <>
              <p>Gold-Encash only:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Shows daily gold rates</li>
                <li>Forwards your request to a jeweller</li>
              </ul>

              <p className="mt-2">Gold-Encash is NOT responsible for:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Final valuation</li>
                <li>Purity testing</li>
                <li>Weight measurement</li>
                <li>Pricing</li>
                <li>Any disputes during the transaction</li>
                <li>Payment delays or cheating by jewellers</li>
              </ul>

              <p className="mt-2">
                The complete transaction happens directly between you and the
                jeweller.
              </p>
            </>
          }
        />

        {/* 6. User Responsibilities */}
        <Section
          number="6"
          title="User Responsibilities"
          content={
            <>
              <p>Users must:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Provide accurate details</li>
                <li>Verify jeweller identity before handing over gold</li>
                <li>
                  Confirm purity test method (Hallmark machine, XRF, etc.)
                </li>
                <li>Make the deal at their own risk</li>
              </ul>
              <p className="mt-2">
                We recommend selling gold only to trusted jewellers.
              </p>
            </>
          }
        />

        {/* 7. Liability Limitation */}
        <Section
          number="7"
          title="Liability Limitation"
          content={
            <>
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  The Company is not liable for disputes, fraud, valuation
                  errors, or financial loss caused by third-party jewellers.
                </li>
                <li>
                  We are not responsible for any injury, loss of gold, loss of
                  money, or misunderstanding between you and the jeweller.
                </li>
              </ul>
              <p className="mt-2">
                Your exclusive remedy is to stop using the Service.
              </p>
            </>
          }
        />

        {/* 8. “As Is” Disclaimer */}
        <Section
          number="8"
          title="“As Is” Disclaimer"
          content={
            <>
              <p>
                The Service is provided as-is and as-available, without any
                warranties:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>No guarantee of accuracy</li>
                <li>No guarantee of uninterrupted service</li>
                <li>No guarantee that displayed gold rates are final rates</li>
              </ul>
            </>
          }
        />

        {/* 9. Third-Party Links */}
        <Section
          number="9"
          title="Third-Party Links"
          content={
            <>
              <p>
                The website may display links or connect you with external
                jewellers.
              </p>
              <p>Gold-Encash is not responsible for:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Their content</li>
                <li>Their policies</li>
                <li>Their behaviour or business decisions</li>
              </ul>
            </>
          }
        />

        {/* 10. Age Requirement */}
        <Section
          number="10"
          title="Age Requirement"
          content={<p>You must be 18 years or older to use this service.</p>}
        />

        {/* 11. Termination of Access */}
        <Section
          number="11"
          title="Termination of Access"
          content={
            <p>
              We may block or terminate your access if you violate these Terms.
            </p>
          }
        />

        {/* 12. Governing Law */}
        <Section
          number="12"
          title="Governing Law"
          content={
            <p>
              These Terms are governed by the laws of India, specifically the
              jurisdiction of Delhi (India).
            </p>
          }
        />

        {/* 13. Changes to Terms */}
        <Section
          number="13"
          title="Changes to Terms"
          content={
            <p>
              We may modify these Terms anytime. Updated terms will be posted on
              the website.
            </p>
          }
        />

        {/* 14. Contact Info */}
        <Section
          number="14"
          title="Contact Information"
          content={
            <>
              <p>If you have questions or concerns, contact us:</p>
              <p className="mt-2">
                <span className="font-semibold">Email:</span> info@goldencash.in
                <br />
                <span className="font-semibold">Phone:</span> +91-9922117866
                <br />
                <span className="font-semibold">Contact Page:</span>{" "}
                www.gold-encash.in/contact
              </p>
            </>
          }
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

export default TermsConditions;
