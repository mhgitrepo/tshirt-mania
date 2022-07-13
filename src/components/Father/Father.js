import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ornament, house}) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house: {house}</p>
            <div style={{display: 'flex'}}>
                <MySelf house = {house} ornament = {ornament}/>
                <Brother house = {house}/>
                <Sister house = {house}/>
            </div>
        </div>
    );
};

export default Father;