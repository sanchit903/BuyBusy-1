import React from 'react';
import styles from './ProductDetails.module.css';   

const ProductDetails = ({ product }) => {
  return (
      <div className={styles.productDetails}>
          <div className={styles.productName}>
              <p>{product.title.slice(0, 35)}...</p>
          </div>
          <div className={styles.productOptions}>
              <p>₹ {product.price}</p>
          </div>
      <button className={styles.addBtn} title='Add to Cart'>Add to Cart</button>
    </div>
  )
}

export default ProductDetails