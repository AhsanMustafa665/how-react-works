import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid black', margin: '20px' }}>
            <h2>This is new metal mix dial Watch</h2>
            <p>So far steps today {props.number}</p>
        </div>
    );
};

export default Dial;