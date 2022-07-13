import React from 'react';
import './TShirt.css';

const TShirt = ({handleAddToCart, tShirt}) => {
    return (
        <div className='t-shirt'>
            <img src={tShirt.picture} alt={tShirt.name} />
            <h4>{tShirt.name}</h4>
            <p>Price: ${tShirt.price}</p>
            <button className='add-to-cart' onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;