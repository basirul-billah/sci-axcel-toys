import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const { img, name, price } = product;
    return (
        <div className='product'>
            <img src={img} alt='product-img' />
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
            <button 
                onClick={() => handleAddToCart(product)}
                className='add-btn'
            >
                <p><strong>Add to cart </strong></p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;