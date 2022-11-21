import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/productApi';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data)
        }
        fetchData()
    }, [])


    return (
        <div>
            This is home page
            <p>{products.length}</p>
        </div>
    );
};

export default Home;