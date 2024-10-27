import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import InterpolationInput from "../components/InterpolationInput";
import Swal from "sweetalert2";
import NewtonDiviedDifference from "../service/NewtonDiviedDifference";
import LagrangeInterpolation from "../service/LagrangeInterpolation";
import LinearSpline from "../service/LinearSpline";
import ExampleEquations from "./ExampleEquations";
import axios from 'axios';
const Interpolation = () => {
  const [method, setMethod] = useState("Newton");
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [size, setSize] = useState(0);
  const [xvalue, setXvalue] = useState(0);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState([]);
  const [solution2, setSolution2] = useState({});
  const [data , setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/GetInterpolation`;
        const response = await axios.get(apiUrl);
        setData(response.data.equation);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error"
        });
      }
    }
    fetchData();
    if (size > 0 && Number.isInteger(size)) {
      const ArrayX = Array(size).fill(0);
      const ArrayY = Array(size).fill(0);
      setX(ArrayX);
      setY(ArrayY);
    } else {
      setX([]);
      setY([]);
    }
  }, [size]);

  const Newton = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const Newtonresult = NewtonDiviedDifference(x, y, xvalue);
      setResult(Newtonresult.result);
      setSolution(Newtonresult.solution);
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

  const LagranceMethod = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const Lagranceresult = LagrangeInterpolation(x, y, xvalue);
      setResult(Lagranceresult.result);
      setSolution2(Lagranceresult.solution);
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

  const LinearSplines = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        const LinearSplineresult = LinearSpline(x, y, xvalue);
        setResult(LinearSplineresult.result); // Set result from LinearSpline
        setSolution2(LinearSplineresult.solutions); // Set solutions from LinearSpline
    } catch (err) {
        Swal.fire({
            title: "Error",
            text: err.message,
            icon: "error",
        });
    } finally {
        setLoading(false);
    }
}

  const renderForm = () => {
    switch (method) {
      case "Newton":
        return (
          <div className="bg-slate-200 w-full p-4">
            <table className="table-auto border-separate border-spacing-2 w-full">
              <thead>
                <tr className="bg-grey text-zinc-950">
                  <th className="p-5 border border-black">Iteration</th>
                  <th className="p-5 border border-black">result</th>
                </tr>
              </thead>
              <tbody className="bg-lightgrey text-center">
                {solution && solution.length > 0 ? (
                  solution.map((res, index) => (
                    <tr key={index}>
                      <td className="p-5 border border-black">{index + 1}</td>
                      <td className="p-5 border border-black">{res}</td>
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
        );
      case "Lagrance":
        return (
          <div className="bg-slate-200 w-full p-4">
            <table className="table-auto border-separate border-spacing-2 w-full">
              <thead>
                <tr className="bg-grey text-zinc-950">
                  <th className="p-5 border border-black">Iteration</th>
                  <th className="p-5 border border-black">result</th>
                  <th className="p-5 border border-black">L</th>
                  <th className="p-5 border border-black">Y</th>
                </tr>
              </thead>
              <tbody className="bg-lightgrey text-center">
                {solution2.results && solution2.results.length > 0 ? (
                  solution2.results.map((res, index) => (
                    <tr key={index}>
                      <td className="p-5 border border-black">{index + 1}</td>
                      <td className="p-5 border border-black">{res}</td>
                      <td className="p-5 border border-black">{solution2.L[index]}</td>
                      <td className="p-5 border border-black">{solution2.Y[index]}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-2xl m-1">
                      No Results Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case "Spline":
        return (
          <div className="bg-slate-200 w-full p-4">
              <table className="table-auto border-separate border-spacing-2 w-full">
                  <thead>
                      <tr className="bg-grey text-zinc-950">
                          <th className="p-5 border border-black">Iteration</th>
                          <th className="p-5 border border-black">X1</th>
                          <th className="p-5 border border-black">X2</th>
                          <th className="p-5 border border-black">y1</th>
                          <th className="p-5 border border-black">y2</th>
                          <th className="p-5 border border-black">m</th>
                          <th className="p-5 border border-black">result</th>
                      </tr>
                  </thead>
                  <tbody className="bg-lightgrey text-center">
                      {solution2.length > 0 ? (
                          solution2.map((res, index) => (
                              <tr key={index}>
                                  <td className="p-5 border border-black">{index + 1}</td>
                                  <td className="p-5 border border-black">{res.x1}</td>
                                  <td className="p-5 border border-black">{res.x2}</td>
                                  <td className="p-5 border border-black">{res.y1}</td>
                                  <td className="p-5 border border-black">{res.y2}</td>
                                  <td className="p-5 border border-black">{res.m}</td>
                                  <td className="p-5 border border-black">{res.result}</td>
                              </tr>
                          ))
                      ) : (
                          <tr>
                              <td colSpan="7" className="text-2xl m-1">
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
    if (method === "Newton") {
      Newton(e);
    } else if (method === "Lagrance") {
      LagranceMethod(e);
    }else if(method === "Spline"){
      LinearSplines(e);
    }
  };

  const handleEquationChange_ADD = (mtX, mtY, size, xValue) => {
    setX(mtX);
    setY(mtY);
    setSize(size);
    setXvalue(xValue);
};
  return (
    <div>
      <Navbar />
      <div className="">
        <ExampleEquations data={data} onAddEquation={handleEquationChange_ADD} title={"Interpolation"} />
        <div className="flex justify-center my-4">
          <select
            onChange={(e) => setMethod(e.target.value)}
            className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Newton">Newton divided-differences</option>
            <option value="Lagrance">Lagrange interpolation</option>
            <option value="Spline">Spline interpolation</option>
          </select>
        </div>
        <InterpolationInput
          method={method}
          x={x}
          y={y}
          setx={setX}
          sety={setY}
          setsize={setSize}
          setxvalue={setXvalue}
          xvalue = {xvalue}
          size = {size}
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
          <p>Final Result : {result}</p>
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default Interpolation;
