import React from 'react';
import ReactStars from 'react-rating-stars-component';

const HandleRating = ({ rating }) => {
    // console.log(rating?.rate);
    const firstExample = {
        size: 20,
        value: rating,
        edit: false,
        isHalf: true,
    };
    return (
        <div className="">
            <ReactStars {...firstExample} />
        </div>
    );
};

export default HandleRating;