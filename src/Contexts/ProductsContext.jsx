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
            setProducts(originalProducts);
            return;
        }
        const filteredProducts = originalProducts.filter((product) => {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setProducts(filteredProducts);
    }

    return (
        <ProductsContext.Provider value={{ products, searchProducts, loading, categories }}>
            {children}
        </ProductsContext.Provider>
    );
}

export { useValue };
export default CustomProductsContext;