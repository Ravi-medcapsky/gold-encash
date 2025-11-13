function CTABanner() {
  return (
    <section className="py-16">
      <div className="bg-yellow-400/20 rounded-xl p-8 sm:p-12 text-center flex flex-col items-center border border-yellow-400/30">
        <h2 className="text-white text-3xl font-bold">
          Ready to Sell Your Gold?
        </h2>
        <p className="text-[#F5F5F5] mt-2 mb-6 max-w-lg">
          Unlock the true value of your gold today with a partner you can trust.
          Get a fair, transparent quote in minutes.
        </p>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-yellow-400 text-gray-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-yellow-300 transition">
          <span className="truncate">Get Instant Quote</span>
        </button>
      </div>
    </section>
  );
}

export default CTABanner;
