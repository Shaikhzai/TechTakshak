import styles from './style.module.scss'
import { projects } from './data';
import Image from 'next/image';
import Double from '../../compontents/eventComp/Double';

export default function Home() {
  return (
    <div className={styles.main}>
     <br></br><br></br> <h1 className='body'>EventList</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
      </div>
    </div>
  )
}
