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
  const [day, setDay] = useState("Monday")
  const changeColor = () => {
     setColor((color)=>"red")
  }
  const getDay = () => {
      setDay((day)=>"Sunday")
  }
  return (
    <div>
      <GlobalData.Provider value={{ textColor: color, getDay:getDay }}>
        <h2>This is App Component </h2>
        <h2>Today is {day} </h2>
        <Child />
        <Other />
        <button onClick={changeColor}>Change Color</button>
      </GlobalData.Provider>
    </div>
  );
}
export default App