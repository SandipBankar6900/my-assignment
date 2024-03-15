import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [boxColors, setBoxColors] = useState(Array(16).fill('')); 
  const [sequence, setSequence] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (index) => {
    if (!gameOver && sequence.length < 5) {
      const newBoxColors = [...boxColors];
      newBoxColors[index] = 'blue';
      setBoxColors(newBoxColors);
      setSequence([...sequence, index]);
    }
  };

  const highlightSequence = () => {
    const interval = setInterval(() => {
      const index = sequence[highlightIndex];
      const newBoxColors = [...boxColors];
      newBoxColors[index] = 'blue';
      setBoxColors(newBoxColors);
      setHighlightIndex((prevIndex) => prevIndex + 1);
      if (highlightIndex === 4) {
        clearInterval(interval);
        setHighlightIndex(0);
        setGameOver(true);
      }
    }, 500);
  };

  useEffect(() => {
    if (sequence.length === 5) {
      highlightSequence();
    }
  }, [sequence]);

  const handleReset = () => {
    setBoxColors(Array(16).fill(''));
    setSequence([]);
    setHighlightIndex(0);
    setGameOver(false);
  };

  const handleBoxReset = () => {
    if (gameOver) {
      handleReset();
    }
  };

  useEffect(() => {
    if (gameOver && sequence.toString() === '0,1,2,3,4') {
      alert('You win!');
      handleReset();
    }
  }, [gameOver]);

  return (
    <div className="App">
      <div className="grid">
        {boxColors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(index)}
            onAnimationEnd={handleBoxReset}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
