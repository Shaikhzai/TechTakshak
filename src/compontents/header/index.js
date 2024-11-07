'use client';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/">LOGO</Link>
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    <p className={styles.shop}>Events</p>
                    <div className={styles.el}>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="10" r="8" stroke="#4D3D30" strokeWidth="1.5" />
                        <line x1="9.5" y1="10" x2="9.5" y2="5.5" stroke="#4D3D30" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="9.5" y1="10" x2="13" y2="10" stroke="#4D3D30" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <p>Timline</p>
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