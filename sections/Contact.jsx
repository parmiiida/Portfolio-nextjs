'use client'

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles';

const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log('Rendering Contact');

  return (
    <section className={`${styles.paddings} relative z-10`}>
      {isClient && <ContactForm />}
    </section>
  );
};

export default Contact;
