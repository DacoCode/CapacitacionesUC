import React from 'react';
import './Label.css';

const Label = ({ text }) => {
    return(
        <div className='Label-container-reg'> 
            <label className='label-reg'> {text} </label>
        </div>
    );
};

export default Label;