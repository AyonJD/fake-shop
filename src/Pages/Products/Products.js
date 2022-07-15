import React, { useEffect, useState } from 'react';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import Spinner from '../Spinner/Spinner';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            });
    }, []);

    return (
        <>
            {
                spinner ? <Spinner /> :
                    <div className='container'>
                        <div className="row">
                            {
                                products.map(product => <SingleProductCard key={product.id} product={product} />)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Products;