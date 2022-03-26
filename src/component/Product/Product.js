import React from 'react';

const Product = (props) => {
    const {img, name, price} = props.product;
    return (
        <div>
            <img src={img} alt='product-img'/>
            <h4>{name}</h4>
            <h3>${price}</h3>
        </div>
    );
};

export default Product;