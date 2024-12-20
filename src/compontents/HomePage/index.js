'use client';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/Vidz.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.content}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <Image 
            src="/images/final_logo.png" 
            alt="Tech Takshak 2024 Logo" 
            width={200} 
            height={200} 
            priority 
          />
        </div>

        {/* Text Section */}
        <div className={styles.textContainer}>
          <p>
            Welcome to the most awaited tech fest of the year! Explore our{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBQ-B3KzTAtPIPn3oXv8j5e7eTuiHlLbLpQjqf9hemrYKUUw/viewform">
              events
            </a>{' '}
            and create unforgettable memories.
          </p>
          {/* Animated Button */}
{/*           <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBQ-B3KzTAtPIPn3oXv8j5e7eTuiHlLbLpQjqf9hemrYKUUw/viewform" target='_blank' className={styles.animatedButton}>
            Register Now
          </a> */}
        </div>
      </div>
    </main>
  );
}
