import React, { createContext, useState } from 'react';
import './style.css';
import UseEffectExample from './UseEffectExample';
import ApiExample from './ApiExample';
import Color from './Color';
import Demo from './Demo';
import Child from './Child';
import Other from './OtherChild';

export const GlobalData = createContext();

export default function App() {
  const [color, setColor] = useState('green');
  const changeColor = () => {
     setColor((color)=>"red")
  }
  return (
    <div>
      <GlobalData.Provider value={{ textColor: color }}>
        <h2>This is App Component</h2>
        <Child />
        <Other />
        <button onClick={changeColor}>Change Color</button>
      </GlobalData.Provider>
    </div>
  );
}
export default App