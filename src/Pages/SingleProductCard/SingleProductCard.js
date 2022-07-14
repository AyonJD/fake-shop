import React from 'react';
import './SingleProductCard.css';

const SingleProductCard = ({ product }) => {
    const { category, description, id, image, price, title, rating } = product;
    return (
        <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card-group">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="" title={title}>{title.slice(0, 25)}{ title.length > 25 && '...'}</h5>
                        <p className="card_description" title={description}>{description.slice(0,60)}...</p>
                    <button className='btn btn-outline-dark btn-sm'>Explore Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;