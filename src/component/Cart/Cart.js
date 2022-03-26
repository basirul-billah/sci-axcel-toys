import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name, img} = cart; 
    return (
        <div className='cart'>
            <h1>Selected Toys</h1>
            {
                cart.map(item => <p key={item.id}>
                    {item.name}
                    <FontAwesomeIcon icon={delete}
                </p>)
            }
            <button className='cart-btn'>Choose one for me</button>
            <button className='cart-btn'>Choose again!</button>
        </div>
    );
};

export default Cart;