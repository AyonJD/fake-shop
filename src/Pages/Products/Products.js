import React, { useContext, useEffect, useState } from 'react';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import Spinner from '../Spinner/Spinner';
import './Products.css';
import { SearchContext } from '../../App'
import useHookProducts from '../Hooks/useHookProducts';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [searchData, setSearchData] = useContext(SearchContext);
    const [hookProducts] = useHookProducts();


    useEffect(() => {
        setSpinner(true);
        if (!searchData) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                    setSpinner(false);
                });
        } else {
            //filter products based on searchData
            const filteredProducts = hookProducts.filter(product => {
                return product.title.toLowerCase().includes(searchData.inputValue.toLowerCase());
            }
            );
            setProducts(filteredProducts)
            setSpinner(false);
        }
    }, [searchData]);

    const reversedProductsArr = [...products].reverse();

    return (
        <>
            {
                spinner ? <Spinner /> :
                    <div className='container'>
                        <div className="row">
                            {
                                reversedProductsArr?.map(product => <SingleProductCard key={product.id} product={product} />)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Products;