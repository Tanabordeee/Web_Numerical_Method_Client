// src/components/SolutionDisplay.js

import React from "react";
import { round } from "mathjs";
import GaussSeidelDisplay from "./GuassSeidelDisplay";
const SolutionDisplay = ({
  method,
  answer,
  answer2,
  loading,
  size,
  conjugateAnswer,
  MatrixA,
  MatrixB,
  solution2,
  GuassSeidelSolution,
  answerGuassSeidel
}) => {
  // Determine if the method uses Answer or Answer2
  const usesAnswer2 =
    method === "LU_Decomposition" || method === "Cholesky_Decomposition";
  const useConjugateAnswer = method === "ConjugateGradientMethod";
  const usesGaussSeidel = method === "GaussSeidel";
  return (
    <>
      {/* Conditional Rendering based on Method */}
      {usesAnswer2 ? (
        loading ? (
          <p className="text-2xl m-1">CALCULATING ... </p>
        ) : answer2.length > 0 && solution2?.L?.length > 0 ? (
          <div className="flex flex-col items-center mt-4">
            {/* Display L matrix */}
            <div className="mb-4">
              <p className="text-xl font-bold text-center">[L]</p>
              <div
                className={`grid grid-cols-${solution2.L[0].length} gap-2`} // Adjusts number of columns dynamically
              >
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
                  <div
                    className={`grid grid-cols-${solution2.U[0].length} gap-2`} // Adjusts number of columns dynamically
                  >
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
                  <div
                    className={`grid grid-cols-${solution2.L_transpose[0].length} gap-2`}
                  >
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
                X{index + 1} = {round(result, 2)} {/* Displaying solution X */}
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
          <div className="flex flex-col w-full">
            <div className="bg-slate-200 w-full p-4">
              <table className="table-auto border-separate border-spacing-2 w-full">
                <thead>
                  <tr className="bg-grey text-zinc-950 ">
                    <th className="p-5 border border-black ">Iteration</th>
                    <th className="p-5 border border-black">X</th>
                    <th className="p-5 border border-black">R</th>
                    <th className="p-5 border border-black">Alpha</th>
                    <th className="p-5 border border-black">D</th>
                  </tr>
                </thead>
                <tbody className="bg-lightgrey text-center">
                  {conjugateAnswer.length > 0 ? (
                    conjugateAnswer.map((res, index) => (
                      <tr key={index}>
                        <td
                          className={`p-5 border border-black ${
                            index === conjugateAnswer.length - 1
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {res.iteration}
                        </td>
                        <td className="p-5 border border-black">
                          {res.X.map((value, i) => (
                            <div
                              className={`flex flex-col ${
                                index === conjugateAnswer.length - 1
                                  ? "text-red-500"
                                  : ""
                              }`}
                              key={i}
                            >
                              X {i + 1} : {round(value, 9)}
                            </div>
                          ))}
                        </td>
                        <td className="p-5 border border-black">
                          {res.R.map((value, i) => (
                            <div
                              className={`flex flex-col ${
                                index === conjugateAnswer.length - 1
                                  ? "text-red-500"
                                  : ""
                              }`}
                              key={i}
                            >
                              R {i + 1} : {round(value, 9)}
                            </div>
                          ))}
                        </td>
                        <td
                          className={`p-5 border border-black ${
                            index === conjugateAnswer.length - 1
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {res.alpha}
                        </td>
                        <td className="p-5 border border-black">
                          {res.D.map((value, i) => (
                            <div
                              className={`flex flex-col ${
                                index === conjugateAnswer.length - 1
                                  ? "text-red-500"
                                  : ""
                              }`}
                              key={i}
                            >
                              D {i + 1} : {round(value, 9)}
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p></p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : usesGaussSeidel ? ( 
        loading ? (
          <p className="text-2xl m-1">CALCULATING ... </p>
        ) : (
          <GaussSeidelDisplay result={answerGuassSeidel} solution={GuassSeidelSolution} />
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
