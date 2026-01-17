// Using a seed-based approach to generate 100 consistent distinct food image URLs
// using loremflickr as it supports keywords and locks for consistency.
// Note: Unsplash Source is deprecated, so using loremflickr for demo reliability.

// Alternatively, we can use a curated list of Unsplash IDs if we want higher quality, 
// but for "100 images", algorithmic is better for now.

export const generateImagePool = () => {
    const pool = [];
    for (let i = 0; i < 100; i++) {
        // Using 'food', 'meal', 'cuisine' to get variety
        // lock=i ensures each index always gets the same image (caching friendly)
        pool.push(`https://loremflickr.com/600/600/food,dish,restaurant?lock=${i + 1}`);
    }
    return pool;
};

// Preload images
export const preloadImages = (urls) => {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

export const getRandomImage = (pool) => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
};
