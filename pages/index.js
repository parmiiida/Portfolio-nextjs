import React from 'react';
import { Footer, Navbar } from '../components';
import { Projects, About, Hero, Contact } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <Projects />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Home;
