import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import katex from "katex";
import "katex/dist/katex.min.css";
import { fowardDivided } from "../service/forwardDiviedh";
import BackwardDiviedh from "../service/backwardDiviedh";
import CentralDivided from "../service/centralDiviedh";
import ForwardDiviedhsquare from "../service/forwardDiviedhsquare";
import BackwardDiveidhsquare from "../service/backwardDiveidhsquare";
import CentralDiveidhsquare from "../service/CentralDiveidhsquare";
import SolutionRenderer from "./SolutionRenderDiff";
const Diffentiation = () => {
  const [equation, setEquation] = useState("");
  const [latexEquation, setLatexEquation] = useState("");
  const [Order, setOrder] = useState("First");
  const [Error, setError] = useState("h");
  const [Direction, setDirection] = useState("Forward");
  const [x, setx] = useState(0);
  const [h, seth] = useState(0);
  const [result, setResult] = useState(null);
  const [rResult, setrResult] = useState(null);
  const [rError, setrError] = useState(null);
  const [rDifff, setrDifff] = useState(null);
  useEffect(() => {
    try {
      const renderedEquation = katex.renderToString(
        `\\frac{\\mathrm{d}}{\\mathrm{d}x} ${equation}`,
        { throwOnError: false }
      );
      setLatexEquation(renderedEquation);
    } catch (err) {
      setLatexEquation("Invalid Equation");
    }
  }, [equation]);

  const computeResult = (Order, diffs) => {
    let computedResult;

    switch (Order) {
      case "First":
        computedResult = {
          derivative: diffs.diff1,
          symbolic: diffs.symbolicDiff1,
          error: diffs.error1,
        };
        break;
      case "Second":
        computedResult = {
          derivative: diffs.diff2,
          symbolic: diffs.symbolicDiff2,
          error: diffs.error2,
        };
        break;
      case "Third":
        computedResult = {
          derivative: diffs.diff3,
          symbolic: diffs.symbolicDiff3,
          error: diffs.error3,
        };
        break;
      case "Fourth":
        computedResult = {
          derivative: diffs.diff4,
          symbolic: diffs.symbolicDiff4,
          error: diffs.error4,
        };
        break;
      default:
        Swal.fire("Error", "Invalid order", "error");
        return null;
    }

    return computedResult;
  };

  const handleResult = (diffs) => {
    const result = computeResult(Order, diffs);
    if (result) {
      setResult(`Numerical Derivative: ${result.derivative}`);
      setrResult(result.derivative);
      setrError(result.error);
      setrDifff(result.symbolic);
    }
  };

  const validateInput = (equation, x, h) => {
    if (!equation || !x || !h) {
      Swal.fire("Error", "Please fill all fields", "error");
      return false;
    }
    return true;
  };

  const FirstForwardh = () => {
    if (!validateInput(equation, x, h)) return;
    const diffs = fowardDivided(parseFloat(x), parseFloat(h), equation);
    handleResult(diffs);
  };

  const FirstBackwardh = () => {
    if (!validateInput(equation, x, h)) return;
    const diffs = BackwardDiviedh(parseFloat(x), parseFloat(h), equation);
    handleResult(diffs);
  };

  const FirstCenterh = () => {
    if (!validateInput(equation, x, h)) return;
    const diffs = CentralDivided(parseFloat(x), parseFloat(h), equation);
    handleResult(diffs);
  };

  const Forwardhsquare = () => {
    if (!validateInput(equation, x, h)) return;
    const diffs = ForwardDiviedhsquare(parseFloat(x), parseFloat(h), equation);
    handleResult(diffs);
  };

  const Backwardhsquare = () => {
    if (!validateInput(equation, x, h)) return;
    const diffs = BackwardDiveidhsquare(parseFloat(x), parseFloat(h), equation);
    handleResult(diffs);
  };

  const centralhsquare = () => {
    if (!validateInput(equation, x, h)) return;
    const diffs = CentralDiveidhsquare(parseFloat(x), parseFloat(h), equation);
    handleResult(diffs);
  };
  const handleCalculate = (e) => {
    if (Direction === "Forward") {
      if (Error === "h") {
        FirstForwardh();
      }
      if (Error === "h2") {
        Forwardhsquare();
      }
    }
    if (Direction === "Backward") {
      if (Error === "h") {
        FirstBackwardh();
      }
      if (Error === "h2") {
        Backwardhsquare();
      }
    }
    if (Direction === "Centered") {
      if (Error === "h2") {
        FirstCenterh();
      }
      if (Error === "h4") {
        centralhsquare();
      }
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="h-full w-full flex flex-col items-center">
          <div className="flex justify-center mt-6 mb-6">
            <div
              dangerouslySetInnerHTML={{ __html: latexEquation }}
              className="text-center text-5xl font-bold"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center my-4">
              <p className="text-center">ORDER</p>
              <select
                onChange={(e) => setOrder(e.target.value)}
                className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
              </select>
            </div>
            <div className="flex flex-col justify-center my-4">
              <p className="text-center">Error</p>
              <select
                onChange={(e) => setError(e.target.value)}
                className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="h">O(h)</option>
                <option value="h2">O(h^2)</option>
                <option value="h4">O(h^4)</option>
              </select>
            </div>
            <div className="flex flex-col justify-center my-4">
              <p className="text-center">Direction</p>
              <select
                onChange={(e) => setDirection(e.target.value)}
                className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Forward">Forward</option>
                <option value="Backward">Backward</option>
                <option value="Centered">Centered</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div>
              <p className="text-center text-2xl mt-8 mb-1">equation</p>
              <input
                type="text"
                placeholder="input equation"
                onChange={(e) => setEquation(e.target.value)}
                className="text-center border-2 rounded-lg p-2 border-red-500 mt-5"
              />
            </div>
          </div>
          <div className="flex justify-center mb-6 gap-5">
            <div>
              <p className="text-center text-2xl mt-8 mb-1">X</p>
              <input
                type="text"
                placeholder="input X"
                onChange={(e) => setx(e.target.value)}
                className="text-center border-2 rounded-lg p-2 border-green-500 mt-5"
              />
            </div>
            <div>
              <p className="text-center text-2xl mt-8 mb-1">h</p>
              <input
                type="text"
                placeholder="input h"
                onChange={(e) => seth(e.target.value)}
                className="text-center border-2 rounded-lg p-2 border-blue-500 mt-5"
              />
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="border p-3 rounded-lg bg-green-300 hover:bg-red-300 w-[20%]"
          >
            Calculate
          </button>
          <div className="text-3xl mt-10 text-center">{result}</div>
          <div className="text-2xl mt-6 w-[80%] h-[90%] pb-20">
            <p>solution</p>
            {<SolutionRenderer direction={Direction} order={Order} error={Error} x={x} h={h} rResult={rResult} rDifff={rDifff} rError={rError}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Diffentiation;
