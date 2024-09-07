'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import styles from '../styles';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure the path to your resume is correct
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth}  mx-auto flex justify-between gap-8`}>
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          offset={-80} // Adjust this value to match the height of your navbar
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* <Image src="/logoo.svg" alt="search" width={54} height={24} className="object-contain" /> */}
        </ScrollLink>
        <div className="flex flex-row gap-10">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80} // Adjust this value to match the height of your navbar
            className="text-white hover:text-[#818ba8] text-[18px] font-medium cursor-pointer"
          >
            Contact
          </ScrollLink>
          <button onClick={handleDownload} className="text-white hover:text-[#818ba8] text-[18px] font-medium cursor-pointer">
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
