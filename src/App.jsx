import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { Faq } from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
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
              </>
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/newsletter" element={<NewsLetter />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
