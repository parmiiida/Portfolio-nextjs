'use client';


import styles from '../styles';
import{ listItems } from '../constants'

const About= () => (
  <section className={`${styles.paddings} md:mx-15 lg:mx-32 relative z-10`} id='about'>

    <div className={`flex ${styles.innerWidth} mx-auto gap-5 lg:leading-[150px] md:leading-[60px] sm:leading-[74.4px] leading-[50px]`}>
      <div className=" flex gap-4 ">
        <span className='lg:text-[30px] text-bold font-bold sm:text-[17px] text-[23px]  mx-auto  text-[#8892b0] sm:h-[20]'>02.  </span>
        <p className="flex flex-1 lg:text-[35px] sm:text-[20px] text-[30px] mx-auto md:text-[33px]  text-white sm:h-[30] ">
          About Me
        </p>
      </div>

      <div className="h-[1px] sm:w-80 w-40 mt-20 hide bg-[#8892b0]"/>
    </div>

    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
      <div
       className='flex-[0.72] flex justify-center flex-col'>
        <div className='flex flex-col sm:ml-[45px] ml-[12px] max-w-[750px] gap-[24px]'>
          <p className='flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[30px]'>
          Hello! My name is <span className='text-[#8892b0]'>Parmida</span> , and I enjoy creating things that live on the internet and showcase my creativity. My interest in web development started back in <span className='text-[#8892b0]'>2022</span> when I found some websites boring,
          so I decided to recreate and decorate them on my own. Of course, I had no knowledge at the time, so I started learning <span className='text-[#8892b0]'>HTML & CSS</span>!
          </p>
          <p className='flex-1  font-normal text-[18px] text-[#B0B0B0] leading-[30px]'>
          Fast-forward to today, I have learned <span className='text-[#8892b0]'>JavaScript</span> and its libraries and frameworks. I have completed many projects using them and also have knowledge about <span className='text-[#8892b0]'>middleware </span>and <span className='text-[#8892b0]'>RESTful</span> APIs.
           You can find more details about my projects in the third section and about the places I have worked in my resume, which you can download from the navbar.
          </p>
          <p  className='flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[30px]'>Here are a few <span className='text-[#8892b0]'>technologies</span> I’ve been working with recently:</p>
        </div>
        <div className='max-w-[300px] flex flex-col flex-1 items-center font-normal mt-7 mx-[26px]  text-[#B0B0B0]'>
          <ul className='list-disc grid sm:ml-[35px] grid-cols-3 gap-x-9  gap-y-2'>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </section>
);

export default About;
