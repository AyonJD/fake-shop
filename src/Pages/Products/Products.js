import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data)); 
    }, []);

    return (
        <div >
            
        </div>
    );
};

export default Products;