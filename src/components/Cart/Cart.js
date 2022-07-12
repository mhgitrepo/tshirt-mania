import React from 'react';
import './Cart.css';

const Cart = ({handleRemoveFromCart, cart}) => {
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p key = {tShirt._id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} className='btn-remove-item'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;