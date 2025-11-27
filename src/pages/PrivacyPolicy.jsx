import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-[#1e3a5f]/20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6 border-b pb-3 border-[#D4AF37]">
          Privacy Policy – Gold-Encash
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-semibold text-[#1e3a5f]">Last Updated:</span>{" "}
          (Add Date)
        </p>

        {/* Company Details */}
        <div className="mb-8 text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold">Company:</span> Carshala Services
            Private Limited
          </p>
          <p>
            <span className="font-semibold">Brand:</span> Gold-Encash
          </p>
          <p>
            <span className="font-semibold">Website:</span> www.gold-encash.in
          </p>
        </div>

        {/* 1. Introduction */}
        <Section
          number="1"
          title="Introduction"
          content={
            <p>
              This Privacy Policy explains how Gold-Encash (“we”, “us”, “our”)
              collects, uses, stores, and protects your personal information. By
              using our website, you agree to this Privacy Policy.
            </p>
          }
        />

        {/* 2. Information We Collect */}
        <Section
          number="2"
          title="Information We Collect"
          content={
            <>
              <p>We may collect the following details from users:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Name</li>
                <li>Phone number</li>
                <li>City or location</li>
                <li>Gold details entered by user (weight, purity, etc.)</li>
                <li>IP address</li>
                <li>Browser information</li>
                <li>Any message submitted through the request form</li>
              </ul>

              <p className="mt-3">We do NOT collect:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Aadhaar</li>
                <li>PAN</li>
                <li>Bank details</li>
                <li>Payment information</li>
                <li>Any sensitive personal data</li>
              </ul>
            </>
          }
        />

        {/* 3. How We Use Your Information */}
        <Section
          number="3"
          title="How We Use Your Information"
          content={
            <>
              <p>We use your information only for:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Sending your gold-selling request to a partnered jeweller
                </li>
                <li>Communicating with you about your request</li>
                <li>Improving website performance</li>
                <li>Showing accurate gold rates</li>
                <li>Customer support</li>
              </ul>

              <p className="mt-3 font-semibold">We DO NOT:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Sell user data</li>
                <li>Share information with marketing agencies</li>
              </ul>

              <p className="mt-2">
                We only forward your details to the jeweller who will contact
                you for your request.
              </p>
            </>
          }
        />

        {/* 4. Third-Party Sharing */}
        <Section
          number="4"
          title="Third-Party Sharing"
          content={
            <>
              <p>Your request details may be shared with:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>A verified jeweller in your area</li>
                <li>Service providers assisting our website operations</li>
              </ul>

              <p className="mt-2">
                We are not responsible for how third-party jewellers use your
                data.
              </p>
            </>
          }
        />

        {/* 5. Cookies */}
        <Section
          number="5"
          title="Cookies"
          content={
            <>
              <p>Our website may use cookies to:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Improve user experience</li>
                <li>Save your session preferences</li>
                <li>Load pages faster</li>
              </ul>

              <p className="mt-2">
                You may disable cookies in your browser settings.
              </p>
            </>
          }
        />

        {/* 6. Data Security */}
        <Section
          number="6"
          title="Data Security"
          content={
            <>
              <p>
                We use reasonable security measures, but no method is 100%
                secure.
              </p>
              <p className="mt-2">We are not responsible for:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Data theft</li>
                <li>Server hacking by external parties</li>
                <li>Data misuse by third-party jewellers</li>
              </ul>
            </>
          }
        />

        {/* 7. Children’s Privacy */}
        <Section
          number="7"
          title="Children’s Privacy"
          content={
            <p>Users under the age of 18 are not allowed to use our service.</p>
          }
        />

        {/* 8. Changes to Policy */}
        <Section
          number="8"
          title="Changes to Policy"
          content={
            <p>
              We may update this Privacy Policy anytime. Changes will be posted
              on this page.
            </p>
          }
        />

        {/* 9. Contact Us */}
        <Section
          number="9"
          title="Contact Us"
          content={
            <>
              <p>If you have privacy-related concerns, contact us:</p>
              <p className="mt-2">
                <span className="font-semibold">Email:</span> info@goldencash.in{" "}
                <br />
                <span className="font-semibold">Phone:</span> +91-9922117866
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

export default PrivacyPolicy;
