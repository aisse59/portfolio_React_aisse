import React from "react";
import Menu from "../components/menu/Menu.component";
import ImgBG from '../../src/images/imgBG.png';

const Home = () => {
    
    return ( 
    
        <div className="flex">
         <Menu/> 

         <div className="flex-1 bg-cover bg-black relative" style={{backgroundImage: `url(${ImgBG})`}}>
            <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
            ggg
         </div>
        </div>
    
    );
}
 
export default Home;