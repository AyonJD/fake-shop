import React, { useEffect, useState } from 'react';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    console.log(products);
    return (
        <div className='container'>
            <div className="row">
                    {
                        products.map(product => <SingleProductCard key={product.id} product={product} />)
                    }
            </div>
        </div>
    );
};

export default Products;