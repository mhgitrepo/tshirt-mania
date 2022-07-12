import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTshirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = selectedItem => {
        const existedItem = cart.find(tShirt => tShirt._id === selectedItem._id);
        
        if(!existedItem){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert("You've already added this product. Choose another!");
        }
    };

    const handleRemoveFromCart = selectedItem => {
        const remainingItem = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(remainingItem);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                   tShirts.map(tShirt => <TShirt
                        key = {tShirt._id}
                        tShirt = {tShirt}
                        handleAddToCart = {handleAddToCart}
                    />) 
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart = {cart}
                    handleRemoveFromCart = {handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default Home;