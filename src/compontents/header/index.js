'use client';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/">TECH TAKSHAK</Link>
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    <div className={styles.el}>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="17" height="18" rx="2" ry="2" stroke="#a183a4" strokeWidth="1.5" fill="none"/>
  
                         <line x1="3" y1="5" x2="16" y2="5" stroke="#a183a4" strokeWidth="1.5" strokeLinecap="round" />
                         <line x1="3" y1="8" x2="14" y2="8" stroke="#a183a4" strokeWidth="1.5" strokeLinecap="round" />
                         <line x1="3" y1="11" x2="16" y2="11" stroke="#a183a4" strokeWidth="1.5" strokeLinecap="round" />
                         <line x1="3" y1="14" x2="12" y2="14" stroke="#a183a4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <Link href="/eventlist">
                    
                    <p className={styles.invisi}>Events</p>
                    </Link>

                    </div>
                </motion.div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}