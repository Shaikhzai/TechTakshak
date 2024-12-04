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
    title: "Find Us",
    href: "https://www.google.com/maps/dir//KNS+Institute+of+Technology+Hegde+Nagar,+Kogilu+Road,+Yelahanka+Hobli,+Thirumenahalli,+Bengaluru,+Karnataka+560064/@13.0891413,77.5535456,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae16773c548eed:0xcd4b729be0f2d120!2m2!1d77.6359475!2d13.0891544?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D",
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