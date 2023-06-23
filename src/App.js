import React from "react";
import { Route,Routes,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Competences from "./pages/Competences";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="accueil" element={<Home/>}/> 
        <Route path="portfolio" element={<Portfolio/>}/> 
        <Route path="competences" element={<Competences/>}/> 
      </Routes>
        
    </>
  );
}

export default App;
