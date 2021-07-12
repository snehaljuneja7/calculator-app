import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const {number, storedNumber, functionType} = useContext(NumberContext);
  return(
    <div>
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p>{!storedNumber ? 'Enter Some Numbers' : `${storedNumber} ${functionType} ${number} `}</p>
    </div>
  );
}

export default Display;