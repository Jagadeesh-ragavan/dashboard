import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../services/api';
import styles from './index.module.css';
import LoadingSpinner from '../LoadingSpinner';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsersResponse = await getData('users');
        setAllUsers(allUsersResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.userContainer}>
      <h2>Users Information</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.userCardContainer}>
          {allUsers.map(user => (
            <div key={user.id} className={styles.userCard}>
              <h3>{user.name}</h3>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}{' '}
                {user.address.zipcode}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
              <p>{user.company.catchPhrase}</p>
              <p>
                <strong>Business:</strong> {user.company.bs}
              </p>
              <Link to={`/user/${user.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;