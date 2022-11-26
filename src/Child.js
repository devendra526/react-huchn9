import React, { useContext } from 'react';
import SuperChild from './SuperChild';
import { GlobalData } from './App';

const Child = () => {
  const { textColor } = useContext(GlobalData);
  return (
    <div>
      <h2 style={{ color: textColor }}>This is child component</h2>
      <SuperChild />
    </div>
  );
};
export default Child;
