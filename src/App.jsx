// // import React, { useState } from "react";

// export default function App() {
//   return (
//     <div className="dark">
//       <div className="bg-[#111111] text-[#E0E0E0] font-display min-h-screen">
//         <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
//           <div className="layout-container flex h-full grow flex-col">
//             <div className="flex flex-1 justify-center py-5">
//               <div className="layout-content-container flex w-full flex-col max-w-5xl px-4">
//                 <Header />
//                 <main className="flex-grow">
//                   <HeroSection />
//                   <LiveGoldRate />
//                   <WhyChooseUs />
//                   <EasySteps />
//                   <CTABanner />
//                 </main>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Header from "./component/Header";
import HeroSection from "./pages/HeroSection";
import LiveGoldRate from "./pages/LiveGoldRate";
import EasySteps from "./pages/EasySteps";
import CTABanner from "./pages/CTABanner";
import WhyChooseUs from "./pages/WhyChooseUs";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <LiveGoldRate />
      <EasySteps />
      <CTABanner />
      <WhyChooseUs />
    </div>
  );
};

export default App;
