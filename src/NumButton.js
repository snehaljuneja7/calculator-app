import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';

const NumButton = ({buttonValue}) => {
  const {handleDisplay} = useContext(NumberContext);
  return (
    <button type="button" className={`${buttonValue === 0 ? "zero-btn" : ""}`} onClick={() => handleDisplay(buttonValue)}>{buttonValue}</button>
  );
}

export default NumButton;