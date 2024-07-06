import React from 'react';
import Product from '../components/Product';
import './catalog.css';

const data = [
    {
        "title": "Banana",
        "price": 12.33,
        "category": "fruit",
        "image": "/images/banana.png",
        "_id": "1"
    },
    {
        "title": "Apple",
        "price": 8.99,
        "category": "fruit",
        "image": "/images/apple.png",
        "_id": "2"
    },
    {
        "title": "Orange",
        "price": 10.50,
        "category": "fruit",
        "image": "/images/orange.png",
        "_id": "3"
    }
];

function Catalog() {
    return (
        <div className="catalog container mt-4">
            <h1 className="mb-4">Check our amazing catalog!</h1>
            <div className="row">
                {data.map(item => (
                    <div className="col-md-4" key={item._id}>
                        <Product
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
