import { AiFillHeart } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { Link, useParams } from 'react-router-dom';
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
        <div className='min_height'>
            {
                spinner ? <Spinner /> :
                    <div className="container mt-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item " aria-current="page">Products</li>
                                <li className="breadcrumb-item" aria-current="page">{category}</li>
                                <li className="breadcrumb-item" aria-current="page">{`${title?.split(" ")[0]} ${title?.split(" ")[1]}`}</li>
                            </ol>
                        </nav>
                        <div className="card my-2 px-3 py-4">
                            <div className="container-fliud">
                                <div className="wrapper row">
                                    <div className="col-md-6 text-center">
                                        <img className='w-75' src={image} alt="" />
                                    </div>


                                    <div className="details col-md-6">
                                        <h3 className="product-title">{title}</h3>
                                        <div className="vote">Category: {category}</div>
                                        <div className="d-flex align-items-center">
                                            <HandleRating rating={rating?.rate} />
                                            <div className="ml-auto">
                                                <small className='text-muted fw-bold'>({rating?.count} reviews)</small>
                                            </div>
                                        </div>
                                        <p className="product-description card_description">{description}</p>
                                        <h5 className="price">price: <span>${price}</span></h5>
                                        <p className="vote"><strong>{percentage}%</strong> of buyers enjoyed this product! <strong>({rating?.count} votes)</strong></p>
                                        <h6 className="sizes">sizes:
                                            <span className="size" data-toggle="tooltip" title="small">s</span>
                                            <span className="size" data-toggle="tooltip" title="medium">m</span>
                                            <span className="size" data-toggle="tooltip" title="large">l</span>
                                            <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                        </h6>
                                        <h6 className="colors">colors:
                                            <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                            <span className="color green"></span>
                                            <span className="color blue"></span>
                                        </h6>
                                        <div className="mt-3">
                                            <button className="add-to-cart btn btn-default primary-bg" type="button">add to cart</button>
                                            <button className="like ms-2 btn btn-default" type="button"><AiFillHeart /></button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductDetails;