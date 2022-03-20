import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <h2>Name : {props.name}</h2>
            <p>So far steps today {props.number}</p>
            <Dial number={props.number}></Dial>
        </div>
    );
};

export default Display;