import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from "./App";
import LinearAlgrebra from "./components/LinearAlgrebra";
import Interpolation from "./components/Interpolation";
import Extrapolation from "./components/Extrapolation";
import Integration from "./components/Integration";
import Diffentiation from "./components/Differentiation";
const MainRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/Linear" element = {<LinearAlgrebra/>}></Route>
                <Route path="/Interpolation" element = {<Interpolation/>}></Route>
                <Route path="/Extrapolation" element = {<Extrapolation/>}></Route>
                <Route path="/Integration" element={<Integration/>}></Route>
                <Route path="/Differntiation" element={<Diffentiation/>}></Route>
            </Routes>
        </Router>
    )
}

export default MainRoutes;