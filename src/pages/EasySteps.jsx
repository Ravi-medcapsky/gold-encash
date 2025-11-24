import React from "react";

function EasySteps() {
  const steps = [
    {
      num: "1",
      title: "Get a Quote",
      desc: "Use our calculator for a quick estimate of your gold's worth.",
    },
    {
      num: "2",
      title: "Secure Pickup/Visit",
      desc: "Schedule a secure, insured pickup or visit one of our centers.",
    },
    {
      num: "3",
      title: "Get Paid Instantly",
      desc: "Receive your payment instantly upon final valuation.",
    },
  ];

  return (
    <section className="py-16 px-14 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[#1e3a5f] text-3xl font-bold tracking-tight">
          Sell Gold in 3 Easy Steps
        </h2>
        <p className="text-[#1e3a5f] opacity-75 mt-2 max-w-2xl mx-auto">
          Our streamlined process makes selling your gold effortless and fast.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            {/* Step Card */}
            <div className="flex-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 flex items-center justify-center 
              text-[#D4AF37] font-extrabold text-2xl mb-4 border border-[#D4AF37]">
                {step.num}
              </div>

              <h3 className="text-[#1e3a5f] text-lg font-bold">{step.title}</h3>
              <p className="text-[#1e3a5f] opacity-75 text-sm mt-2">
                {step.desc}
              </p>
            </div>

            {/* Connector line */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block h-1 w-20 bg-[#D4AF37] rounded-md"></div>
            )}
            {idx < steps.length - 1 && (
              <div className="md:hidden w-1 h-12 bg-[#D4AF37] rounded-md"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default EasySteps;
