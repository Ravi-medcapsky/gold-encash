function WhyChooseUs() {
  const features = [
    {
      icon: "💳",
      title: "Instant Payment",
      desc: "Get cash in your account immediately after valuation.",
    },
    {
      icon: "✓",
      title: "100% Secure Process",
      desc: "Your assets are handled with the utmost security and care.",
    },
    {
      icon: "⚖️",
      title: "Accurate Valuation",
      desc: "We use certified technology for precise purity checks.",
    },
    {
      icon: "📊",
      title: "Transparent Pricing",
      desc: "No hidden fees. Get the best value based on live rates.",
    },
  ];

  return (
    <section className="py-16 px-14">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold tracking-tight">
          Why Choose Gold-Encash
        </h2>
        <p className="text-[#E0E0E0] mt-2 max-w-2xl mx-auto">
          Experience a seamless, secure, and rewarding way to sell your gold.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#23200f] border border-[#3a3727] p-8 rounded-xl text-center flex flex-col items-center hover:border-yellow-400/50 transition">
            <div className="bg-yellow-400/20 p-3 rounded-full mb-4 text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-white text-lg font-bold">{feature.title}</h3>
            <p className="text-[#E0E0E0] text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
