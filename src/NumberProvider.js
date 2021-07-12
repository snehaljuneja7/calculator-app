import React, { useState, useEffect, useCallback } from 'react';
export const NumberContext = React.createContext();

const NumberProvider = props =>{
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleDisplay = num => {
    if(!number.includes('.') || num!== '.'){
      setNumber(`${(number+num).replace(/^0+/, '')}`);
    }
  }

  const handleStoredValue = () =>{
    setStoredNumber(number);
    setNumber('');
  }

  const handleACButton = () =>{
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  }

  const handleCEButton = () => {
    if(number!== '.'){
      const delNum = number.slice(0,number.length-1);
      setNumber(delNum);
    }
  }

  const handleCalcFunction = type =>{
    if(number){
      setFunctionType(type);
      handleStoredValue();
    }
    if(storedNumber){
      setFunctionType(type);
    }
  }

  const handleToggleNegative = () => {
    if(number){
      if(number>0){
        setNumber(`-${number}`);
      } else {
        const posNum = number.slice(1);
        setNumber(posNum);
      }
    } else if(storedNumber > 0){
      setStoredNumber(`-${storedNumber}`);
    }
    else{
      const posNum = storedNumber.slice(1);
      setStoredNumber(posNum);
    }
  }

  const doMath = () => {
    if(number && storedNumber){
      switch(functionType){
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
      setFunctionType('');
    }
  }

  // const handleKeyDown = useCallback((e) => {
  //   console.log(e.key);
  //   switch(e.key){
  //     case '1': handleDisplay(e.key); break;
  //     case '2': handleDisplay(e.key); break;
  //     case '3': handleDisplay(e.key); break;
  //     case '4': handleDisplay(e.key); break;
  //     case '5': handleDisplay(e.key); break;
  //     case '6': handleDisplay(e.key); break;
  //     case '7': handleDisplay(e.key); break;
  //     case '8': handleDisplay(e.key); break;
  //     case '9': handleDisplay(e.key); break;
  //     case '0': handleDisplay(e.key); break;
  //     case '.': handleDisplay(e.key); break;
  //     case 'Enter': doMath(); break;
  //     default:
  //       break;
  //   }
  // },[]);

  // useEffect(() => {
  //   document.addEventListener("keypress", handleKeyDown, false);

  //   return () =>{
  //     document.removeEventListener("keypress", handleKeyDown, false);
  //   }
  // },[]);  

  return (
    <NumberContext.Provider value={{handleDisplay,
                                    doMath,
                                    functionType,
                                    handleACButton,
                                    handleCEButton,
                                    handleCalcFunction,
                                    handleStoredValue,
                                    handleToggleNegative,
                                    storedNumber,
                                    setNumber,
                                    number}}>{props.children}</NumberContext.Provider>
  );
};

export default NumberProvider;