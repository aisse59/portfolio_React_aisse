import React from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import Menu from "./components/menu/Menu.component";
import Home from "./pages/Home";


function App() {
  return (
    <>
    
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="accueil" element={<Home/>}/> 
      </Routes>
    </>
  );
}

export default App;
