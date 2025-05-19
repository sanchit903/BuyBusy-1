import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import CustomProductsContext, { useValue } from '../../Contexts/ProductsContext';
import { ProductGrid } from '../../Components/Product/ProductGrid/ProductGrid';
import Spinner from 'react-spinner-material';
import FilterSidebar from '../../Components/FilterSidebar/FilterSidebar';

const HomeContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchProducts, loading } = useValue();

  useEffect(() => {
    searchProducts(searchQuery);
  }, [searchQuery]);

  return (
    <>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <Spinner
            size={100}
            color={"#7064e5"}
            visible={true}
            stroke={5}
            radius={40}
          />
        </div>
      ) : (
          <>
            <FilterSidebar />
            <div className={styles.HomePage_Container}>
              <form className={styles.HomePage_form}>
                <input type="text" className={styles.HomePage_searchInput} placeholder="Search By Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
          </div>
          <ProductGrid />
        </>
      )}
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