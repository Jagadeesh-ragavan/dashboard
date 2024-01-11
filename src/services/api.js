import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getData = async ( endpoint ) => {
  const url = `${BASE_URL}/${endpoint}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const deletePost = async (postId) => {
  const url = `${BASE_URL}/posts/${postId}`;
  try {
    const response = await axios.delete(url);

    if (response.status !== 200) {
      throw new Error('Failed to delete post');
    }

    console.log('Post deleted successfully');
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

export const updatePost = async (postId, updatedData) => {
  const url = `${BASE_URL}/posts/${postId}`;
  try {
    const response = await axios.put(url, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};