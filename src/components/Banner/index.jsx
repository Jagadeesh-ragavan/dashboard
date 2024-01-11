import React from 'react';
import styles from './index.module.css'

const Banner = () => {

  return (
    <div className={styles.bannerContainer}>
        <div className={styles.content}>
            <p>The purpose of a product update is to add new features, fix bugs or improve the performance of the product.</p>
        </div>
    </div>
  );
};

export default Banner;
