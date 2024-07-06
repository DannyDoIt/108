import React from 'react';
import './Product.css';

function Product({ title, price, category, image }) {
    return (
        <div className="product card mb-3">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Category: {category}</p>
                <p className="card-text">Price: ${price}</p>
            </div>
        </div>
    );
}

export default Product;
