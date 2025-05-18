import React from 'react'
import styles from './ProductImage.module.css';

const ProductImage = ({ product }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

export default ProductImage