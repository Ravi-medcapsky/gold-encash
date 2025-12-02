import heroImg from "../assets/heroImg.png";
import React, { useEffect, useState } from "react";
import LiveGoldRate from "./LiveGoldRate";
import EasySteps from "./EasySteps";
import CTABanner from "./CTABanner";
import WhyChooseUs from "./WhyChooseUs";
import NewsletterPopup from "../component/NewsletterPopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup 1 second after page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Newsletter Popup */}
      {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}

      {/* Hero Section */}
      <section>
        <div
          className="
            flex flex-col items-center justify-center text-center gap-6 
            bg-cover bg-center bg-no-repeat w-full
            min-h-[300px]
            sm:min-h-[380px]
            md:min-h-[480px]
            lg:min-h-[550px]
            xl:min-h-[600px]
            px-4 sm:px-6 md:px-10
          "
          style={{
            backgroundImage: `url(${heroImg})`,
          }}>
          {/* hero content */}
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
