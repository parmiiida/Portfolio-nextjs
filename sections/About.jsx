'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components'
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'
import Image from 'next/image';

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className='gradient-02 z-0 px-6'/>

    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once : false ,amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex flex-col `}
    >
      <div className='px-20'>
          <Image src='/people-01.png' alt='profile' width={80} height={80}/>
        </div>
      <TypingText
          title='| About Me'
          textStyles='text-center'/>
      <div className='px-20 flex-col flex'>

        <motion.p
          variants={fadeIn('up' ,'tween' ,0.2 ,1)}
          className='mt-[8px] px-10 py-10  text-[20px] text-left text-secondary-white'>
        <span className='font-bold text-white'>I am </span>
          Self-trained Web Developer on a dynamic learning journey for the past 2 years. My unique advantage lies in
          my relentless pursuit of knowledge—I thrive on staying updated and relevant in the ever-evolving world of web
          development.
          Constantly seeking opportunities to expand my skill set, I embrace challenges and dive into learning new
          technologies and methodologies. Fearlessly curious and dedicated to improvement, I believe in the power of selfdriven education
          <span className='font-bold text-white'> Madness of metaverse </span>
            of today, using only
          <span className='font-bold text-white'> VR </span>
            devices you can easily explore the metaverse world you want,
          turn your dreams into reality. Let's
          <span className='font-bold text-white' > explore </span>
            the madness of the metaverse by scrolling down
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once : false ,amount: 0.25}}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col flex-1 relative`}
        >

      </motion.div>
        </div>
        <motion.img
        variants={fadeIn('up' ,'tween' ,0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'/>
      </motion.div>


  </section>
);

export default About;
