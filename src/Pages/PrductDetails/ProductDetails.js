import { AiFillHeart } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import HandleRating from '../HandleRating/HandleRating';
import Spinner from '../Spinner/Spinner';

const ProductDetails = () => {
    const { id } = useParams();
    const [spinner, setSpinner] = useState(false);
    const [product, setProduct] = useState({});
    const { category, description, image, price, title, rating } = product;

    useEffect(() => {
        setSpinner(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setSpinner(false);
            })
    }, [id]);

    let percentage = parseFloat(parseInt(rating?.rate) / 5) * 100;
    return (
        <>
            {
                spinner ? <Spinner /> :
                    <div class="container">
                        <div class="card my-5 px-3 py-5">
                            <div class="container-fliud">
                                <div class="wrapper row">
                                    <div class="col-md-6 text-center">
                                        <img className='w-75' src={product?.image} alt="" />
                                    </div>


                                    <div class="details col-md-6">
                                        <h3 class="product-title">{title}</h3>
                                        <div className="d-flex align-items-center">
                                            <HandleRating rating={rating?.rate} />
                                            <div className="ml-auto">
                                                <small className='text-muted fw-bold'>({rating?.count} reviews)</small>
                                            </div>
                                        </div>
                                        <p class="product-description card_description">{description}</p>
                                        <h4 class="price">price: <span>${price}</span></h4>
                                        <p class="vote"><strong>{percentage}%</strong> of buyers enjoyed this product! <strong>({rating?.count} votes)</strong></p>
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
                                        <div class="">
                                            <button class="add-to-cart btn btn-default primary-bg" type="button">add to cart</button>
                                            <button class="like ms-2 btn btn-default" type="button"><AiFillHeart /></button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default ProductDetails;