import React from 'react';
import { useNavigate } from 'react-router-dom';
import HandleRating from '../HandleRating/HandleRating';
import './SingleProductCard.css';
import { BsArrowsMove } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const SingleProductCard = ({ product }) => {
    const { category, description, id, image, price, title, rating } = product;
    const navigate = useNavigate();
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
            <div className="card-group product_card_group">
                <div className="card pt-3">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body product_card_body">
                        <h6 onClick={() => navigate(`/products/${id}`)} className="single_card_title_height" title={title}>{title.slice(0, 20)}{title.length > 20 && '...'}</h6>
                        {/* <p className="card_description" title={description}>{description.slice(0, 60)}...</p> */}
                        <h6>${price}</h6>
                        <div className="d-flex align-items-center">
                            <HandleRating rating={rating?.rate} />
                            <div className="ml-1">
                                <small className='rating_count text-muted fw-bold'>({rating?.count})</small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-denter">
                            <button onClick={() => navigate(`/products/${id}`)} className='btn explore_button'><BsArrowsMove className='explore_icon' /></button>
                            <button className='btn explore_button'><AiFillHeart className='explore_icon' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;