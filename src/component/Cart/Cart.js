import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = ({cart}) => {
    const {name, img} = cart; 
    return (
        <div className='cart'>
            <h1>Selected Toys</h1>
            {
                cart.map(item => <CartItems 
                    key={item.id}
                    item={item}
                ></CartItems>)
            }
            <button className='cart-btn'>Choose one for me</button>
            <button className='cart-btn'>Choose again!</button>
        </div>
    );
};

export default Cart;