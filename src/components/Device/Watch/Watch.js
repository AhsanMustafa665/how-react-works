import React, { useEffect, useState } from 'react';
import Display from '../../Display/Display';

const Watch = () => {
    const [number, setNumber] = useState(0);

    const increaseNum = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
        // console.log(number);
    }

    useEffect(() => {
        console.log(number);
    }, [number])

    return (
        <div>
            <h2>This is my Watch number : {number} </h2>
            <button onClick={increaseNum}>Increase Watch</button>
            <Display name={'iPhone'} number={number}></Display>

        </div>
    );
};

export default Watch;