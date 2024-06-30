'use client';

import React, { useState, useEffect } from 'react';
import styles from "../styles";
import ProjectCard from "../components/ProjectCard";
import ProjectCard2 from "../components/ProjectCard2";
import { projects } from "../constants";

const Projects = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      {isLargeScreen ? <ProjectCard2 projects={projects} /> : <ProjectCard />}
      <div className={`${styles.innerWidth} flex mx-auto gap-5 lg:leading-[150px] md:leading-[60px] sm:leading-[74.4px] leading-[74.4px]`}>
        <div className={`${styles.innerWidth} flex-col flex items-center justify-center`}>
          <p className="lg:text-[30px] sm:text-[17px] text-[27px] md:text-[33px] mx-auto text-white sm:h-[20]">
            Click for more projects
          </p>
          <a
            href="https://github.com/parmiiida" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#604b75] hover:bg-[#554168] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;







