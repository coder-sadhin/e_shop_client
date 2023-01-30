import React from 'react';

const LoadingButton = ({ children, classes, handler, disabled }) => {
    return (
        <button
            onClick={handler}
            disabled={disabled}
            className={`hover:text-gray-100 w-full btn bg-gradient-to-r from-primary to-secondary text-white ${classes}`}
        >
            {children}
        </button>
    );
};

export default LoadingButton;