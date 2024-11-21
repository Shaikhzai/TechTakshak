'use client';
import styles from './style.module.scss';

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

{/* add here on */}
    </main>
  );
}
