import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SingleTrapezoidal from "../service/SingleTrapezoidal";
import Swal from "sweetalert2";
import katex from "katex";
import "katex/dist/katex.min.css";
import IntegrationGraph from "./IntegrationGraph";
import CompositeTrapeZoidal from "../service/CompositeTrapezoidal";
import SimpSonRulemethod from "../service/Simsonrule";
import CompositeSimpsonRule from "../service/CompositeSimsonRule";
const Integration = () => {
  const [method, setMethod] = useState("TrapeSingle");
  const [a, seta] = useState(NaN);
  const [b, setb] = useState(NaN);
  const [n, setn] = useState(0);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState({});
  const [equation, setEquation] = useState("");
  const [latexEquation, setLatexEquation] = useState("");
  const [checkinput, setCheckInput] = useState(true);

  const TrapeZoidalSingle = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const TrapeZoidalresult = await SingleTrapezoidal(a, b, equation);
      setResult(TrapeZoidalresult.I);
      setSolution(TrapeZoidalresult.solution);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  const CompositeTrapezoidal = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const CompositeTrapezoidal = await CompositeTrapeZoidal(
        a,
        b,
        n,
        equation
      );
      setResult(CompositeTrapezoidal.I);
      setSolution(CompositeTrapezoidal.solution);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const Simpson = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const SimpsonResult = await SimpSonRulemethod(a, b, equation);
      setResult(SimpsonResult.I);
      setSolution(SimpsonResult.solution);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const CompositeSimpson = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const CompositeSimpsonResult = await CompositeSimpsonRule(
        a,
        b,
        n,
        equation
      );
      setResult(CompositeSimpsonResult.I);
      setSolution(CompositeSimpsonResult.solution);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      const renderedEquation = katex.renderToString(
        `\\int_{${a}}^{${b}} ${equation} \\, dx`,
        { throwOnError: false }
      );
      setLatexEquation(renderedEquation);
    } catch (err) {
      setLatexEquation("Invalid Equation");
    }
  }, [equation, a, b]);

  useEffect(() => {
    if (!isNaN(a) && !isNaN(b)) {
      setCheckInput(false);
    } else {
      setCheckInput(true);
    }
  }, [a, b]);

  const handleCalculate = (e) => {
    if (method === "TrapeSingle") {
      TrapeZoidalSingle(e);
    } else if (method === "compositeTrape") {
      CompositeTrapezoidal(e);
    } else if (method == "SimpsonRule") {
      Simpson(e);
    } else if (method == "compositeSimp") {
      CompositeSimpson(e);
    }
  };

  const renderForm = () => {
    switch (method) {
      case "TrapeSingle":
        return (
          <>
            <div className="w-full h-full p-4 flex flex-col items-center justify-center text-3xl mb-20">
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "I = \\frac{b-a}{2}\\left [ f(X_{0}) + f(X_{1}) \\right ]",
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${b}-${a}}{2}\\left [ ${solution.functionA} + ${solution.functionB} \\right ]`,
                    { throwOnError: false }
                  ),
                }}
              />
            </div>
          </>
        );
      case "compositeTrape":
        return (
          <>
            <div className="w-full h-full p-4 flex flex-col items-center justify-center text-2xl mb-20">
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("h = \\frac{b-a}{n}", {
                    throwOnError: false,
                  }),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(`h = \\frac{${b}-${a}}{${n}}`, {
                    throwOnError: false,
                  }),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "I = \\frac{h}{2} \\left( f(x_{0}) + 2 \\sum_{i=1}^{n-1} f(x_{i}) + f(x_{n}) \\right)",
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${solution.h}}{2}\\left[ f(${a}) + 2\\sum_{i=1}^{n-1} f(x_{i}) + f(${b}) \\right]`,
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${solution.h}}{2}\\left[ ${solution.functionA} + 2(${solution.sum}) + ${solution.functionB} \\right]`,
                    { throwOnError: false }
                  ),
                }}
              />
            </div>
          </>
        );
      case "SimpsonRule":
        return (
          <>
            <div className="w-full h-full p-4 flex flex-col items-center justify-center text-2xl mb-20">
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("h = \\frac{b-a}{2}", {
                    throwOnError: false,
                  }),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(`h = \\frac{${b}-${a}}{2}`, {
                    throwOnError: false,
                  }),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "I = \\frac{h}{3} \\left( f(x_{0}) + 4f(x_{1}) + f(x_{2}) \\right)",
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${solution.h}}{3}\\left[ f(${a}) + 4f(x_{1}) + f(${b}) \\right]`,
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${solution.h}}{3}\\left[ ${solution.functionA} + 4(${solution.functionAH}) + ${solution.functionB} \\right]`,
                    { throwOnError: false }
                  ),
                }}
              />
            </div>
          </>
        );
      case "compositeSimp":
        return (
          <>
            <div className="w-full h-full p-4 flex flex-col items-center justify-center text-2xl mb-20">
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("h = \\frac{b-a}{n}", {
                    throwOnError: false,
                  }),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(`h = \\frac{${b}-${a}}{${n}}`, {
                    throwOnError: false,
                  }),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "I = \\frac{h}{3} \\left( f(x_{0}) + 4 \\sum_{i=1,3,5}^{n-1} f(x_{i}) + 2 \\sum_{i=2,4,6}^{n-1} f(x_{i}) + f(x_{n}) \\right)",
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${solution.h}}{3} \\left( f(${a}) + 4 \\sum_{i=1,3,5}^{n-1} f(x_{i}) + 2 \\sum_{i=2,4,6}^{n-1} f(x_{i}) + f(${b}) \\right)`,
                    { throwOnError: false }
                  ),
                }}
              />
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    `I = \\frac{${solution.h}}{3} \\left( ${solution.functionA} + 4(${solution.sumood}) + 2(${solution.sumeven}) + ${solution.functionB} \\right)`,
                    { throwOnError: false }
                  ),
                }}
              />
            </div>
          </>
        );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-full w-full flex flex-col items-center">
        <div className="flex justify-center my-4">
          <select
            onChange={(e) => setMethod(e.target.value)}
            className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="TrapeSingle">Single Trapezoidal</option>
            <option value="compositeTrape">Composite Trapezoidal</option>
            <option value="SimpsonRule">SIMPSON'S RULE</option>
            <option value="compositeSimp">Composite SimpSonRule</option>
          </select>
        </div>
        <div className="flex justify-center mt-6 mb-6">
          <div
            dangerouslySetInnerHTML={{ __html: latexEquation }}
            className="text-center text-5xl font-bold"
          />
        </div>
        <div className="flex justify-center gap-5 mb-6">
          <div>
            <p className="text-center text-2xl">a</p>
            <input
              type="text"
              placeholder="low"
              onChange={(e) => seta(parseFloat(e.target.value))}
              className="text-center border-2 rounded-lg p-2 border-green-500 mt-5"
            />
          </div>
          <div>
            <p className="text-center text-2xl">b</p>
            <input
              type="text"
              placeholder="upper"
              className="text-center border-2 rounded-lg p-2 border-red-500 mt-5"
              onChange={(e) => setb(parseFloat(e.target.value))}
            />
          </div>
          {(method === "compositeTrape" || method == "compositeSimp") && (
              <div>
                <p className="text-center text-2xl">n</p>
                <input
                  type="text"
                  placeholder="n"
                  className="text-center border-2 rounded-lg p-2 border-purple-500 mt-5"
                  onChange={(e) => setn(parseFloat(e.target.value))}
                />
              </div>
            )}
        </div>
        <div className="flex justify-center mb-6">
          <div>
            <p className="text-center text-2xl mt-8 mb-1">equation</p>
            <input
              type="text"
              placeholder="input equation"
              disabled={checkinput}
              onChange={(e) => setEquation(e.target.value)}
              className={`text-center border-2 rounded-lg p-2 border-blue-500 mt-5 ${
                checkinput === true ? "opacity-25" : "opacity-100"
              }`}
            />
          </div>
        </div>
        <div className="flex justify-center m-3">
          <button
            onClick={handleCalculate}
            className="border p-3 rounded-lg bg-green-300 hover:bg-red-300"
          >
            Calculate
          </button>
        </div>
        <div className="flex justify-center m-3 text-2xl font-bold">
          <p>Final Result: {result}</p>
        </div>
        <div className="flex justify-center items-center h-full">
          {method === "TrapeSingle" && result != 0 && (
            <div className="flex justify-center w-full">
              <IntegrationGraph a={a} b={b} equation={equation} />
            </div>
          )}
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default Integration;
