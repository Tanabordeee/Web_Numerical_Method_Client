import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Swal from "sweetalert2";
import Graphical_Method from './service/Graphical_Method';
import Bisection_Method from './service/Bisection_Method';
import FalsePosition_Method from './service/FalsePosition_Method';
import NewTonRaphson from './service/NewTonRaphson';
import OnePoint_Iterration from './service/OnePoint_Iterration';
import Secant_Method from './service/Secant_Method';
import TableRootEquation from "../src/components/TableRootEquation";
function App() {
  const [method, Setmethod] = useState("Graphical");
  const [equation, SetEquation] = useState("");
  const [Xl, SetXl] = useState("");
  const [Xr, SetXr] = useState("");
  const [answer, SetAnswer] = useState("No result");
  const [loading, SetLoading] = useState(false);
  const [guess, SetGuess] = useState("");
  const [guess2, SetGuess2] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [Data, SetData] = useState({});
  const [solution , Setsolution] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/Getequation`;
        const response = await axios.get(apiUrl);
        SetData(response.data.equation); 
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to GET EQUATION",
          icon: "error"
        });
      }
    }
    fetchData();
  }, []);

  const handleGraphical = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      let graphicalResult = Graphical_Method(equation);
      SetAnswer(graphicalResult);
      SetLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });

    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  };

  const handleFalsePosition = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      let FalsePositionResult = FalsePosition_Method(equation , Xl , Xr);
      SetAnswer(FalsePositionResult.X1);
      Setsolution(FalsePositionResult.solution);
      SetLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });

    } catch (error) {
      console.error('Failed to calculate:', error);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  };

  const handleBisection = async(e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      let BisectionResult = Bisection_Method(equation , Xl , Xr);
      SetAnswer(BisectionResult.Xm);
      Setsolution(BisectionResult.solution);
      SetLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });

    } catch (error) {
      console.error('Failed to calculate:', error);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  };

  const handleOnePoint = async(e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      let OnePointResult = OnePoint_Iterration(equation , guess);
      SetAnswer(OnePointResult.new_x);
      Setsolution(OnePointResult.solution);
      SetLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });

    } catch (err) {
      console.error('Failed to calculate:', err);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  };

  const handleNewTonRaphson = async(e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      let NewTonRaphsonResult = NewTonRaphson(equation , guess);
      SetAnswer(NewTonRaphsonResult.x_new);
      Setsolution(NewTonRaphsonResult.solution);
      SetLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });

    } catch (err) {
      console.error('Failed to calculate:', err);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  };

  const handleSecantMethod = async(e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      let SecantResult = Secant_Method(equation , guess ,guess2);
      SetAnswer(SecantResult.new_x);
      Setsolution(SecantResult.solution);
      SetLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });

    } catch (err) {
      console.error('Failed to calculate:', err);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  };

  const handleEquationChange = (e) => {
    SetEquation(e.target.value);
    setInputValue(e.target.value);
  };

  const handleEquationChange_ADD = (value) => {
    SetEquation(value);
    setInputValue(value);
  };

  const renderForm = () => {
    switch (method) {
      case "Graphical":
        return (
          <form className="flex justify-center my-4" onSubmit={handleGraphical}>
            <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 43*x-180" />
            <button type="submit" className='ml-8 p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        );
      case "FalsePosition":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={handleFalsePosition}>
            <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = x^4-13" />
            <input onChange={(e) => { SetXl(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="XL value = 1.5" />
            <input onChange={(e) => { SetXr(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mb-4" placeholder="XR value = 2.0" />
            <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        );
      case "Bisection":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={handleBisection}>
            <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = x^4-13" />
            <input onChange={(e) => { SetXl(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="XL value = 1.5" />
            <input onChange={(e) => { SetXr(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mb-4" placeholder="XR value = 2.0" />
            <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        );
      case "OnePoint":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={handleOnePoint}>
            <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 0.5-x^3" />
            <input onChange={(e) => { SetGuess(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="Guess value = 1" />
            <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        );
      case "NewTonRaphson":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={handleNewTonRaphson}>
            <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 0.5-x^3" />
            <input onChange={(e) => { SetGuess(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="Guess value = 1" />
            <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        );
      case "Secant_Method":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={handleSecantMethod}>
            <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 0.5-x^3" />
            <input onChange={(e) => { SetGuess(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="Guess value = 1" />
            <input onChange={(e) => { SetGuess2(e.target.value) }} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mb-4" placeholder="Second Guess value = 2" />
            <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center my-4">
        <select onChange={(e) => Setmethod(e.target.value)} className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Graphical">Graphical Method</option>
          <option value="FalsePosition">False Position Method</option>
          <option value="Bisection">Bisection Method</option>
          <option value="OnePoint">OnePoint Iterration Method</option>
          <option value="NewTonRaphson">NewTonRaphson</option>
          <option value="Secant_Method">Secant_Method</option>
        </select>
      </div>
      {renderForm()}
      {loading ? (
        <div className='flex justify-center m-8 items-center'>
          <p className='text-2xl'>CALCULATING . . .</p>
        </div>
      ) : (
        <>
          <div className="flex justify-center m-8">
            <label htmlFor="" className='text-5xl'>Answer : {answer}</label>
          </div>
          <div className="flex justify-center my-4">
            <Calculator equation={equation} point={parseFloat(answer)} />
          </div>
          {method != "Graphical" && <div><TableRootEquation result={solution} method={method}/></div>}
        </>
      )}
      <div className=' static w-80 top-auto right-auto mx-auto mb-5 md:fixed md:top-24 md:right-11 w-80 bg-gray-100 p-5 rounded-md shadow-md'>
        <h1 className='mb-5 text-center'>EQUATION EXAMPLE</h1>
        <div className='overflow-y-auto h-80'>
          {Array.isArray(Data) && Data.map((data, index) => (
            <div key={index} className='flex bg-gray-200 p-4 rounded-lg justify-between items-center mb-5'>
              <div className='flex-1'>
                <label className='block truncate'>{data.equation}</label>
              </div>
              <button
                onClick={() => handleEquationChange_ADD(data.equation)}
                className='bg-red-500 text-white pl-5 pr-5 rounded-md hover:bg-red-600'
              >
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
