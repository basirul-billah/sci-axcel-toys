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

    // adds to cart. because cart is immutable a newCart is created and contents of cart is copied along with chosen product.
    const handleAddToCart = chosenProduct => {
        
        if (cart.indexOf(chosenProduct) === -1 && cart.length <= 3) {
            const newCart = [...cart, chosenProduct];
            setCart(newCart);
        }
    }

    // if clicked Chose Again button, this function clears the cart
    const handleChoseAgain = chosenProduct => {
        const newCart = [];
        setCart(newCart);
    }

    // generates a random number within 4 and stores it as an index. the newCart array is then cleared except the element of which index number was stored in randomIndex
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
                        handleAddToCart={handleAddToCart}
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