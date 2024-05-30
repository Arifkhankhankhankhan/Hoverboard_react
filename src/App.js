import React, { useState } from 'react';
import './App.css';

const App = () => {
  const n_of_square = 500;
  const colors = ["green", "orange", "yellow", "red", "violet", "pink"];

  const randomC = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const setColor = (element) => {
    element.style.backgroundColor = randomC(colors);
    element.style.boxShadow = `0 0 2px ${randomC(colors)}, 0 0 10px ${randomC(colors)}`;
  };

  const unsetColor = (element) => {
    element.style.backgroundColor = "#1D1D1D";
    element.style.boxShadow = "0 0 2px rgba(0, 0, 0, 0.3)";
  };

  const squares = Array.from({ length: n_of_square }, (_, i) => (
    <div
      key={i}
      className="square"
      onMouseOver={(e) => setColor(e.target)}
      onMouseOut={(e) => unsetColor(e.target)}
    ></div>
  ));

  return <div className="container">{squares}</div>;
};

export default App;
