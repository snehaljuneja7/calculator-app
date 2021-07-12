import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';
import './Calculator.css';

const OpButton = ({buttonValue}) => {
  const {handleCalcFunction} = useContext(NumberContext);
  return (
    <button type="button" className="OpButton" onClick={() => handleCalcFunction(buttonValue)}>{buttonValue}</button>
  );
}

export default OpButton;