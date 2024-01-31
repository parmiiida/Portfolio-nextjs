'use client';

import { motion ,useScroll ,useMotionValueEvent} from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { navItems } from '../constants';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  const [hidden, setHidden] = useState(false)
  const {scrollY} = useScroll()
  useMotionValueEvent(scrollY, "change" ,(latest) => {
    const previous = scrollY.getPrevious();
    // if latest value be greater than previous value it means that we are scrolling down
    if (latest > previous){
      setHidden(true)
    }else{
      setHidden(false)
    }
  })

  return(
    <motion.nav
      variants={{
        visible:{ y:0 },
        hidden:{ y:"-100%" }

      }}
      className={`${styles.xPaddings} py-8 relative translateY(-100%)`}
      animate={hidden ? "hidden" : "visible"}
      transition={{duration: 0.35, ease:"easeInOut"}}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />

        <ul className="lg:flex gap-5 text-1xl text-white hidden">
          {navItems.map((item ) => (
            <li key={item.title}
              className='"w-[24px] h-[24px] object-contain'>
                <Link href='/'>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Image src='/menu.svg' alt="menu" width={32} height={32} className="inline-block lg:hidden cursor-pointer"/>
      </div>
    </motion.nav>
  )};

export default Navbar;

