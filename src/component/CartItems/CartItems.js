import React from 'react';
import "./CartItems.css"

const CartItems = ({item, id}) => {
    const {name, img} = item;
    return (
        <div className='cart-items'>
            <img className='cart-img' src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CartItems;