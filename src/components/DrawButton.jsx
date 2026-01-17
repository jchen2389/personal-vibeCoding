import React from 'react';
import './DrawButton.css';

const DrawButton = ({ onClick, disabled, loading }) => {
    return (
        <button
            className="draw-button"
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? '尋找中...' : '中午吃什麼？'}
        </button>
    );
};

export default DrawButton;
