import React, { useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import axios from 'axios';
import Swal from "sweetalert2";
import { getToken } from './service/authorize';
import { MagnifyingGlass } from 'react-loader-spinner'
function App() {
  const [method , Setmethod] = useState("Graphical")
  const [equation , SetEquation] = useState("");
  const [Xl , SetXl] = useState("");
  const [Xr , SetXr] = useState("");
  const [answer , SetAnswer] = useState("");
  const [loading , SetLoading] = useState(false);
  const [guess , SetGuess] = useState("");
  const [guess2 , SetGuess2] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [Data, SetData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const token = getToken();
        const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/Getequation`;
        const headers = {
          Authorization: `Bearer ${token}`
        };
        const response = await axios.get(apiUrl, { headers });
        console.log('API response:', response.data);
        SetData(response.data.equation); 
      } catch (error) {
        console.error('Failed to GETEQUATION', error);
        Swal.fire({
          title: "Error",
          text: "Failed to GETEQUATION",
          icon: "error"
        });
      }
    }

    fetchData();
  }, []);
  const Graphical = async (e)=>{
    e.preventDefault()
    try {
      const token = getToken(); 
      const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/Graphical`; 

      const headers = {
        Authorization: `Bearer ${token}`
      };

      const requestData = {
        equation: equation
      };
      SetLoading(true);
      const response = await axios.post(apiUrl, requestData, { headers });
      SetLoading(false)
      SetAnswer(response.data.result);

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
  const FalsePosition = async (e)=>{
    e.preventDefault()
    try {
      const token = getToken(); 
      const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/FalsePosition`; 

      const headers = {
        Authorization: `Bearer ${token}`
      };

      const requestData = {
        equation: equation ,
        Xl : Xl , 
        Xr : Xr
      };
      SetLoading(true);
      const response = await axios.post(apiUrl, requestData, { headers });
      SetLoading(false);
      SetAnswer(response.data.result);

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
  const Bisection = async (e)=>{
    e.preventDefault()
    try {
      const token = getToken(); 
      const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/Bisection`; 

      const headers = {
        Authorization: `Bearer ${token}`
      };

      const requestData = {
        equation: equation ,
        Xl : Xl , 
        Xr : Xr
      };
      SetLoading(true);
      const response = await axios.post(apiUrl, requestData, { headers });
      SetLoading(false);
      SetAnswer(response.data.result);

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
  const OnePoint = async (e)=>{
    e.preventDefault();
    try{
      const token = getToken();
       const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/OnePoint`;
       const headers = {
        Authorization: `Bearer ${token}`
      };
      const requestData = {
        equation: equation ,
        guess : guess
      };
      SetLoading(true);
      const response = await axios.post(apiUrl, requestData, { headers });
      SetLoading(false);
      SetAnswer(response.data.result);
      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });
    }catch(err){
      console.error('Failed to calculate:', err);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  }
  const NewTonRaphson = async (e) => {
    e.preventDefault();
    try{
      const token = getToken();
       const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/NewTonRaphson`;
       const headers = {
        Authorization: `Bearer ${token}`
      };
      const requestData = {
        equation: equation ,
        guess : guess
      };
      SetLoading(true);
      const response = await axios.post(apiUrl, requestData, { headers });
      SetLoading(false);
      SetAnswer(response.data.result);
      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });
    }catch(err){
      console.error('Failed to calculate:', err);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  }
  const Secant_Method = async (e) =>{
    e.preventDefault();
    try{
      const token = getToken();
       const apiUrl = `${import.meta.env.VITE_REACT_API_URL}/Secant_Method`;
       const headers = {
        Authorization: `Bearer ${token}`
      };
      const requestData = {
        equation: equation ,
        guess : guess , 
        guess2 : guess2
      };
      SetLoading(true);
      const response = await axios.post(apiUrl, requestData, { headers });
      SetLoading(false);
      SetAnswer(response.data.result);
      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success"
      });
    }catch(err){
      console.error('Failed to calculate:', err);

      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error"
      });
    }
  }
  const handleEquationChange = (e) => {
    SetEquation(e.target.value);
    setInputValue(e.target.value);
  };
  const handleEquationChange_ADD = (value) => {
    SetEquation(value)
    setInputValue(value);
  }
  const renderForm = () =>{
    switch (method){
      case "Graphical":
        return (
          <form className="flex justify-center my-4" onSubmit={Graphical}>
          <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 43*x-180" />
          <button type="submit" className='ml-8 p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        )
      case "FalsePosition":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={FalsePosition}>
          <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = x^4-13" />
          <input onChange={(e)=>{SetXl(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="XL value = 1.5" />
          <input onChange={(e)=>{SetXr(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mb-4" placeholder="XR value = 2.0" />
          <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        )
      case "Bisection":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={Bisection}>
          <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = x^4-13" />
          <input onChange={(e)=>{SetXl(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="XL value = 1.5" />
          <input onChange={(e)=>{SetXr(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mb-4" placeholder="XR value = 2.0" />
          <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        )
      case "OnePoint":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={OnePoint}>
          <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 0.5-x^3" />
          <input onChange={(e)=>{SetGuess(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="Guess value = 1" />
          <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        )
      case "NewTonRaphson":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={NewTonRaphson}>
          <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 0.5-x^3" />
          <input onChange={(e)=>{SetGuess(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="Guess value = 1" />
          <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        )
      case "Secant_Method":
        return (
          <form className="flex justify-center my-4 flex-col items-center" onSubmit={Secant_Method}>
          <input value={inputValue} onChange={handleEquationChange} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md" type="text" placeholder="equation = 0.5-x^3" />
          <input onChange={(e)=>{SetGuess(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md mt-4 mb-4" placeholder="Guess value = 1" />
          <input onChange={(e)=>{SetGuess2(e.target.value)}} className="p-2 border-solid border-2 focus:outline-none focus:border-rose-600 rounded-md  mb-4" placeholder="Guess value = 1" />
          <button type="submit" className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Calculate</button>
          </form>
        )
      }
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center my-4">
        <select onChange={(e)=>Setmethod(e.target.value)} className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Graphical">Graphical Method</option>
          <option value="FalsePosition">False Position Method</option>
          <option value="Bisection">Bisection Method</option>
          <option value="OnePoint">OnePoint Iterration Method</option>
          <option value="NewTonRaphson">NewTonRaphson</option>
          <option value="Secant_Method">Secant_Method</option>
        </select>
      </div>
      {renderForm()}
      {loading ? <div className='flex justify-center m-8 items-center'>
       <MagnifyingGlass
  visible={true}
  height="500"
  width="500"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
  </div>
 : 
      <>
        <div className="flex justify-center m-8">
        <label htmlFor="">คำตอบ : {answer} </label>
       </div>
        <div className="flex justify-center my-4">
        <Calculator  equation={equation}/>
        </div>
      </>}
      <div className='fixed top-24 right-11 w-80 bg-gray-100 p-5 rounded-md shadow-md'>
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
