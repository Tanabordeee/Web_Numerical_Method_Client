import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { authenticate } from "../service/authorize";
import { useNavigate } from "react-router-dom";

const RegisterComponent = ()=>{
    const navigate = useNavigate()
    const [data , SetData] = useState({
        username :"",
        email:"",
        password:""
    })
    const inputValue = name => e => {
        SetData({...data , [name] : e.target.value})
    };
    const {email , password , username} = data;
    const Register =async e =>{
        e.preventDefault()
        try{
            const res = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/Register` , {
                username : username,
                email:email,
                password:password
            }).then(res =>{
                Swal.fire({
                    title: "Success",
                    text: "Login สำเร็จ",
                    icon: "success"
                })
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
        try{
            const res_login = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/Login` , {
                email:email,
                password:password
            }).then(res =>{
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
                    REGISTER FORM
                </h1>
                <form onSubmit={Register}>
                    <h2 className="mb-3">Email</h2>
                    <input onChange={inputValue("email")} value={email} className="mb-3 p-2 rounded-md w-96 focus:outline-none" type="email" placeholder="Enter email"/>
                    <h2 className="mb-3">Username</h2>
                    <input onChange={inputValue("username")} value={username} className="mb-3 p-2 rounded-md w-96 focus:outline-none" type="text" placeholder="Enter username"/>
                    <h2 className="mb-3">Password</h2>
                    <input onChange={inputValue("password")} value={password} className="mb-3 p-2 rounded-md w-96 focus:outline-none" type={check ? "text" : "password" } placeholder="Enter password" />
                    <button class="fas fa-eye ml-5" type="button" onClick={()=>{setcheck(!check)}}></button>
                    <button className="block text-center w-96 bg-green-300 p-2 rounded-md mt-5 hover:bg-green-200" type="submit">Register</button>
                </form>
                </div>
            </div>
            
        </>
    )
}

export default RegisterComponent;