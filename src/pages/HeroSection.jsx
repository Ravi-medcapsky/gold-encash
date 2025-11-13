function HeroSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="p-0 sm:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center text-center justify-center px-4 py-10"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(255, 217, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDA2e1yozeJhAgphrxPQDeEksktYX_QKEo_Bm4O6W-aT9sO-DKgDM1OMtE8BPqCe2lMajsjXnhds2X-8Pig6tBFIrgVCDwtv3O-X7uDHc9NR0osaChozHx-y6EegR2CioSw-d492f2pr1WNi2qd7h6OXfN_IhTq6f2mylYU6MOkiFRhQE9bgBA5v24gq0gtZUcIZK0IBuaKQNmD9idGagsV7XxFa6l_qJdeoKciLa6YH7gx66wCb4bMB32xHndFZj1jy-vJeAE2yEc")',
          }}>
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl">
              Check Live Gold Rate. Sell Your Gold in Seconds.
            </h1>
            <h2 className="text-[#F5F5F5] text-base font-normal leading-normal sm:text-lg">
              Powered by real-time IBJA data. Instant cash, secure process.
            </h2>
          </div>
          <div className="flex-wrap gap-4 flex mt-4">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-yellow-400 text-gray-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-yellow-300 transition">
              <span className="truncate">Check Today's Rate</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#3a3727] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4737] transition">
              <span className="truncate">Sell Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
