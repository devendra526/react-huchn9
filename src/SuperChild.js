import React, { useContext } from 'react';
import { GlobalData } from './App';

const SuperChild = () => {
  const { textColor } = useContext(GlobalData);
  return (
    <div>
      <h2 style={{ color: textColor }}>This is Super Child component</h2>
    </div>
  );
};
export default SuperChild;
