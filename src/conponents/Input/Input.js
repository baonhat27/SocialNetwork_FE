import React from 'react';
import styles from './Input.module.css';
const Input = (props) => {
    return (
        <input className={styles.input} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value||""} style={props.style}>
            
        </input>
    );
};

export default Input;