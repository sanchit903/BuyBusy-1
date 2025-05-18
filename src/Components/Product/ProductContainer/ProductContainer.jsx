import React from 'react';
import styles from './ProductContainer.module.css';
import ProductImage from './ProductImage/ProductImage';
import ProductDetails from './ProductDetails/ProductDetails';

const ProductContainer = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <ProductImage product={product} />
      <ProductDetails product={product} />
    </div>
  )
}

export default ProductContainer