import React, { useState } from 'react';
import './product.css';
import QuantityPicker from '../QuantityPicker';

function Product({ title, price, category, image }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <div className="product card mb-3">
            <div className="image-container">
                <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Category: {category}</p>
                <p className="card-text">Price: ${price.toFixed(2)}</p>
                <QuantityPicker quantity={quantity} onQuantityChange={handleQuantityChange} />
                <p className="card-text">Total: ${(price * quantity).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Product;
