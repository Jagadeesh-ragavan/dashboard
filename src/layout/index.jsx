import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.css';

export default function RootLayout() {
  const [isSideLayoutOpen, setIsSideLayoutOpen] = useState(false);

  const handleToggleSideLayout = () => {
    setIsSideLayoutOpen(!isSideLayoutOpen);
  };

  return (
    <div className={styles.rootLayout}>
      <header>
        <div className={styles.profileLinks}>
          <span>
            <img src='/images/profile.svg' alt="profile" /> Hi Jaga
          </span>
        </div>
      </header>
      <div className={styles.hamburgerMenu}>
          <div className={`${styles.menubar} ${isSideLayoutOpen ? styles.sideLayoutOpen : ''}`} onClick={handleToggleSideLayout}>
            <img src='/images/hamburgermenu.svg' alt="hamburgerIcon" />
          </div>
          <div className={`${styles.close} ${isSideLayoutOpen ? styles.sideLayoutOpen : ''}`} onClick={handleToggleSideLayout}>
            <img src='/images/close.svg' alt="close" />
          </div>
      </div>
      <div className={`${styles.sideLayout} ${isSideLayoutOpen ? styles.sideLayoutOpen : ''}`}>
          <h3>Dashboard</h3>
          <nav onClick={handleToggleSideLayout}>
            <NavLink to="/">
              <img src='/images/home.svg' alt="Home" /> Home
            </NavLink>
            <NavLink to="users">
              <img src='/images/users.svg' alt="Users" /> Users
            </NavLink>
          </nav>
      </div>
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
    </div>
  )
}
