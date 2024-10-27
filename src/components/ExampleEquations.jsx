import React, { useState } from "react";

const ExampleEquations = ({ data, onAddEquation, title }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className="static w-80 top-auto right-auto mx-auto mb-5 md:fixed md:top-24 md:right-11 bg-gray-100 p-5 rounded-md shadow-md">
          <div className="flex justify-between align-center item-center mb-5">
            <h1 className="align-center text-center justify-center pt-4 flex-1">
              <p>EQUATION EXAMPLE</p>
            </h1>
            <button className="btn btn-outline" onClick={toggleVisibility}>
              X
            </button>
          </div>
          <div className="overflow-y-auto h-80">
            {title === "root" &&
              Array.isArray(data) &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-gray-200 p-4 rounded-lg justify-between items-center mb-5"
                >
                  <div className="flex-1">
                    <label className="block truncate">{item.equation}</label>
                  </div>
                  <button
                    onClick={() => {
                      onAddEquation(
                        item.equation,
                        item.XL,
                        item.XR,
                        item.Gval,
                        item.SGval
                      );
                    }}
                    className="bg-red-500 text-white pl-5 pr-5 rounded-md hover:bg-red-600"
                  >
                    ADD
                  </button>
                </div>
              ))}

            {title === "Linear" &&
              Array.isArray(data) &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-gray-200 p-4 rounded-lg justify-between items-center mb-5"
                >
                  <div className="flex-1">
                    <label className="text-center block">Matrix A :</label>
                    <div className="grid gap-2">
                      {item.matrixA.map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="text-center justify-center ml-5 items-center flex"
                        >
                          {row.map((value, colIndex) => (
                            <div
                              key={colIndex}
                              className="p-3 mr-5 border border-gray-400 flex items-center justify-center"
                              style={{ width: "50px", height: "50px" }}
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <label className="text-center block mt-4">Matrix B :</label>
                    <div className="flex justify-center mt-2">
                      {" "}
                      {/* ใช้ flex เพื่อจัดตำแหน่งให้อยู่ตรงกลาง */}
                      <div className="grid grid-cols-1 gap-2">
                        {item.matrixB.map((row, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="p-2 border border-gray-400 flex items-center justify-center"
                            style={{ width: "50px", height: "50px" }}
                          >
                            {row}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      onAddEquation(
                        item.matrixA,
                        item.matrixB,
                        item.matrixX,
                        item.matrixB.length
                      )
                    }
                    className="block bg-red-500 w-[100%] text-white pl-5 pr-5 mt-5 rounded-md hover:bg-red-600"
                  >
                    ADD
                  </button>
                </div>
              ))}

            {title === "Interpolation" &&
              Array.isArray(data) &&
              data.map((item, index) => {
                const maxLength = Math.max(
                  item.matrixX.length,
                  item.matrixY.length
                );
                return (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-200 p-4 rounded-lg justify-between items-center mb-5"
                  >
                    <div className="flex gap-10">
                      <label className="text-center">X</label>
                      <label className="text-center">Y</label>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-2">
                      <div className="grid grid-cols-1 gap-2">
                        {Array.from({ length: maxLength }, (_, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="p-9 border border-gray-400 flex items-center justify-center"
                            style={{ width: "50px", height: "50px" }}
                          >
                            {item.matrixX[rowIndex] !== undefined
                              ? item.matrixX[rowIndex]
                              : "-"}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {Array.from({ length: maxLength }, (_, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="p-9 border border-gray-400 flex items-center justify-center"
                            style={{ width: "50px", height: "50px" }}
                          >
                            {item.matrixY[rowIndex] !== undefined
                              ? item.matrixY[rowIndex]
                              : "-"}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                    onClick={() =>
                      onAddEquation(
                        item.matrixX,
                        item.matrixY,
                        item.size,
                        item.xValue
                      )
                    }
                    className="block bg-red-500 w-[100%] text-white pl-5 pr-5 mt-5 rounded-md hover:bg-red-600"
                  >
                    ADD
                  </button>
                  </div>
                );
              })}
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
