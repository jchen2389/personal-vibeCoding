import React from 'react';
import eatImage from '../assets/eat.png';

const HeaderIllustration = () => {
    return (
        <img
            src={eatImage}
            alt="Illustration"
            style={{
                width: '100%',
                maxWidth: '240px', /* Limit max width for tablets/desktop */
                height: 'auto',
                display: 'block'
            }}
        />
    );
};

export default HeaderIllustration;
