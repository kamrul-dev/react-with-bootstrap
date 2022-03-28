import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop dell', price: 70000},
        {id: 2, name: 'Laptop hp', price: 70000},
        {id: 3, name: 'Laptop lenevo', price: 70000}
    ]
    return (
        <div>
            <h2>This is my Cards</h2>
            <div className="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;