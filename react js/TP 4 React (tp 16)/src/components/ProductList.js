// ProductList.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
    const { addToCart } = useContext(CartContext);
    const products = [
        { id: 1, name: 'Cinta' },
        { id: 2, name: 'Papel' },
        { id: 3, name: 'Tijera' }
    ];

    return (
        <div>
            <h2>Productos Disponibles</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
