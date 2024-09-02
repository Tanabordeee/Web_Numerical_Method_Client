import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { isInteger } from "mathjs";
import Swal from "sweetalert2";
import Cramer from "../service/Cramer";
import GuassElimination from "../service/GaussElimination";
import GuassJordan from "../service/Guass-Jordan";
import LU_Decomposition from "../service/LU_Decomposition";
import MatrixInversion from "../service/MatrixInversion";
import Cholesky_Decomposition from "../service/Cholesky";
const LinearAlgebra = () => {
const [Size, SetSize] = useState(0);
const [MatrixA, SetMatrixA] = useState([]);
const [MatrixB , SetMatrixB] = useState([]);
const [Method , SetMethod] = useState("Cramer");
const [Answer , SetAnswer] = useState([]);
const [Loading , SetLoading] = useState(false);
useEffect(() => {
if(Size > 0 && isInteger(Size)){
const newArr = Array.from({ length: Size }, () => Array(Size).fill(0));
const newB = Array(Size).fill(0);
SetMatrixA(newArr);
SetMatrixB(newB);
SetAnswer(newB)
}else{
SetMatrixA([]);
SetMatrixB([]);
}
}, [Size]);

const createGrid = () => {
return MatrixA.map((row, rowIndex) => (
    <div key={rowIndex} className="flex gap-3">
        {row.map((_, colIndex) => (
            <input className="border w-full h-20 text-center mb-3 rounded-lg" onChange={(e)=> SetArr(e.target.value, rowIndex,colIndex)}
            key={`${rowIndex}-${colIndex}`}
            type="text"
            placeholder={`a${rowIndex * Size + colIndex + 1}`}
            />
    ))}
    </div>
));
};

const SetArr = (value, row, col) => {
    const updatedArr = MatrixA.map((r, rowIndex) => {
    if(rowIndex === row){
        return r.map((c , colIndex) =>{
            if(colIndex === col){
                return parseInt(value , 10);
            }
            return c;
        })
    }
        return r;
    });
    SetMatrixA(updatedArr);
};

const SetArryB = (value , row)=>{
    const updateArr = MatrixB.map((r , rowIndex) =>{
        if(rowIndex === row){
            return parseInt(value , 10);
        }
        return r;
    })
    SetMatrixB(updateArr)
}
const Cramer_Calculate = async (e) => {
    e.preventDefault();
    try {
        SetLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        let CramerResult = Cramer(MatrixA, MatrixB);
        SetAnswer(CramerResult);
        SetLoading(false);

        Swal.fire({
            title: "Success",
            text: "Calculation successful!",
            icon: "success"
        });

    } catch (err) {
        SetLoading(false);
        Swal.fire({
            title: "Error",
            text: "Failed to calculate. Please try again.",
            icon: "error"
        });
    }
};
const GuassEliminations = async (e) =>{
    e.preventDefault();
    try {
        SetLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        let GuassEliminationResult = GuassElimination(MatrixA, MatrixB);
        SetAnswer(GuassEliminationResult);
        SetLoading(false);

        Swal.fire({
            title: "Success",
            text: "Calculation successful!",
            icon: "success"
        });

    } catch (err) {
        SetLoading(false);
        Swal.fire({
            title: "Error",
            text: "Failed to calculate. Please try again.",
            icon: "error"
        });
    }
}
const GuassJordans = async (e) =>{
    e.preventDefault();
    try {
        SetLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        let GuassJordanResult = GuassJordan(MatrixA, MatrixB);
        SetAnswer(GuassJordanResult);
        SetLoading(false);

        Swal.fire({
            title: "Success",
            text: "Calculation successful!",
            icon: "success"
        });

    } catch (err) {
        SetLoading(false);
        Swal.fire({
            title: "Error",
            text: "Failed to calculate. Please try again.",
            icon: "error"
        });
    }
}
const Lu_Decompositions = async (e) =>{
    e.preventDefault();
    try {
        SetLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        let Lu_Decomposition_Result = LU_Decomposition(MatrixA, MatrixB);
        SetAnswer(Lu_Decomposition_Result);
        SetLoading(false);

        Swal.fire({
            title: "Success",
            text: "Calculation successful!",
            icon: "success"
        });

    } catch (err) {
        SetLoading(false);
        Swal.fire({
            title: "Error",
            text: "Failed to calculate. Please try again.",
            icon: "error"
        });
    }
}
const MatrixInversions = async (e) =>{
    e.preventDefault();
    try {
        SetLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        let MatrixInversionResult = MatrixInversion(MatrixA, MatrixB);
        SetAnswer(MatrixInversionResult);
        SetLoading(false);

        Swal.fire({
            title: "Success",
            text: "Calculation successful!",
            icon: "success"
        });

    } catch (err) {
        SetLoading(false);
        Swal.fire({
            title: "Error",
            text: "Failed to calculate. Please try again.",
            icon: "error"
        });
    }
}
const Cholseky =  async (e) =>{
    e.preventDefault();
    try {
        SetLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        let CholeskyResult = Cholesky_Decomposition(MatrixA, MatrixB);
        SetAnswer(CholeskyResult);
        SetLoading(false);

        Swal.fire({
            title: "Success",
            text: "Calculation successful!",
            icon: "success"
        });

    } catch (err) {
        SetLoading(false);
        Swal.fire({
            title: "Error",
            text: "Failed to calculate. Please try again.",
            icon: "error"
        });
    }
}
const render = (e)=>{
    switch(Method){
        case "Cramer":
            return(
                <form onSubmit={Cramer_Calculate}>
                    <button type="submit" className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3">CALCULATE</button>
                </form>
            )
        case "GuassElimination":
                return(
                    <form onSubmit={GuassEliminations}>
                        <button type="submit" className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3">CALCULATE</button>
                    </form>
                )
        case "GuassJordan":
            return(
                <form onSubmit={GuassJordans}>
                    <button type="submit" className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3">CALCULATE</button>
                </form>
            )
        case "MatirxInversion":
                return(
                    <form onSubmit={MatrixInversions}>
                        <button type="submit" className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3">CALCULATE</button>
                    </form>
                )
        case "Lu_Decomposition":
                return(
                        <form onSubmit={Lu_Decompositions}>
                            <button type="submit" className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3">CALCULATE</button>
                        </form>
                )
        case "Cholesky_Decomposition":
                return(
                        <form onSubmit={Cholseky}>
                            <button type="submit" className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3">CALCULATE</button>
                        </form>
                )
        default :
            return null;
    }
}
return (
<>
    <Navbar />
    <div className="flex flex-col justify-center my-4 items-center">
        <input className="border mx-2 mb-2 p-3 rounded-lg" placeholder="INPUT SIZE" onChange={(e)=>
        SetSize(parseInt(e.target.value, 10))}
        />
        <div className="flex justify-center my-4">
            <select className="cursor-pointer p-2 border border-gray-300
                rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={(e) => SetMethod(e.target.value)}>
                <option selected value="Cramer">Cramer's rule</option>
                <option value="GuassElimination">Guass elimination</option>
                <option value="GuassJordan">Guass Jordan elimination</option>
                <option value="MatirxInversion">Matrix Inversion</option>
                <option value="Lu_Decomposition">Lu Decomposition Method</option>
                <option value="Cholesky_Decomposition">Cholesky Decomposition Method</option>
            </select>
        </div>
        {render()}
        {Loading ? (<p>CALCULATING ... </p>) : (<p className="text-5xl m-10">Answer : {Answer.length > 0 ? Answer.map((result, index) => (<span key={index}>X{index+1} = {result}  </span>)) : "No result"}</p>)}
        <div className="flex items-center mt-2 justify-center w-[50%]">
            <div className="flex flex-col justify-center items-center">
                <p className="mb-3 text-4xl">[A]</p>
                <div className="bg-white">
                    {Size > 0 && createGrid()}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center h-[100%]">
                <p className="mb-3 text-4xl">{"{X}"}</p>
                <div className="bg-white">
                    {MatrixA.map((_ , index) =>{
                    return <input className="text-center border w-[60%] h-20 mb-3 rounded-lg" disabled key={index}
                        placeholder={`X${index + 1}`}></input>
                    })}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center h-[100%]">
                <p className="text-4xl">=</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center h-[100%]">
                <p className="mb-3 text-4xl">[B]</p>
                <div className="bg-white">
                    {MatrixB.map((_ , index) =>{
                    return <input className="text-center border w-[60%] h-20 mb-3 rounded-lg" key={index}
                        placeholder={`b${index + 1}`} onChange={(e)=> SetArryB(e.target.value , index)}></input>
                    })}
                </div>
            </div>
        </div>
    </div>
</>
);
};

export default LinearAlgebra;