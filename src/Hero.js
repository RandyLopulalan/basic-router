import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, ErrorPage, Footer, Header, Home, Profile } from "./Pages";

const Hero = () => {
  const [username, setUsername] = useState()
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home setUsername={setUsername}/>} />
        <Route path="/about/:id" element={<About username={username}/>} />
        <Route path="/profile/:id" element={<Profile username={username}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Hero;
