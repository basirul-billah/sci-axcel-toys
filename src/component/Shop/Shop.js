import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // fetches data from the products.json file
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = chosenProduct => {
        const newCart = [...cart, chosenProduct];
        setCart(newCart);
    }
    
    const handleChoseAgain = chosenProduct => {
        const newCart = [];
        setCart(newCart);
    }

    const handleChooseOne = chosenProduct => {
        const randomIndex = Math.floor(Math.random() * 4);
        const newCart = [...cart, chosenProduct];
        const chosenItem = newCart.splice(randomIndex, 1);
        setCart(chosenItem);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    key={cart.id} 
                    cart={cart}
                    handleChoseAgain={handleChoseAgain}
                    handleChooseOne={handleChooseOne}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;