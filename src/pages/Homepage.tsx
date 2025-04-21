import React from 'react';
import Navbar from '@/components/intro/Navbar';
import HeroSection from '@/components/intro/Herosection';
import WelcomeSection from '@/components/intro/WelcomeSection';
import "../style/Homepage.css"
const Homepage = () => {
  return (
    <div className="Homepage ">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
    </div>
  );
};

export default Homepage;
