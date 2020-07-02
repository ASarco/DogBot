import React from 'react';
import './Select.css'

const Select = ({options, handleSelectOptions}) => {
    return (
        <div className='selector-content'>
            {options.map((op, index) =>
                <div key={index}
                     className='selector-container'
                     onClick={(e) => handleSelectOptions(op.id)}
                    onFocus={(e) => e.target.scrollIntoView(true)}>
                    <label key={index}>{op.text}</label>
                </div>
            )}

        </div>
    );
};

export default Select;