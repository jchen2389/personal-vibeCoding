import React, { useState, useEffect } from 'react';
import { generateImagePool, getRandomImage } from '../utils/imageLoader';
import './FoodImageDisplay.css';

const imagePool = generateImagePool();

const FoodImageDisplay = () => {
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        // Set initial image
        setCurrentImage(getRandomImage(imagePool));
    }, []);

    if (!currentImage) return <div className="food-image-placeholder"></div>;

    return (
        <div className="food-image-container">
            <img
                src={currentImage}
                alt="Delicious Food"
                className="food-image"
            />
        </div>
    );
};

export default FoodImageDisplay;
