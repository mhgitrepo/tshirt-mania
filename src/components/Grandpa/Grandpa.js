import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import { useState } from 'react';

const Grandpa = () => {
    const [house, setHouse] = useState(0);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <div className='grandpa'>
            <h3>GrandPa</h3>
            <p><button onClick={handleBuyAHouse}>Buy A House</button> house: {house}</p>
            <section style={{display: 'flex'}}>
                <Father house = {house} ornament = {ornament}/>
                <Uncle house = {house}/>
                <Aunty house = {house}/>
            </section>
        </div>
    );
};

export default Grandpa;