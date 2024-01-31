'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn,  staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>

    <motion.div variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once :false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className='flex justify-center items-start flex-col relative z-10'>

      <motion.h1
        variants={textVariant(1.05)}
        className=' lg:text-[30px] md:text-[20px] sm:text-[15px] text-[30px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px]  text-[#8892b0] sm:h-[30] h-[60px]'>
          Hi, I'm
        </motion.h1>

        <motion.h1
        variants={textVariant(1.1)}
        className={`${styles.heroHeading} h-[60px] `}>
          Parmida shoeibzade.
        </motion.h1>

        <motion.div
        variants={textVariant(1.2)}
        className='flex flex-row justify-center pb-50'>
          <h1 className={`${styles.heroHeading} text-[#8892b0]`}>I build wonderful websites</h1>
        </motion.div>

      </div>

      {/* <motion.div
      variants={slideIn('right', 'tween', 0.2 ,1 )}
      className='relative w-full md:-mt-[20px] -mt-[12px]'>

        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]'/>

          <img
          src='/cover.png'
          alt='cover'
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'/>

          <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
              <img src='/stamp.png'
              alt='stamp'
              className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'/>
            </div>
          </a>

      </motion.div> */}
    </motion.div>
  </section>
);

export default Hero;
