import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';
import './Calculator.css';

const CEButton = () => {
  const {handleCEButton} = useContext(NumberContext);
  
  return (
    <button type="button" className="CEButton" onClick={() => handleCEButton()}>CE</button>
  );
}

export default CEButton;