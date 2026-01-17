import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    if (!restaurant) return null;

    const { name, price, time, mapUrl, imageUrl, tags, rating } = restaurant;

    return (
        <div className="restaurant-card">
            <div className="card-image-wrapper">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="card-image" onError={(e) => e.target.style.display = 'none'} />
                ) : (
                    <div className="card-placeholder-image" />
                )}
            </div>

            <div className="card-content">
                <h2 className="card-title">{name}</h2>

                {/* Rating Row */}
                <div className="card-meta-row">
                    {rating && (
                        <div className="rating-box">
                            <span className="star-icon">★</span>
                            <span className="rating-val">{rating}</span>
                        </div>
                    )}

                    <div className="card-tags-row">
                        {tags && tags.split(',').map((tag, i) => (
                            <span key={i} className="tag">{tag.trim()}</span>
                        ))}
                    </div>
                </div>

                {/* Details Rows */}
                <div className="card-details-block">
                    {price && (
                        <div className="detail-row">
                            <span className="detail-label">價格區間</span>
                            <span className="detail-value">{price}</span>
                        </div>
                    )}

                    {time && (
                        <div className="detail-row">
                            <span className="detail-label">營業時間</span>
                            <span className="detail-value">{time}</span>
                        </div>
                    )}
                </div>

                {mapUrl && (
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="map-button">
                        查看地圖
                    </a>
                )}
            </div>
        </div>
    );
};

export default RestaurantCard;
