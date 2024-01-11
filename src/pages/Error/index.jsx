import { NavLink } from "react-router-dom";
import styles from './index.module.css'

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h2>Page not found!</h2>

      <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
    </div>
  )
}

export default Error;