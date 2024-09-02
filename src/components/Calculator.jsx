import React, { useEffect, useRef } from 'react';

const Calculator = ({ equation }) => {
  const calculatorRef = useRef(null);

  useEffect(() => {
    const elt = calculatorRef.current;
    const calculator = Desmos.GraphingCalculator(elt, {
      keypad: false,
      expressions: false
    });

    if (equation) {

      calculator.setBlank();


      calculator.setExpression({ latex: `y=${equation}` });
    }


    return () => {
      calculator.destroy();
    };
  }, [equation]);

  return <div ref={calculatorRef} style={{ width: '600px', height: '400px' }}></div>;
};

export default Calculator;