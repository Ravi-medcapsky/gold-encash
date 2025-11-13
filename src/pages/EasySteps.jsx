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
    <section className="py-16 px-14">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold tracking-tight">
          Sell Gold in 3 Easy Steps
        </h2>
        <p className="text-[#E0E0E0] mt-2 max-w-2xl mx-auto">
          Our streamlined process makes selling your gold effortless and fast.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold text-2xl mb-4">
                {step.num}
              </div>
              <h3 className="text-white text-lg font-bold">{step.title}</h3>
              <p className="text-[#E0E0E0] text-sm mt-2">{step.desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex-1 h-px md:h-auto md:w-px bg-[#3a3727] w-full md:flex-grow"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default EasySteps;
