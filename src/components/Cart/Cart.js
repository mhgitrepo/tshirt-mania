import React from 'react';
import './Cart.css';

const Cart = ({handleRemoveFromCart, cart}) => {
    //Conditional Rendering Options
    /* 01. Element Variable 
       02. Ternary Operator =>> (condition ? true(statement) : false(statement))
       03. && Operator(shorthand)
       04. Or Operator(opposite of && operator)
    */
    let command;
    
    if (cart.length === 0){
        command = <p>Please add at least one item!</p>;
    } else if (cart.length === 1) {
        command = <p>Please add more..!</p>
    }
    else {
        command = <p><small>Thank you for adding item!</small></p>;
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p key = {tShirt._id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} className='btn-remove-item'>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>WoW!! You're purchasing items!</p>}
            {cart.length === 3 && <div className='orange'>
                    <h3>Trigonal</h3>
                    <p>Which one you'd gift?</p>
                </div>}
            {command}
            {cart.length !== 4 ? <></> : <button className='btn-remove-all'>Remove All</button>}
            {cart.length === 4 && <button className='review-order'>Review Order</button>}
        </div>
    );
};

export default Cart;