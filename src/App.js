import React from "react";
import { Route,Routes,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Competences from "./pages/Competences";
import Langages from "./components/langages/Langages";
import Menu from "./components/menu/Menu.component";
import ImgBG from './images/imgBG.png';
import Diplome from "./components/diplome/Diplome";
import Experiences from "./components/experiences/Experiences";
import Contact from "./pages/Contact";
import "./responsive.css";
import MenuResponsive from "./components/menu_responsive/MenuResponsive";



function App() {
  return (
    
    
     
<div className="flex ">
<Menu/>
    {/* backgroundImage */}
    <div className="flex-1 bg-cover bg-black h-screen " style={{backgroundImage: `url(${ImgBG})`,  overflowY: 'auto'}}>
        {/* background opacity */}
        <div className="inset-0 bg-opacity-50 bg-black h-screen" style={{ overflowY: 'auto'}}>
          <MenuResponsive/>
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/accueil" />} />
            <Route path="/accueil" element={<Home/>}/> 
            <Route path="/portfolio" element={<Portfolio/>}/> 
            <Route path="/competences" element={<Competences/>}/> 
            <Route path="/langages" element={<Langages/>}/>
            <Route path="/diplomes" element={<Diplome/>}/>
            <Route path="/experiences" element={<Experiences/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Home />} />
          </Routes> 
        </div>
  </div>
</div>
    

  );
}

export default App;
