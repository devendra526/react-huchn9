import React, { useContext } from 'react';
import { GlobalData } from './App';

const SuperChild = () => {
  const { textColor, getDay } = useContext(GlobalData);
  const day = 'Sunday';
  return (
    <div>
      <h2 style={{ color: textColor }}>This is Super Child component</h2>
      <button onClick={() => getDay(day)}>Click Me</button>
    </div>
  );
};
export default SuperChild;
