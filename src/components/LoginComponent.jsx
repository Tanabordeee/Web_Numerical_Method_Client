import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { authenticate } from "../service/authorize";
import { useNavigate } from "react-router-dom";

const LoginComponent = ()=>{
    const navigate = useNavigate()
    const [data , SetData] = useState({
        email:"",
        password:""
    })
    const inputValue = name => e => {
        SetData({...data , [name] : e.target.value})
    };
    const {email , password} = data;
    const Login =async e =>{
        e.preventDefault()
        try{
            const res = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/Login` , {
                email:email,
                password:password
            }).then(res =>{
                Swal.fire({
                    title: "Success",
                    text: "Login สำเร็จ",
                    icon: "success"
                })
                authenticate(res , ()=>navigate("/"))
            }).catch(err =>{
                Swal.fire({
                    title: "FAILED",
                    text: "Login ไม่สำเร็จ",
                    icon: "error"
                });
            })
        }catch(err){
            console.log(err);
        }
    }
    const [check, setcheck] = useState(false);
    return(
        <>
            <div className="min-h-screen flex justify-center items-center content-center flex-col">
                <div className="bg-gray-200 p-6 rounded-md">
                <h1 className="text-center text-2xl">
                    LOGIN FORM
                </h1>
                <form onSubmit={Login}>
                    <h2 className="mb-3">Email</h2>
                    <input onChange={inputValue("email")} value={email} className="mb-3 p-2 rounded-md w-96 focus:outline-none" type="email" placeholder="Enter email"/>
                    <h2 className="mb-3">Password</h2>
                    <input onChange={inputValue("password")} value={password} className="mb-3 p-2 rounded-md w-96 focus:outline-none" type={check ? "text" : "password" } placeholder="Enter password" />
                    <button class="fas fa-eye ml-5" type="button" onClick={()=>{setcheck(!check)}}></button>
                    <button className="block text-center w-96 bg-green-300 p-2 rounded-md mt-5 hover:bg-green-200" type="submit">LOGIN</button>
                </form>
                <button onClick={()=>navigate("/register")} className="block text-center w-96 bg-red-300 p-2 rounded-md mt-5  hover:bg-red-200">Register</button>
                </div>
            </div>
            
        </>
    )
}

export default LoginComponent;