import { useNavigate } from "react-router-dom";
const Navbar = ()=>{
    const navigate = useNavigate();
    return (
        <>
        <div className="flex justify-around text-xl justify-items-center p-3">
            <h1 className="p-3">
                Numerical Method
            </h1>
            <div className="flex ">
                <button onClick={()=> navigate("/")} className="border p-2 mr-5 rounded-md hover:bg-green-200">Root of Equation</button>
                <button onClick={()=> navigate("/Linear")} className="border p-2 mr-5 rounded-md hover:bg-green-200">Linear algebra equation</button>
                <button className="border p-2 mr-5 rounded-md hover:bg-green-200">Extrapolation</button>
                <button className="border p-2 mr-5 rounded-md hover:bg-green-200">Integration</button>
                <button className="border p-2 mr-5 rounded-md hover:bg-green-200">Differentiation</button>
            </div>
        </div>
        </>
    )
}

export default Navbar;