import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/sections/Hero';
import WhyUs from '../components/sections/WhyUs';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Booking from '../components/sections/Booking';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Portfolio />
      <Booking />
      <Footer />
    </>
  );
};

export default Home;