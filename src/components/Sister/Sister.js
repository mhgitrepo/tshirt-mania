import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <h5>Sister</h5>
            <p>house: {house}</p>
            <p><small>Ornament: {ornament}</small></p>
        </div>
    );
};

export default Sister;