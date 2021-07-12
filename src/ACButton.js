import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';
import './Calculator.css';

const ACButton = () => {
  const {handleACButton} = useContext(NumberContext);

  return (
    <button type="button" className="ACButton" onClick={() => handleACButton()}>AC</button>
  );
}

export default ACButton;
