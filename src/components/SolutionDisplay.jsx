import React, { useState } from "react";
import { round } from "mathjs";
import GaussSeidelDisplay from "./GuassSeidelDisplay";
import JacobiDisplay from "./JacobiDisplay";
import ConjugateDisplay from "./ConjugateDisplay";
import ConjugateGraph from "./ConjugateGraph";

const SolutionDisplay = ({
  method,
  answer,
  answer2,
  loading,
  size,
  conjugateAnswer,
  matrixA,
  matrixB,
  solution2,
  GuassSeidelSolution,
  answerGuassSeidel,
  JacobiSolution,
  answerJacobi,
}) => {
  const [viewType, setViewType] = useState("2D");

  const toggleViewType = () => {
    setViewType(viewType === "2D" ? "3D" : "2D");
  };

  const usesAnswer2 =
    method === "LU_Decomposition" || method === "Cholesky_Decomposition";
  const useConjugateAnswer = method === "ConjugateGradientMethod";
  const usesGaussSeidel = method === "GaussSeidel";
  const useJacobi = method === "jacobiMethods";

  return (
    <>
      {usesAnswer2 ? (
        loading ? (
          <p className="text-2xl m-1">CALCULATING ... </p>
        ) : answer2.length > 0 && solution2?.L?.length > 0 ? (
          <div className="flex flex-col items-center mt-4">
            {/* Display L matrix */}
            <div className="mb-4">
              <p className="text-xl font-bold text-center">[L]</p>
              <div className={`grid grid-cols-${solution2.L[0].length} gap-2`}>
                {solution2.L.flatMap((rowL, rowIndex) =>
                  rowL.map((colL, colIndex) => (
                    <span
                      key={`${rowIndex}-${colIndex}`}
                      className="p-6 mb-2 border border-gray-300 text-center"
                    >
                      {round(colL, 2)}
                    </span>
                  ))
                )}
              </div>
            </div>
            <div className="mb-4">
              {solution2?.U?.length > 0 ? (
                <>
                  <p className="text-xl font-bold text-center">[U]</p>
                  <div className={`grid grid-cols-${solution2.U[0].length} gap-2`}>
                    {solution2.U.flatMap((rowU, rowIndex) =>
                      rowU.map((colU, colIndex) => (
                        <span
                          key={`${rowIndex}-${colIndex}`}
                          className="p-6 mb-2 border border-gray-300 text-center"
                        >
                          {round(colU, 2)}
                        </span>
                      ))
                    )}
                  </div>
                </>
              ) : solution2?.L_transpose?.length > 0 ? (
                <>
                  <p className="text-xl font-bold text-center">[L_transpose]</p>
                  <div className={`grid grid-cols-${solution2.L_transpose[0].length} gap-2`}>
                    {solution2.L_transpose.flatMap((rowU, rowIndex) =>
                      rowU.map((colU, colIndex) => (
                        <span
                          key={`${rowIndex}-${colIndex}`}
                          className="p-6 mb-2 border border-gray-300 text-center"
                        >
                          {round(colU, 2)}
                        </span>
                      ))
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Display X solution */}
            {answer2.map((result, index) => (
              <span className="text-3xl m-1" key={index}>
                X{index + 1} = {round(result, 2)}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-3xl m-1">Answer: No results available</p>
        )
      ) : useConjugateAnswer ? (
        loading ? (
          <p className="text-2xl m-1">CALCULATING ... </p>
        ) : (
          <>
            <button onClick={toggleViewType} className="mb-4 p-2 bg-green-500 text-white rounded hover:bg-red-500">
              Toggle View: {viewType}
            </button>
            <ConjugateGraph
              data={{ matrixA: matrixA, arrB: matrixB }}
              result={conjugateAnswer}
              type={viewType}
            />
            <ConjugateDisplay conjugateAnswer={conjugateAnswer} />
          </>
        )
      ) : usesGaussSeidel ? (
        loading ? (
          <p className="text-2xl m-1">CALCULATING ... </p>
        ) : (
          <GaussSeidelDisplay
            result={answerGuassSeidel}
            solution={GuassSeidelSolution}
          />
        )
      ) : useJacobi ? (
        loading ? (
          <p className="text-2xl m-1">CALCULATING ... </p>
        ) : (
          <JacobiDisplay result={answerJacobi} solution={JacobiSolution} />
        )
      ) : (
        <>
          {loading ? (
            <p className="text-2xl m-1">CALCULATING ... </p>
          ) : (
            <>
              {answer.result ? (
                <div className="flex flex-col items-center mt-4 w-[90%]">
                  <div className="flex justify-center items-start w-full">
                    {/* Display Calculation A */}
                    <div className="flex flex-col justify-center items-center">
                      <p className="mb-3 text-4xl">[A]</p>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        {answer.calculationA.map((res, index) => (
                          <div
                            key={index}
                            className="grid grid-rows-3 border p-5 mb-2"
                          >
                            {res.map((res2, index2) => (
                              <div
                                key={index2}
                                className="grid grid-cols-3 gap-2"
                              >
                                {res2.map((res3, index3) => (
                                  <div key={index3} className="border mb-1 p-2">
                                    {round(res3, 2)}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Display Matrix Inversion if applicable */}
                    {method === "MatrixInversion" && (
                      <div className="flex flex-col justify-center items-center mx-4">
                        <p className="mb-3 text-4xl">[I]</p>
                        {Array.isArray(answer.calculationI) &&
                        answer.calculationI.length > 0 ? (
                          <div className="bg-white p-4 rounded-lg shadow-md">
                            {answer.calculationI.map((res, index) => (
                              <div
                                key={index}
                                className="grid grid-rows-3 border p-5 mb-2"
                              >
                                {res.map((res2, index2) => (
                                  <div
                                    key={index2}
                                    className="grid grid-cols-3 gap-2"
                                  >
                                    {res2.map((res3, index3) => (
                                      <div
                                        key={index3}
                                        className="border mb-1 p-2"
                                      >
                                        {round(res3, 2)}
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-2xl m-1">No Inversion Available</p>
                        )}
                      </div>
                    )}

                    {/* Display Calculation B */}
                    {Array.isArray(answer.calculationB) &&
                    answer.calculationB.length > 0 ? (
                      <div className="flex flex-col justify-center items-center text-center h-[100%] ml-2">
                        <p className="mb-3 text-4xl">[B]</p>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          {answer.calculationB.map((res, index) => (
                            <div
                              key={index}
                              className="grid grid-rows-3 border p-5 mb-2"
                            >
                              {res.map((res2, index2) => (
                                <div key={index2} className="border mb-1 p-2">
                                  {round(res2, 2)}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        {method == "Cramer" || method == "MatrixInversion" ? (
                          <>
                            <p className="text-2xl m-1 hidden">
                              Calculation B: No results available
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-2xl m-1">
                              Calculation B: No results available
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>

                  {/* Display Solution */}
                  <div className="flex flex-col items-center mt-4">
                    {answer.result.map((res, index) => (
                      <div className="text-3xl m-1" key={index}>
                        X{index + 1} = {round(res, 2)}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-3xl m-1">Answer: No results available</p>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default SolutionDisplay;