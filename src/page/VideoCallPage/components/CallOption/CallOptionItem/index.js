import React from 'react';
import './style.css'

function CallOptionItem(props) {
    const { name, active, danger = false, onClick } = props
    return (
        <div 
            onClick={() => {
                const buttonName = name === 'phone' ? 'turnOff' : name
                onClick(buttonName)
            }}
            className={ 'call__option--item ' + (danger ? 'danger' : '')}
        >
           <box-icon color='white' type='solid' name={name + (active ? '' : '-off')}></box-icon>
        </div>
    );
}

export default CallOptionItem;