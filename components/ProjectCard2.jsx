'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { projects } from "../constants";
import Image from "next/image";


const ProjectCard2 = () => {
  return (
    <section className={`lg:mx-32 relative z-10`}>
      <div className={`${styles.innerWidth} flex mx-auto gap-5 lg:leading-[150px] md:leading-[60px] sm:leading-[74.4px] leading-[74.4px]`}>
        <div className="flex gap-4">
          <span className='lg:text-[30px] text-bold font-bold sm:text-[17px] text-[23px] mx-auto text-[#8892b0] sm:h-[20]'>03.</span>
          <p className="flex flex-1 lg:text-[35px] sm:text-[20px] text-[30px] md:text-[33px] mx-auto text-white sm:h-[30]">
            Some things I have built
          </p>
        </div>
        <div className="h-[1px] sm:w-80 w-40 mt-20 hide bg-[#8892b0]" />
      </div>
      <div className="mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex py-12 flex-1 flex-row`}
          >
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="flex-[1.5] flex justify-center flex-col rounded-[12px] border-[#6a6a6a] relative"
            >
              <div className="feedback-gradient" />
              <img
                src={project.image}
                alt={project.title}
                className="w-[500px] h-[350px] object-cover ml-28 border-none rounded-[6px] z-1"
              />
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className={`relative flex-1 flex-col flex h-[30px] w-full -left-44`}
            >
              <div>
                <h4 className="font-bold sm:text-[42px] text-[26px] sm:leading-[40px] mb-5 leading-[36px] lg:text-right text-white">
                  {project.title}
                </h4>
              </div>
              <div className='bg-[#292f3f]'>
                <p className="mt-[4px] rounded-[3px] text-right font-normal text-[15px] leading-[25px] text-[#B0B0B0]">
                  {project.description}
                </p>
              </div>
              <div className="flex text-[#B0B0B0]">
                <ul className="flex flex-1 text-[15px] justify-end mx-5 my-5 space-x-5">
                  {project.techs.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="w-20 h-10 gap-3 rounded-full flex justify-end ml-auto cursor-pointer">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/github.png"
                    alt="github"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/external-link.png"
                    alt="github"
                    className="w-full py-1 h-full object-contain"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard2;
