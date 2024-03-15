import React, { useState } from 'react';
import "./App.css"
const data = [
  {
    title: "Once upon a time...",
    avatar: "https://www.shutterstock.com/shutterstock/photos/1398730373/display_1500/stock-vector-once-upon-a-time-lettering-phrase-calligraphy-postcard-poster-photo-graphic-design-element-1398730373.jpg"
  },
  {
    title: "hello world.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RpgTfhMz9YM0GACEeVBWL9VNtKRA1E90re-sxwtgSQ&s"
  },
  
];

const App= () => {
  const [current, setCurrent] = useState(0);

  

  const handlePreviousPage = () => {
    setCurrent((pre) => (pre - 1 + data.length) % data.length);
  };


  const handleNextpage = () => {
    setCurrent((pre) => (pre + 1) % data.length);
  };

  return (
    <div>
      <div className="container">
        <img src={data[current].avatar} alt="title" />
        <p>{data[current].title}</p>
      </div>
      <div className="button-container">
        <button onClick={handlePreviousPage}>Previous</button>
        <button onClick={handleNextpage}>Next</button>
      </div>
    </div>
  );
};

export default App;
