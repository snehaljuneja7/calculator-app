import React from 'react';
import './Calculator.css';
import NumButton from './NumButton';
import ACButton from './ACButton';
import CEButton from './CEButton';
import NegativeButton from './NegativeButton';
import OpButton from './OpButton';
import EqualButton from './EqualButton';
import Display from './Display';

const Calculator = () => {
  return(
   <div className="calculator">
     <div className="display">
       <Display />
     </div>
     <div className="buttons">
       <ACButton />
       <CEButton />
       <NegativeButton />
       <OpButton buttonValue="/" />
       <NumButton buttonValue={7} />
       <NumButton buttonValue={8} />
       <NumButton buttonValue={9} />
       <OpButton buttonValue="*" />
       <NumButton buttonValue={4} />
       <NumButton buttonValue={5} />
       <NumButton buttonValue={6} />
       <OpButton buttonValue="-" />
       <NumButton buttonValue={1} />
       <NumButton buttonValue={2} />
       <NumButton buttonValue={3} />
       <OpButton buttonValue="+" />
        <NumButton buttonValue={0} />
       <NumButton buttonValue="." />
       <EqualButton />
       </div>
   </div>
  );
}

export default Calculator;