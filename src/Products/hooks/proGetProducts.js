
import { useEffect,useState } from "react";
import { getProducts } from "../utils";

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [categorizedProducts, setCategorizedProducts] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const result = await getProducts();
                console.log({ result });
                setProducts(result);
                const groupedByCategory = result.reduce((acc, product) => {
                    const key = product.category;
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(product);
                    return acc;
                }, {});
                setCategorizedProducts(groupedByCategory);
                setLoading(false);
            } catch (error) {
                setError(`Error: ${error.message}`);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return { products, error, loading, categorizedProducts }; 
};