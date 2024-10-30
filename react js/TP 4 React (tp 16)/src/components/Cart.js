// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleIncrease = (id) => {
        updateQuantity(id, 1);
    };

    const handleDecrease = (id) => {
        updateQuantity(id, -1);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.name} (x{item.quantity})</h3>
                        <button onClick={() => handleDecrease(item.id)} disabled={item.quantity === 1}>-</button>
                        <button onClick={() => handleIncrease(item.id)}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
