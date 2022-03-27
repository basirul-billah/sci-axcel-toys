import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = ({ cart, handleChoseAgain, handleChooseOne }) => {

    return (
        <div className='cart'>
            <h1>Selected Toys</h1>
            {
                cart.map(item => <CartItems
                    key={item.id}
                    item={item}
                ></CartItems>)
            }
            <button className='cart-btn' onClick={() => handleChooseOne()}>Choose one for me</button>
            <button className='cart-btn' onClick={() => handleChoseAgain()}>Choose again!</button>
        </div>
    );
};

export default Cart;