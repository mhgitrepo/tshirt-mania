import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p>house: {house}</p>
            <p><small>ornament: {ring}</small></p>
        </div>
    );
};

export default Aunty;