import { Footer, Navbar } from '../components';
import {  Contact, Projects, About, Hero } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    {/* <div className='relative'>
      <div className='gradient-03 z-0'/>
      <Explore />
    </div> */}
    {/* <div className='relative'> */}
      <About />
      {/* <div className='gradient-04 z-0'/>
      <WhatsNew />
    </div> */}
    {/* <World /> */}
    <div className='relative'>
      {/* <Insights /> */}
      <div className='gradient-04 z-0'/>
      <Projects />
      <Contact/>
    </div>
    <Footer />
  </div>
);

export default Page;
