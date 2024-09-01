import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const LinearAlgebra = () => {
    const [Size, SetSize] = useState(0);
    const [Arr2D, SetArr2D] = useState([]);

    useEffect(() => {
        const newArr = Array.from({ length: Size }, () => Array(Size).fill(0));
        SetArr2D(newArr);
    }, [Size]);

    const createGrid = () => {
        return Arr2D.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-3">
                {row.map((_, colIndex) => (
                    <input
                        className="border w-full h-20 text-center mb-3"
                        onChange={(e) => SetArr(e.target.value, rowIndex, colIndex)}
                        key={`${rowIndex}-${colIndex}`}
                        type="text"
                        placeholder={`${rowIndex * Size + colIndex + 1}`}
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
                        return parseInt(value , 10) || 0;
                    }
                        return c;
                })
            }
            return r;
        });
        SetArr2D(updatedArr);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center my-4 items-center">
                <input
                    className="border mx-2 mb-5"
                    placeholder="INPUT SIZE"
                    onChange={(e) => SetSize(parseInt(e.target.value, 10))}
                />
                <div className="w-[50%] h-[400px] bg-white">
                    {Size > 0 && createGrid()} 
                </div>
            </div>
        </>
    );
};

export default LinearAlgebra;
