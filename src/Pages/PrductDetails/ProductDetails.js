import { AiFillHeart } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'bootstrap';
import { useParams } from 'react-router-dom';
import HandleRating from '../HandleRating/HandleRating';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    console.log(product)
    const imageOne = <img className='w-25 text-start' src={product?.image} alt="" />;
    return (
        <div class="container">
            <div class="card">
                <div class="container-fliud">
                    <div class="wrapper row">
                        <div class="col-md-6">
                            <img src={product?.image} alt="" />
                        </div>

                    
                    <div class="details col-md-6">
                        <h3 class="product-title">men's shoes fashion</h3>
                        <div class="">
                        <HandleRating rating={product?.rating?.rate} />
                            <span class="review-no">41 reviews</span>
                        </div>
                        <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                        <h4 class="price">current price: <span>$180</span></h4>
                        <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                        <h5 class="sizes">sizes:
                            <span class="size" data-toggle="tooltip" title="small">s</span>
                            <span class="size" data-toggle="tooltip" title="medium">m</span>
                            <span class="size" data-toggle="tooltip" title="large">l</span>
                            <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                        </h5>
                        <h5 class="colors">colors:
                            <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                            <span class="color green"></span>
                            <span class="color blue"></span>
                        </h5>
                        <div class="action">
                            <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                            <button class="like ms-2 btn btn-default" type="button"><AiFillHeart /></button>


                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;