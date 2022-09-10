import { BrowserRouter,Route,Routes } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Navbar from "./components/pages/Navbar";
import React from "react";
import Home from "./components/pages/Home";

 const App = () => {
    
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/registration" element={<Registration/>}/>    
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
