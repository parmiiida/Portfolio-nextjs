import { Footer, Navbar } from '../components';
import {  Explore, Projects, About, Hero, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    {/* <div className="relative">

      <div className="gradient-03 z-0" />
      <Explore />
    </div> */}
    <div className="relative">
      <About />
      {/* <div className="gradient-04 z-0" />
      <WhatsNew /> */}
    </div>
    <div className="relative">
      {/* <Insights /> */}
      {/* <div className="gradient-04 z-0" /> */}
      <Projects />
    </div>
    <Footer />
  </div>
);

export default Home;
