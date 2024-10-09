import React from "react";
import { round } from "mathjs";

const JacobiDisplay = ({ result, solution }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-200 w-full p-4">
        <table className="table-auto border-separate border-spacing-2 w-full">
          <thead>
            <tr className="bg-grey text-zinc-950">
              <th className="p-5 border border-black">Iteration</th>
              <th className="p-5 border border-black">Index</th>
              <th className="p-5 border border-black">X Value</th>
            </tr>
          </thead>
          <tbody className="bg-lightgrey text-center">
            {(result && result.length > 0) ? (
              result.map((res, index) => (
                <tr key={index}>
                  <td className={`p-5 border border-black ${index >= result.length - 3 ? "text-red-500" : ""}`}>{res.iteration}</td>
                  <td className={`p-5 border border-black ${index >= result.length - 3 ? "text-red-500" : ""}`}>X{res.index + 1}</td>
                  <td className={`p-5 border border-black ${index >= result.length - 3 ? "text-red-500" : ""}`}>{round(res.val, 9)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-2xl m-1">
                  No Results Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white w-full p-4 mt-4">
        <h3 className="text-2xl font-bold mb-4">Calculation Details</h3>
        <div className="grid grid-cols-1 gap-4">
          {(solution && solution.length > 0) ? (
            solution.map((step, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <p className="text-lg mb-2">
                  Iteration {index + 1} - X{index % 3 + 1} Calculation
                </p>
                <p>
                  (B[{index % 3 + 1}] - sum ) / A[{index % 3 + 1}][{index % 3 + 1}] = ({step.findX[0].B} - {step.findX[0].sum}) / {step.findX[0].Amain}
                </p>
              </div>
            ))
          ) : (
            <p>No Calculation Details Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JacobiDisplay;
