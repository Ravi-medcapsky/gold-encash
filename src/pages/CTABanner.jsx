function CTABanner() {
  return (
    <section className="py-16 bg-white">
      <div className="bg-[#1e3a5f] rounded-xl p-8 sm:p-12 text-center flex flex-col items-center border border-[#D4AF37] shadow-lg">
        
        <h2 className="text-white text-3xl font-bold">
          Ready to Sell Your Gold?
        </h2>

        <p className="text-white/80 mt-3 mb-6 max-w-lg">
          Unlock the true value of your gold today with a partner you can trust.
          Get a fair, transparent quote in minutes.
        </p>

        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#D4AF37] text-[#1e3a5f] text-base font-bold tracking-wide hover:opacity-90 transition">
          <span className="truncate">Get Instant Quote</span>
        </button>
      </div>
    </section>
  );
}

export default CTABanner;
