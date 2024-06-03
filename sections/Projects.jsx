'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer,zoomIn } from "../utils/motion";

const Projects = () => (

  <section className={`${styles.paddings} md:mx-15 lg:mx-32 relative z-10 `}>

    <div className={`${styles.innerWidth} flex mx-auto gap-5 lg:leading-[150px] md:leading-[60px] sm:leading-[74.4px] leading-[74.4px]`}>

      <div className=" flex gap-4 ">
        <span className='lg:text-[30px] text-bold font-bold sm:text-[17px] text-[23px]  mx-auto  text-[#8892b0] sm:h-[20]'>03.  </span>
        <p className="flex flex-1 lg:text-[35px] sm:text-[20px] text-[30px] md:text-[33px] mx-auto  text-white sm:h-[30] ">
          Some things I have built
        </p>
      </div>

      <div className="h-[1px] sm:w-80 w-40 mt-20 hide bg-[#8892b0]"/>

    </div>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: 'false' ,amount: 0.25}}
      className={`${styles.innerWidth} mx-auto 9 flex flex-col lg:flex-row `}
    >

      <motion.div
        variants={fadeIn('right' ,'tween' , 0.2 ,1)}
        className="flex-[1.5] lg:w-[300px] h-[350px] flex justify-center flex-col gradient-05 rounded-[12px]
        border-[#6a6a6a] relative hide ">
          <div className="feedback-gradient"/>

          <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full h-full object-cover rounded-[12px]"
          />

      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween' ,0.2 ,1)}
        className="relative flex-1 flex-col flex  lg:h-[50%] h-full w-full lg:-left-14
         background-opacity ">

        <div className="">
          <h4 className="font-bold sm:text-[42px] text-[26px] sm:leading-[40px] mb-5 leading-[36px] lg:text-right  text-white">
            Samantha
          </h4>
          {/* <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] lg:text-right  text-white">
            Founder | Metaversus
          </p> */}
        </div>
        <div className="bg-[#292f3f]">
        <p className="mt-[4px] rounded-[3px] text-right px-5 font-normal sm:text-[15px] text-[12px] sm:leading-[40px] leading-[39px] text-[#B0B0B0]">
          “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 3.0. by using
          metaverse you can use it as anything lsekjflzk.fnja:OEfj/JefEjfh
          aeilufa/e'pOQWDKOJEHFGHDJKSLPA;SPLDOKFJHJDKSLDKFJHJDK”
        </p>
        </div>

        <div className="flex text-[#B0B0B0]">
          <ul className="flex flex-1 text-[15px] justify-end mx-5 my-5 space-x-5">
            <li>API</li>
            <li>Data Fetching</li>
            <li>Designed components</li>
          </ul>
        </div>

        <div className=" w-10 h-10 rounded-full flex justify-end ml-auto cursor-pointer">
        <img
          src="/github.png"
          alt="github"
          className="w-full h-full object-contain"
          />
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default Projects;


{/* <motion.div
variants={staggerContainer}
initial='hidden'
 whileInView='show'
 viewport={{once: 'false' ,amount: 0.25}}
className={`${styles.innerWidth}flex flex-row lg:text-[35px]  sm:text-[20px] text-[35px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] mx-auto  text-[#8892b0] sm:h-[30] `}>
 <div className="h-[0.75px] sm:w-80 w-40 bg-[#915eff] flex flex-1 mx-auto"/>
 <p className="flex flex-1">some things ive built</p> */}

{/* </motion.div> */}


