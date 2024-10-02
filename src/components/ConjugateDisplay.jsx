import React from "react";
import { round } from "mathjs";
const ConjugateDisplay = ({conjugateAnswer})=>{
    return(
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
}
export default ConjugateDisplay