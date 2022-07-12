import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const {name, picture, price} = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name} />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default TShirt;