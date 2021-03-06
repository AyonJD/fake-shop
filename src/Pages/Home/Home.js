import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import useHookProducts from '../Hooks/useHookProducts';
import Spinner from '../Spinner/Spinner';
import { SearchContext } from '../../App';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [hookProducts, spinner] = useHookProducts();
    const [searchData, setSearchData] = useContext(SearchContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    // console.log(spinner);

    useEffect(() => {
        if (searchData) {
            //filter products based on searchData
            const filteredProducts = hookProducts.filter(product => {
                return product.title.toLowerCase().includes(searchData.inputValue.toLowerCase());
            }
            );
            setFilteredProducts(filteredProducts)
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                });
        }
    }, [searchData]);

    const reversedProductsArr = [...products].reverse();

    return (
        <div className='min_height'>
            {
                spinner ? <Spinner /> :
                    <>
                        <Carousel className='carousel'>
                            <Carousel.Item>
                                <div
                                    onClick={() => navigate('/products')}
                                    className="carousel slide_one"
                                >
                                </div>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div
                                    onClick={() => navigate('/products')}
                                    className="carousel slide_two"
                                >
                                </div>

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div
                                    onClick={() => navigate('/products')}
                                    className="carousel slide_three"
                                >
                                </div>

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div
                                    onClick={() => navigate('/products')}
                                    className="carousel slide_four"
                                >
                                </div>

                                <Carousel.Caption>
                                    <h3>Fourth slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <div className='container'>
                            <h3 className='mt-4'>Flash sell</h3>
                            <div className="row">
                                {
                                    filteredProducts && filteredProducts.length >= 1 ? filteredProducts?.map(product => <SingleProductCard key={product.id} product={product} />)
                                        : reversedProductsArr?.map(product => <SingleProductCard key={product.id} product={product} />)
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Home;