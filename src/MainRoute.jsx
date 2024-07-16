import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from "./App";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
const MainRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/login" element={<LoginComponent/>}></Route>
                <Route path="/register" element={<RegisterComponent/>}></Route>
            </Routes>
        </Router>
    )
}

export default MainRoutes;