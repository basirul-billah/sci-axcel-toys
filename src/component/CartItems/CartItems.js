import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./CartItems.css"

const CartItems = ({item, id}) => {
    const {name, img} = item;
    return (
        <div className='cart-items'>
            <img className='cart-img' src={img} alt="" />
            <p>{name}</p>
            <button><FontAwesomeIcon icon={faRemove}/></button>
        </div>
    );
};

export default CartItems;