import React from 'react';

import DeviceDetail from './DeviceDetails/DeviceDetail';
import Watch from './Watch/Watch';

const Device = (props) => {
    // props.price = 150000; --->props just read,not write.
    return (
        <div>
            <h2>My phone name : {props.name} </h2>
            <DeviceDetail price={13000}></DeviceDetail>
            <Watch></Watch>
        </div>
    );
};

export default Device;