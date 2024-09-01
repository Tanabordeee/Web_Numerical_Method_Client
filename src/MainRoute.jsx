import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from "./App";
import LinearAlgrebra from "./components/LinearAlgrebra";
const MainRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/Linear" element = {<LinearAlgrebra/>}></Route>
            </Routes>
        </Router>
    )
}

export default MainRoutes;