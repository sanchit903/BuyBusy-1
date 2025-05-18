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
        <ProductsContext.Provider value={{ products, searchProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export { useValue };
export default CustomProductsContext;