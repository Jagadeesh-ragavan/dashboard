import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData , updatePost } from '../../services/api';
import styles from './index.module.css'
import LoadingSpinner from '../../components/LoadingSpinner';

const PostInfo = () => {
  const [post, setPost] = useState({});
  const [editedBody, setEditedBody] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const { postId } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const singlePost = await getData(`/posts/${postId}`);
        setPost(singlePost);
        setLoading(false);
        setEditedBody(singlePost.body); 
      } catch (error) {
        console.error('Error fetching post details:', error);
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleBodyChange = (event) => {
    setEditedBody(event.target.value);
  };

  const handleSaveBody = async () => {
    try {
      await updatePost(postId, { body: editedBody });
      alert('Body saved successfully!');
      setIsEditing(false)
    } catch (error) {
      console.error('Error saving post body:', error);
    }
  };

  return (
    <div className={styles.postInfo}>
      <h2>Post Details</h2>
      { loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className={styles.postTitle}>
            <h4>{post.title}</h4>
            {!isEditing && 
            <span onClick={handleEditToggle}>
              <img src='/images/edit.svg' alt="edit" />
            </span>
            }

          </div>

          {isEditing ? (
            <div className={styles.postBody}>
              <textarea value={editedBody} onChange={handleBodyChange} />
            </div>
          ) : (
            <p>{post.body}</p>
          )}
          {isEditing &&<div className={styles.button}>
            <button onClick={handleEditToggle} className={styles.editBtn}>Cancel</button>
            <button onClick={handleSaveBody} className={styles.saveBtn}>Save</button>
          </div>}
        </> 
      )}

    </div>
  );
};

export default PostInfo;
