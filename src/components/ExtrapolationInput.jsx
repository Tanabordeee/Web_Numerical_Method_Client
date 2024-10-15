import React, { useState } from 'react';

const ExtrapolationInput = ({
  x, setx, y, sety, setsize, setxvalue,
  setmOrder, method, setKOrder, dataX, setdataX , setXarr ,xarr
}) => {

  // Handle change for dataX matrix
  const handleDataXChange = (value, row, col) => {
    const updatedDataX = dataX.map((rowData, rowIndex) =>
      rowIndex === row
        ? rowData.map((colData, colIndex) =>
            colIndex === col ? parseFloat(value) || 0 : colData
          )
        : rowData
    );
    setdataX(updatedDataX);
  };

  const renderDataX = () => {
    return dataX.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-3">
        {row.map((_, colIndex) => (
          <input
            key={colIndex}
            className="text-center border h-20 mb-3 rounded-lg"
            type="number"
            placeholder={`X${rowIndex + 1}${colIndex + 1}`}
            onChange={(e) => handleDataXChange(e.target.value, rowIndex, colIndex)}
          />
        ))}
      </div>
    ));
  };

  const handleXChange = (value, row) => {
    const updateX = x.map((val, rowIndex) => {
      if (rowIndex === row) {
        const parsedValue = parseFloat(value);
        return isNaN(parsedValue) ? 0 : parsedValue;
      }
      return val;
    });
    setx(updateX);
  };

  const renderX = () => {
    return x.map((_, index) => (
      <div key={index}>
        <input
          className="text-center border h-20 mb-3 rounded-lg"
          type="number"
          placeholder={`x${index + 1}`}
          onChange={(e) => handleXChange(e.target.value, index)}
        />
      </div>
    ));
  };

  const handleYChange = (value, row) => {
    const updateY = y.map((val, rowIndex) => {
      if (rowIndex === row) {
        const parsedValue = parseFloat(value);
        return isNaN(parsedValue) ? 0 : parsedValue;
      }
      return val;
    });
    sety(updateY);
  };

  const renderY = () => {
    return y.map((_, index) => (
      <div key={index}>
        <input
          className="text-center border h-20 mb-3 rounded-lg"
          type="number"
          placeholder={`f(X${index + 1})`}
          onChange={(e) => handleYChange(e.target.value, index)}
        />
      </div>
    ));
  };

  const handlearrxChange = (value , row) =>{
    const updatearrx = xarr.map((val, rowIndex) => {
      if (rowIndex === row) {
        const parsedValue = parseFloat(value);
        return isNaN(parsedValue) ? 0 : parsedValue;
      }
      return val;
    });
    setXarr(updatearrx);
  }
  const renderarrX = () =>{
    return xarr.map((_, index) => (
      <div key={index}>
        <input
          className="text-center border h-20 mb-3 rounded-lg"
          type="number"
          placeholder={`X_value ${index + 1}`}
          onChange={(e) => handlearrxChange(e.target.value, index)}
        />
      </div>
    ));
  }
  return (
    <div className="flex flex-col justify-center items-center w-auto">
      <div className="flex justify-between">
        {method === "SimpleRegression" && (        <div className="mr-5">
          <p className="text-center">size</p>
          <input
            className="p-2 border rounded-lg border-green-500"
            type="text"
            placeholder="input size"
            onChange={(e) => setsize(parseInt(e.target.value))}
          />
        </div>)}
        {method === "SimpleRegression" && (<div>
          <p className="text-center">X value</p>
          <input
            className="p-2 border rounded-lg border-red-500"
            type="text"
            placeholder="x value"
            onChange={(e) => setxvalue(parseFloat(e.target.value))}
          />
        </div>)}

        {/* M order for Simple Regression */}
        {method === "SimpleRegression" && (
          <div className="ml-5">
            <p className="text-center">M order</p>
            <input
              className="p-2 border rounded-lg border-blue-500"
              type="text"
              placeholder="M order"
              onChange={(e) => setmOrder(parseFloat(e.target.value))}
            />
          </div>
        )}

        {method === "MultipleRegression" && (
          <div className="ml-5">
            <p className="text-center">K order</p>
            <input
              className="p-2 border rounded-lg border-blue-500"
              type="text"
              placeholder="K order"
              onChange={(e) => {
                const kOrder = parseInt(e.target.value) || 0;
                setKOrder(kOrder+1);
                const updatedDataX = Array.from({ length: kOrder }, () =>
                  Array(kOrder).fill(0)
                );
                setdataX(updatedDataX);
              }}
            />
          </div>
        )}
      </div>
      {method==="SimpleRegression" && (<div className="mt-5 flex gap-5">
        <div>{renderX()}</div>
        <div>{renderY()}</div>
      </div>)}

      {method === "MultipleRegression" && (
        <>
            <div className="mt-5 flex gap-5">
        <div>{renderDataX()}</div>
        <div>{renderY()}</div>
      </div>
        <div className='mt-5'>
          <p>X Value</p>
          <div className='flex gap-5'>{renderarrX()}</div>
        </div>
        </>
      )}
    </div>
  );
};

export default ExtrapolationInput;
