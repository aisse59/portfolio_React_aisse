import React from "react";
import { Route,Routes,Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <>
    
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="accueil" element={<Home/>}/> 
        <Route path="Portfolio" element={<Portfolio/>}/> 
      </Routes>
    </>
  );
}

export default App;
