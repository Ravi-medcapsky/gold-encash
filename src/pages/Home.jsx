import heroImg from "../assets/heroImg.png";
import React from "react";
import LiveGoldRate from "./LiveGoldRate";
import EasySteps from "./EasySteps";
import CTABanner from "./CTABanner";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section  */}
      <section>
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center text-center justify-center"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}>
          {/* <div className="flex flex-col gap-4 max-w-2xl">
                  <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
                    Check Live Gold Rate. Sell Your Gold in Seconds.
                  </h1>
                  <h2 className="text-gray-100 text-base sm:text-lg font-light">
                    Powered by real-time IBJA data. Instant cash, secure process.
                  </h2>
                </div> */}

          {/* <div className="flex gap-4 flex-wrap mt-6">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#D4AF37] text-[#1e3a5f] text-base font-bold hover:opacity-90 transition">
                    <span className="truncate">Check Today's Rate</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#1e3a5f] text-white text-base font-bold hover:bg-[#244a7b] transition">
                    <span className="truncate">Sell Now</span>
                  </button>
                </div> */}
        </div>
      </section>

      <LiveGoldRate />
      <EasySteps />
      <CTABanner />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
