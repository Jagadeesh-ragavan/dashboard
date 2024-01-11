import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../services/api';
import styles from './userInfo.module.css'
import Posts from '../Posts';

const UserInfo = () => {
    const [userData, setUserData] = useState({});
    const { userId } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userResponse = await getData(`/users/${userId}`);
          setUserData(userResponse);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, [userId]);
  
    return (
      <>
        <div className={styles.userInfoContainer}>
            <h2>User Details</h2>
            <div className={styles.detail}>
                <p>ID:</p>
                <p>{userData.id}</p>
            </div>
            <div className={styles.detail}>
                <p>Name:</p>
                <p>{userData.name}</p>
            </div>
            <div className={styles.detail}>
                <p>Email:</p>
                <p>{userData.email}</p>
            </div>
            <div className={styles.detail}>
                <p>Username:</p>
                <p>{userData.username}</p>
            </div>
        </div>
        <Posts userId={userId} />
      </>
    );
}

export default UserInfo;