// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const isProductInCart = prevItems.find(item => item.id === product.id);
            return isProductInCart
                ? prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                : [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== id)
        );
    };

    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) => 
            prevItems.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + amount;
                    return { ...item, quantity: Math.max(newQuantity, 1) };
                }
                return item;
            })
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
