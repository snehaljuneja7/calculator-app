import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';
import './Calculator.css';

const NegativeButton = () => {
  const {handleToggleNegative} = useContext(NumberContext);

  return(
    <button type="button" className="OpButton" onClick={() => handleToggleNegative()}>-/+</button>
  );
}

export default NegativeButton;