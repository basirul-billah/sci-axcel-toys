import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Selected Toys</h1>
            <button className='cart-btn'>Choose one for me</button>
            <button className='cart-btn'>Choose again!</button>
        </div>
    );
};

export default Cart;