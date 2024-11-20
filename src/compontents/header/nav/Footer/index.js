import styles from './style.module.scss';
import { translate } from '../../anim';
import { color, motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit"
                    className={styles.devs}>
                    <span>Made by:</span> <a target="_blank" href='https://linktr.ee/voidzai' >VoidZai</a> & <a target="_blank" href='https://muzzammilafridi.github.io/Internalpha2/'>Muzzammil</a>
                </motion.li>
            </ul>
{/*             <ul>
                <motion.li  
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Typography:</span> Google Fonts
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Images:</span> Freepik, Envato
                </motion.li>
            </ul> */}
            <ul>
{/*                 <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Privacy Policy
                </motion.li> */}
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Terms & Conditions
                </motion.li>
            </ul>
        </div>
    )
}