import React, { useState } from 'react';

const ExampleEquations = ({ data, onAddEquation }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className='static w-80 top-auto right-auto mx-auto mb-5 md:fixed md:top-24 md:right-11 bg-gray-100 p-5 rounded-md shadow-md'>
          <div className='flex justify-between align-center item-center mb-5'>
            <h1 className='align-center text-center justify-center pt-4 flex-1'><p>EQUATION EXAMPLE</p></h1>
            <button 
              className="btn btn-outline"
              onClick={toggleVisibility} 
            >
              X
            </button>
          </div>
          <div className='overflow-y-auto h-80'>
            {Array.isArray(data) && data.map((item, index) => (
              <div key={index} className='flex bg-gray-200 p-4 rounded-lg justify-between items-center mb-5'>
                <div className='flex-1'>
                  <label className='block truncate'>{item.equation}</label>
                </div>
                <button
                  onClick={() => onAddEquation(item.equation)}
                  className='bg-red-500 text-white pl-5 pr-5 rounded-md hover:bg-red-600'
                >
                  ADD
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isVisible && (
        <button 
          className="btn btn-outline fixed md:top-24 md:right-11"
          onClick={toggleVisibility}
        >
          Open
        </button>
      )}
    </>
  );
};

export default ExampleEquations;
