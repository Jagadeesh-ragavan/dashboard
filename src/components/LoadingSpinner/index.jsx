import React from 'react';
import styles from './index.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
 )
}

export default LoadingSpinner;