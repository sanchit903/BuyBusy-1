import React from 'react';
import styles from './Home.module.css';
import CustomProductsContext from '../../Contexts/ProductsContext';
import { ProductGrid } from '../../Components/ProductGrid/ProductGrid';

const Home = () => {
  return (
    <>
      <div className={styles.HomePage_Container}>
        <form className={styles.HomePage_form}>
          <input type="text" className={styles.HomePage_searchInput} placeholder="Search By Name" />
        </form>
      </div>
      <CustomProductsContext>
        <ProductGrid />
      </CustomProductsContext>
    </>
  )
}

export default Home