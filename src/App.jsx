import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import ContactUs from "./pages/ContactUs";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import SellGold from "./pages/SellGold";
import AboutPage from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/sellGold" element={<SellGold />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route
          path="/refundcancellationpolicy"
          element={<RefundCancellationPolicy />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
