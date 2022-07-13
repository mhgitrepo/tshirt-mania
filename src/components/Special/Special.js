import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house, setHouse] = useContext(RingContext);

    // const handleSpecialHouse = () => {
    //     const houseCount = house + 1;
    //     setHouse(houseCount);
    // }

    return (
        <div>
            <h5>Special</h5>
            <p><button onClick={() => setHouse(house + 1)}>Add</button> House: {house}</p>
            <p><small>Gift: "{ornament}"</small></p>
        </div>
    );
};

export default Special;