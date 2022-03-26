import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt='product-img' />
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
            <button className='add-btn'>
                <p><strong>Add to cart </strong></p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;