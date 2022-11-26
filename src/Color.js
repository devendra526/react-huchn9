import React, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState('black');

  const changeColor = () => {
    setColor((color) => (color === 'black' ? 'red' : 'black'));
  };

  return (
    <div>
      <div>
        <h2>
          <label style={{ color: color }}>Text Color</label>
        </h2>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
};
export default Color;
