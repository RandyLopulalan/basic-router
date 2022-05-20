import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, ErrorPage, Footer, Header, Home, Profile } from "./Pages";

const Hero = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/" element={<Profile />} />

        {/* profile/randy */}
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Hero;
