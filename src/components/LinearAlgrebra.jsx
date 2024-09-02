import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const LinearAlgebra = () => {
    const [Size, SetSize] = useState(0);
    const [Arr2D, SetArr2D] = useState([]);
    const [ArrB , SetArrB] = useState([]);
    useEffect(() => {
        if(Size > 0){
            const newArr = Array.from({ length: Size }, () => Array(Size).fill(0));
            const newB = Array(Size).fill(0);
            SetArr2D(newArr);
            SetArrB(newB);
        }else{
            SetArr2D([]);
            SetArrB([]);
        }
    }, [Size]);

    const createGrid = () => {
        return Arr2D.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-3">
                {row.map((_, colIndex) => (
                    <input
                        className="border w-full h-20 text-center mb-3 rounded-lg"
                        onChange={(e) => SetArr(e.target.value, rowIndex, colIndex)}
                        key={`${rowIndex}-${colIndex}`}
                        type="text"
                        placeholder={`a${rowIndex * Size + colIndex + 1}`}
                    />
                ))}
            </div>
        ));
    };
    const SetArr = (value, row, col) => {
        const updatedArr = Arr2D.map((r, rowIndex) => {
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
        SetArr2D(updatedArr);
    };
    const SetArryB = (value , row)=>{
        const updateArr = ArrB.map((r , rowIndex) =>{
            if(rowIndex === row){
                return parseInt(value , 10);
            }
            return r;
        })
        SetArrB(updateArr)
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center my-4 items-center">
                <input
                    className="border mx-2 mb-5 p-3 rounded-lg"
                    placeholder="INPUT SIZE"
                    onChange={(e) => SetSize(parseInt(e.target.value, 10))}
                />
                <div className="flex items-center mt-2 gap-5 justify-center w-[50%]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="mb-3 text-4xl">[A]</p>
                        <div className="bg-white">
                            {Size > 0 && createGrid()} 
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center h-[100%]">
                        <p className="mb-3 text-4xl">{"{X}"}</p>
                        <div className="bg-white">
                            {Arr2D.map((_ , index) =>{
                                return <input className="text-center border w-full h-20 mb-3 rounded-lg" disabled key={index} placeholder={`X${index + 1}`}></input>
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center h-[100%]">
                        <p className="text-4xl">=</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center h-[100%]">
                        <p className="mb-3 text-4xl">[B]</p>
                        <div className="bg-white">
                            {ArrB.map((_ , index) =>{
                                return <input className="text-center border w-full h-20 mb-3 rounded-lg" key={index} placeholder={`b${index + 1}`} onChange={(e) => SetArryB(e.target.value , index)}></input>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinearAlgebra;
