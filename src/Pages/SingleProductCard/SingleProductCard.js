import React from 'react';
import HandleRating from '../HandleRating/HandleRating';
import './SingleProductCard.css';

const SingleProductCard = ({ product }) => {
    const { category, description, id, image, price, title, rating } = product;
    return (
        <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card-group">
                <div className="card pt-3">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="" title={title}>{title.slice(0, 25)}{title.length > 25 && '...'}</h5>
                        <p className="card_description" title={description}>{description.slice(0, 60)}...</p>
                        <h5>${price}</h5>
                        <div className="d-flex align-items-center">
                            <HandleRating rating={rating?.rate} />
                            <div className="ml-auto">
                                <small className='text-muted fw-bold'>({rating?.count})</small>
                            </div>
                        </div>
                        <button className='btn btn-outline-dark btn-sm mt-3'>Explore Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;