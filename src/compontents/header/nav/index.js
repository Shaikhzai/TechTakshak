'use client';
import styles from './style.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "2.png"
  },
  {
    title: "Events",
    href: "/eventlist",
    src: "1.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "qrcode.png"
  },
  {
    title: "Regester",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeBQ-B3KzTAtPIPn3oXv8j5e7eTuiHlLbLpQjqf9hemrYKUUw/viewform",
    src: "register.png"
  },
]

export default function Index({ setIsActive }) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} alt="imgaltBackground Image"/>

      </div>
    </motion.div>
  )
}