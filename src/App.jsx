import React from "react";
import SmoothScrollWrapper from "./components/LenisJS/SmoothScrollWrapper.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Problems from "./components/Problems/Problems.jsx";
import Solution from "./components/Solution/Solution.jsx";
import Analyze from "./components/Analyze/Analyze.jsx";
import Process from "./components/Process/Process.jsx";
import Features from "./components/Features/Feature.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";

function App() {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <>
        <HeroSection />
        <Problems />
        <Solution />
        <Analyze />
        <Process />
        {/* <Features /> */}
        <Testimonials />
        <Pricing />
        <NewsLetter />
        <Faq />
        <Footer />
      </>
    </SmoothScrollWrapper>
  );
}

export default App;
