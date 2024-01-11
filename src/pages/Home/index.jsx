import React from 'react';
import styles from './index.module.css'
import { Banner, Widget } from '../../components';


const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.homeContainer}>
          <Banner />
          <Widget />
        </div>
    </div>
  )
}

export default Home;