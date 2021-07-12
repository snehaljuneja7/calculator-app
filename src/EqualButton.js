import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';
import './Calculator.css';

const EqualButton = () => {
  const {doMath} = useContext(NumberContext);
  return(
    <button type="button" className="EqualButton" onClick={() => doMath()}>=</button>
  );
};

export default EqualButton;