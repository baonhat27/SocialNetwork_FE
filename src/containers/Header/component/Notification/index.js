import React, { useState } from 'react';
import _Notification from './Notification';

const Notification= (props) => {
    return (
        <div>
            <_Notification showNoti = {props.showNoti}
            />
        </div>
    );
};

export default Notification;