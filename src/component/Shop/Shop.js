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
        // console.log(chosenProduct);
        const newCart = [...cart, chosenProduct];
        setCart(newCart);
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
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;