import React, { useState } from 'react';
import styles from './FilterSideBar.module.css';
import { useValue } from '../../Contexts/ProductsContext';

const FilterSidebar = () => {
    const [price, setPrice] = useState(75000);
    const { categories } = useValue();
    return (
        <aside className={styles.filterContainer}>
            <h2>Filter</h2>
            <form>
                <label htmlFor="price">Price: {price}</label>
                <input type="range" id="price" name="price" min="0" max="100000" className={styles.filterContainer_priceRange} step={10} value={price} onChange={(e) => setPrice(e.target.value)} />
                <h2>Category</h2>
                <div className={styles.filterContainer_categoryContainer}>
                    {categories && categories.map((category) => (
                        <div key={category}>
                            <input type="checkbox" id={category} name={category} />
                            <label htmlFor={category}>
                                <span>{category}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </form>
        </aside>
    )
}

export default FilterSidebar