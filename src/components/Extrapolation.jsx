import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ExtrapolationInput from "./ExtrapolationInput";
import Swal from "sweetalert2";
import PolynomialRegression from "../service/PolynomialRegression";
import SimpleRegressionGraph from "./SimpleRegressionGraph";
import MultipleRegression from "../service/MultipleLinearRegression";

const Extrapolation = () => {
  const [method, setMethod] = useState("SimpleRegression");
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [size, setSize] = useState(0);
  const [xvalue, setXvalue] = useState(0);
  const [result, setResult] = useState(0);
  const [mOrder, setmOrder] = useState(0);
  const [kOrder, setKOrder] = useState(0);
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState([]);
  const [equation, setEquation] = useState("No Equation Available");
  const [data, setData] = useState([]);
  const [dataX, setDataX] = useState([[]]);
  const [xarr , setXarr] = useState([]);

  useEffect(() => {
    if (method === "MultipleRegression" && kOrder > 0 && Number.isInteger(kOrder)) {
      const newMatrixA = Array.from({ length: kOrder }, () => Array(kOrder).fill(0));
      const ArrayY = Array(kOrder).fill(0);
      const ArrayX = Array(kOrder-1).fill(0);
      setDataX(newMatrixA);
      setXarr(ArrayX);
      setY(ArrayY);
    } else if (size > 0 && Number.isInteger(size)) {
      const ArrayX = Array(size).fill(0);
      const ArrayY = Array(size).fill(0);
      setX(ArrayX);
      setY(ArrayY);
    } else {
      setX([]);
      setY([]);
      setDataX([[]]);
      setXarr([]);
    }
  }, [size, kOrder]);

  const SimpleRegressionMethod = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const SimpleRegressionResult = PolynomialRegression(x, y, xvalue, mOrder);
      setResult(SimpleRegressionResult.predictedValue);
      setEquation(SimpleRegressionResult.regressionEquation);
      setSolution(SimpleRegressionResult.predictedPoints);
      setData(SimpleRegressionResult.data);
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

  const MultipleRegressionMethod = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const multipleRegressionResult = MultipleRegression(dataX, y , xarr);
      setResult(multipleRegressionResult.predictedValue);
      setEquation(multipleRegressionResult.regressionEquation);
      setSolution(multipleRegressionResult.predictedPoints);
      setData(multipleRegressionResult.data);
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

  const renderForm = () => {
    switch (method) {
      case "SimpleRegression":
        return (
          <div className="bg-slate-200 w-full p-4">
            <table className="table-auto border-separate border-spacing-2 w-full">
              <thead>
                <tr className="bg-grey text-zinc-950">
                  <th className="p-5 border border-black">DATA [X , Y]</th>
                  <th className="p-5 border border-black">Predicted Points [X , Y]</th>
                </tr>
              </thead>
              <tbody className="bg-lightgrey text-center">
                {solution && solution.length > 0 ? (
                  solution.map((res, index) => (
                    <tr key={index}>
                      <td className="p-5 border border-black">{`[${data[index][0]}, ${data[index][1]}]`}</td>
                      <td className="p-5 border border-black">{`[${res[0]}, ${res[1]}]`}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-2xl m-1">
                      No Results Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case "MultipleRegression":
        return (
          <div className="bg-slate-200 w-full p-4">
            <table className="table-auto border-separate border-spacing-2 w-full">
              <thead>
                <tr className="bg-grey text-zinc-950">
                  <th className="p-5 border border-black">DATA</th>
                  <th className="p-5 border border-black">Predicted Points</th>
                </tr>
              </thead>
              <tbody className="bg-lightgrey text-center">
                {solution && solution.length > 0 ? (
                  solution.map((res, index) => (
                    <tr key={index}>
                      <td className="p-5 border border-black">{`[${data[index][0]}, ${data[index][1]}]`}</td>
                      <td className="p-5 border border-black">{`[${res[0]}, ${res[1]}]`}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-2xl m-1">
                      No Results Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  const handleCalculate = (e) => {
    if (method === "SimpleRegression") {
      SimpleRegressionMethod(e);
    } else if (method === "MultipleRegression") {
      MultipleRegressionMethod(e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex justify-center my-4">
          <select
            onChange={(e) => setMethod(e.target.value)}
            className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="SimpleRegression">Simple Regression extrapolation</option>
            <option value="MultipleRegression">Multiple Regression extrapolation</option>
          </select>
        </div>
        <ExtrapolationInput
          method={method}
          x={x}
          y={y}
          setx={setX}
          sety={setY}
          setsize={setSize}
          setxvalue={setXvalue}
          setmOrder={setmOrder}
          setKOrder={setKOrder}
          setdataX={setDataX}
          dataX={dataX}
          setXarr ={setXarr}
          xarr={xarr}
        />
        <div className="flex justify-center m-3">
          <button
            onClick={handleCalculate}
            className="border p-3 rounded-lg bg-green-300 hover:bg-red-300"
          >
            Calculate
          </button>
        </div>
        <div className="flex justify-center m-3 text-2xl font-bold">
          <p>{equation}</p>
        </div>
        <div className="flex justify-center m-3 text-2xl font-bold">
          <p>Final Result: {result}</p>
        </div>
        <div className="flex justify-center">
          {solution.length > 0 && (
            <SimpleRegressionGraph data={data} predictedPoints={solution} method={method} />
          )}
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default Extrapolation;
