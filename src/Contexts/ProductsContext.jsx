import { createContext, useContext, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const ProductsContext = createContext();

function useValue() {
    const value = useContext(ProductsContext);
    if (!value) {
        throw new Error('useValue must be used within a ProductsProvider');
    }
    return value;
}

function CustomProductsContext({ children }) {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [price, setPrice] = useState(75000);

    const capitalizeFirstLetter = (string) => {
        return string.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
            const products = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setProducts(products);
            setOriginalProducts(products);
            setLoading(false);
            setCategories([...new Set(products.map((product) => capitalizeFirstLetter(product.category)))]);
        });
        return () => unsubscribe();
    }, []);

    const searchProducts = (searchQuery) => {
        if (!searchQuery.trim()) {
            applyFilters(originalProducts, selectedCategories, price);
            return;
        }
        const filteredProducts = originalProducts.filter((product) => {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        applyFilters(filteredProducts, selectedCategories, price);
    }

    const applyFilters = (productsToFilter, categories, maxPrice) => {
        let filteredProducts = productsToFilter;

        // Filter by price
        filteredProducts = filteredProducts.filter(product => 
            product.price <= maxPrice
        );

        // Filter by categories if any are selected
        if (categories.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                categories.includes(capitalizeFirstLetter(product.category))
            );
        }

        setProducts(filteredProducts);
    };

    const handleCategoryChange = (category) => {
        const newSelectedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(cat => cat !== category)
            : [...selectedCategories, category];
        
        setSelectedCategories(newSelectedCategories);
        applyFilters(originalProducts, newSelectedCategories, price);
    };

    const handlePriceChange = (newPrice) => {
        setPrice(newPrice);
        applyFilters(originalProducts, selectedCategories, newPrice);
    };

    return (
        <ProductsContext.Provider value={{ 
            products, 
            searchProducts, 
            loading, 
            categories, 
            selectedCategories,
            price,
            handleCategoryChange,
            handlePriceChange
        }}>
            {children}
        </ProductsContext.Provider>
    );
}

export { useValue };
export default CustomProductsContext;