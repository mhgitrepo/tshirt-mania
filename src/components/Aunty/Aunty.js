import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p><button onClick={() => setHouse(house + 1)}>Buy House</button> house: {house}</p>
            <p><small>ornament: {ornament}</small></p>
        </div>
    );
};

export default Aunty;