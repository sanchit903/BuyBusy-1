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

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
            const products = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setProducts(products);
        });
        return () => unsubscribe();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, useValue };
export default CustomProductsContext;