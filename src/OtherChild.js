import React, { useContext } from 'react';
import { GlobalData } from './App';

const OtherChild = () => {
  const { textColor } = useContext(GlobalData);
  return (
    <div>
      <h2 style={{ color: textColor }}>This is Other Child component</h2>
    </div>
  );
};
export default OtherChild;
