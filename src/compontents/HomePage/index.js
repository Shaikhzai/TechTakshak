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

      {/* Section content */}
      <section className={styles.white}>
        <header className={styles.header}></header>
        <div className={styles.wrap}>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            debitis quia quae error porro{' '}
            <a href="#" data-text="reprehenderit!" className={styles.a}>
              reprehenderit!
            </a>{' '}
            Alias nostrum esse officia nesciunt accusantium earum vitae in
            excepturi saepe magni, distinctio dignissimos recusandae.
          </div>
        </div>
      </section>
    </main>
  );
}
