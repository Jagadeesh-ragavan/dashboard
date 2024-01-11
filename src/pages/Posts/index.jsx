import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePost, getData } from '../../services/api';
import styles from './index.module.css';
import LoadingSpinner from '../../components/LoadingSpinner';

const Posts = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPostsResponse = await getData(`posts/?userId=${userId}`);
        setUserPosts(userPostsResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      const updatedPosts = userPosts.filter((post) => post.id !== postId);
      alert('Post Deleted Successfully')
      setUserPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className={styles.postInfo}>
      <h2>Post Information</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userPosts.map((post,index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </td>
                <td className={styles.postButtons}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default Posts;