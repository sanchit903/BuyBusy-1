import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.HomePage_Container}>
      <form className={styles.HomePage_form}>
        <input type="text" className={styles.HomePage_searchInput} placeholder="Search By Name" />
      </form>
    </div>
  )
}

export default Home