import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ornament, house}) => {
    return (
        <div>
            <h5>Me</h5>
            <p>house: {house}</p>
            <Special ornament = {ornament}/>
        </div>
    );
};

export default MySelf;