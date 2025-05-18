import React from 'react';
import styles from './ProductGrid.module.css';
import { useValue } from '../../../Contexts/ProductsContext';
import ProductContainer from '../ProductContainer/ProductContainer';

export const ProductGrid = () => {
  const { products } = useValue();

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductContainer key={product.id} product={product} />
      ))}
    </div>
  )
}
