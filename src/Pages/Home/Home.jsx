import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import CustomProductsContext, { useValue } from '../../Contexts/ProductsContext';
import { ProductGrid } from '../../Components/Product/ProductGrid/ProductGrid';

const HomeContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchProducts } = useValue();

  useEffect(() => {
    searchProducts(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <div className={styles.HomePage_Container}>
        <form className={styles.HomePage_form}>
          <input type="text" className={styles.HomePage_searchInput} placeholder="Search By Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
      </div>
      <ProductGrid />
    </>
  )
}

const Home = () => {
  return (
    <CustomProductsContext>
      <HomeContent />
    </CustomProductsContext>
  )
}

export default Home