'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {  staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} mx-[70px] sm:pl-16 pl-6`}>


    <motion.div variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once :false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className='flex justify-center items-start flex-col relative z-10'>

      <motion.h1
        variants={textVariant(0.05)}
        className='text-[15px] sm:text-[17] lg:text-[30px] md:text-[20px] lg:leading-[158.4px] md:leading-[124.4px] sm:leading-[94.4px] leading-[104.4px]  text-[#8892b0] sm:h-[30] h-[60px]'>
          Hi, My name is
        </motion.h1>

        <motion.h1
        variants={textVariant(0.1)}
        className={`${styles.heroHeading} h-[60px] `}>
          Parmida shoeibzade.
        </motion.h1>

        <motion.div
        variants={textVariant(0.2)}
        className='flex flex-row justify-center pb-50'>
          <h1 className={`${styles.heroHeading} text-[#818ba8]`}>I build wonderful websites</h1>
        </motion.div>

      </div>

      <div className='flex-1 max-w-[700px] font-normal text-[18px] text-[#B0B0B0] leading-[30px]'>
      I am a skilled frontend developer who has come through the development journey by myself, driven by my love and patience for creating wonderful websites.
      I am open to every idea that can lead to wonderful websites, challenge my knowledge and ability, and help me improve day by day.
      </div>

    </motion.div>
  </section>
);

export default Hero;
