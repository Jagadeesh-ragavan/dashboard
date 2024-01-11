import React, { useEffect, useState } from 'react';
import { getData } from '../../services/api';
import { Bar, Pie   } from 'react-chartjs-2'; 
import styles from './index.module.css'
import "chart.js/auto";

const Widget = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalTodos, setTotalTodos] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getData('posts');
        const comments = await getData('comments');
        const todos = await getData('todos');
        const users = await getData('users');

        setTotalPosts(posts.length);
        setTotalComments(comments.length);
        setTotalTodos(todos.length);
        setTotalUsers(users.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ['Total Users', 'Total Posts', 'Total Comments', 'Total Todos'],
    datasets: [
      {
        label: 'Counts',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [totalUsers, totalPosts, totalComments, totalTodos],
      },
    ],
  };

  const pieChartData = {
    labels: ['Total Users', 'Total Posts', 'Total Comments', 'Total Todos'],
    datasets: [
      {
        label: 'Counts',
        backgroundColor: [
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 205, 86, 0.4)',
          'rgba(54, 162, 235, 0.4)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(54, 162, 235, 0.8)',
        ],
        hoverBorderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        data: [totalUsers, totalPosts, totalComments, totalTodos],
      },
    ],
  };

  return (
    <div className={styles.dashboard}>
      <h1>Statistics</h1>
      <div className={styles.dashboardWidgets}>
        <ul>
          <li>
            <h4 className={styles.widgetTitle}>Total users</h4>
            <p className={styles.widgetValue}>{totalUsers}</p>
          </li>
          <li>
            <h4 className={styles.widgetTitle}>Total posts</h4>
            <p className={styles.widgetValue}>{totalPosts}</p>
          </li>
          <li>
            <h4 className={styles.widgetTitle}>Total comments</h4>
            <p className={styles.widgetValue}>{totalComments}</p>
          </li>
          <li>
            <h4 className={styles.widgetTitle}>Total todos</h4>
            <p className={styles.widgetValue}>{totalTodos}</p>
          </li>
        </ul>
       <div className={styles.chartContainer}>
        <div className={styles.barChart}>
          <Bar data={chartData} />
        </div>
        <div className={styles.pieChart}>
          <Pie  data={pieChartData} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Widget;