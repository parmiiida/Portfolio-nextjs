'use client';

import styles from '../styles';
import { projects } from '../constants';

const ProjectCard = () => (
  <section>
    <div className={`${styles.innerWidth} flex mx-auto gap-5 lg:leading-[150px] md:leading-[60px] sm:leading-[74.4px] leading-[74.4px]`}>
      <div className="flex gap-4">
        <span className="lg:text-[30px] text-bold font-bold sm:text-[17px] text-[23px] mx-auto text-[#8892b0] sm:h-[20]">03.</span>
        <p className="flex flex-1 lg:text-[35px] sm:text-[20px] text-[30px] md:text-[33px] mx-auto text-white sm:h-[30]">
          Some things I have built
        </p>
      </div>
    </div>
    <ul className="px-auto">
      {projects.map((project, index) => (
        <li key={index}>
          <div className="relative my-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[450px] object-cover rounded-[12px] z-1"
            />
            <div className="absolute pl-5 pr-5 pb-5 justify-around inset-0 flex flex-col gap-5 bg-black bg-opacity-80 object-cover text-white rounded-[12px]">
              <div>
                <h4 className="font-bold sm:text-[42px] text-left text-[26px] sm:leading-[40px] mb-5 pt-5 leading-[36px] text-white">
                  {project.title}
                </h4>
              </div>
              <div>
                <p className="rounded-[3px] sm:px-5 font-normal sm:text-[18px] text-[16px] sm:leading-[40px] leading-[27px]  text-[#B0B0B0]">
                  {project.description}
                </p>
              </div>
              <div className="flex text-[#B0B0B0]">
                <ul className="flex flex-1 text-[15px] ml-[-15px] sm:mx-5 my-4 space-x-5">
                  {project.techs.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="w-20 h-10 gap-3 rounded-full flex justify-end ml-auto cursor-pointer">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/github.png"
                    alt="github"
                    className="w-full h-full justify-start"
                  />
                </a>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/external-link.png"
                    alt="external link"
                    className="w-full py-1 h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectCard;
