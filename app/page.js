import { Footer, Navbar } from '../components';
import {  Contact, Projects, About, Hero } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <div>
    <Hero />
      <About />
    <div className='relative'>
      <div className='gradient-04 z-0'/>
      <Projects />
      <Contact/>
    </div>
    <Footer />
    </div>

  </div>
);

export default Page;
