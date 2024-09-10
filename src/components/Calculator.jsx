import React, { useEffect, useRef } from 'react';

const Calculator = ({ equation ,point}) => {
  const calculatorRef = useRef(null);

  useEffect(() => {
    const elt = calculatorRef.current;
    const calculator = Desmos.GraphingCalculator(elt, {
      keypad: false,
      expressions: false
    });
    console.log(point)
    if (equation) {
      calculator.setBlank();


      calculator.setExpression({ latex: `y=${equation}` });
    }
    if (point && !isNaN(point)) {
      console.log('Point:', point);
      calculator.setExpression({
        latex: `(${point}, 0)`,
        pointStyle: Desmos.Styles.POINT,
        color: Desmos.Colors.RED,
        label: `Point (${point}, 0)`,
      });
    }
    return () => {
      calculator.destroy();
    };
  }, [equation , point]);

  return <div ref={calculatorRef} style={{ width: '600px', height: '400px' }}></div>;
};

export default Calculator;