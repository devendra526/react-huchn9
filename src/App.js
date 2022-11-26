import React, { createContext, useState } from 'react';
import './style.css';
import UseEffectExample from './UseEffectExample';
import ApiExample from './ApiExample';
import Color from './Color';
import Demo from './Demo';
import Child from './UseContextState/Child';
import Other from './OtherChild';

export const GlobalData = createContext();

export default function App() {
  const [color, setColr] = useState('green');
  return (
    <div>
      <GlobalData.Provider value={{ textColor: color }}>
        <Child />
        <Other />
      </GlobalData.Provider>
    </div>
  );
}
export default App