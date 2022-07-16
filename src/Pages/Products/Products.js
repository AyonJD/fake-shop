import React, { useContext, useEffect, useState } from 'react';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import Spinner from '../Spinner/Spinner';
import './Products.css';
import { SearchContext } from '../../App'
import useHookProducts from '../Hooks/useHookProducts';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [searchData, setSearchData] = useContext(SearchContext);
    const [hookProducts] = useHookProducts();


    useEffect(() => {
        setSpinner(true);
        if (searchData) {
            //filter products based on searchData
            const filteredProducts = hookProducts.filter(product => {
                return product.title.toLowerCase().includes(searchData.inputValue.toLowerCase());
            }
            );
            setFilteredProducts(filteredProducts)
            setSpinner(false);
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                    setSpinner(false);
                });
        }
    }, [searchData]);

    const reversedProductsArr = [...products].reverse();
    // console.log(filteredProducts, 'filteredProducts', reversedProductsArr, 'reversedProductsArr');

    return (
        <>
            {
                spinner ? <Spinner /> :
                    <div className='container'>
                        <h3 className='mt-4'>Flash sell</h3>
                        <div className="row">
                            {
                                filteredProducts && filteredProducts.length >= 1 ? filteredProducts?.map(product => <SingleProductCard key={product.id} product={product} />)
                                    : reversedProductsArr?.map(product => <SingleProductCard key={product.id} product={product} />)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Products;