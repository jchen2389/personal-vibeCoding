import React, { useState, useEffect } from 'react';
import HeaderIllustration from './components/HeaderIllustration';
import DrawButton from './components/DrawButton';
import RestaurantCard from './components/RestaurantCard';
import MysteryCard from './components/MysteryCard';
import { fetchRestaurants } from './services/api';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError('無法取得店家資料。');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleDraw = () => {
    if (restaurants.length === 0) {
      alert('沒有店家資料可供選擇！');
      return;
    }

    setDrawing(true);
    setResult(null);

    // Simulate "thinking"
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      const picked = restaurants[randomIndex];
      setResult(picked);
      setDrawing(false);
    }, 500);
  };

  return (
    <div className="app-container">
      <div className="main-scroll-area">
        <div className="header-section">
          <HeaderIllustration />
        </div>

        <div className="card-area">
          {error && <div className="error-message">{error}</div>}

          {!result ? (
            <MysteryCard />
          ) : (
            <RestaurantCard restaurant={result} />
          )}
        </div>
      </div>

      <div className="fixed-footer">
        <DrawButton
          onClick={handleDraw}
          disabled={loading || restaurants.length === 0}
          loading={drawing}
        />
        {/* iOS Home Indicator Spacer if needed, or handled by padding */}
      </div>
    </div>
  );
}

export default App;
