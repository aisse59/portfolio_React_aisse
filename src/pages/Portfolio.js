import React from "react";
import Menu from "../components/menu/Menu.component";
import Scrollbar from "../components/scrollbar/Scrollbar";
import Category from "../components/category/Category";
import ImgBG from '../../src/images/imgBG.png';



const Portfolio = () => {

    return ( 
        <div className="flex">
                <Menu/> 
                {/* backgroundImage */}
            <div className="flex-1 bg-cover bg-black relative" style={{backgroundImage: `url(${ImgBG})`}}>
                {/* background opacity */}
                <div className="absolute inset-0 bg-opacity-50 bg-black">
                 <Scrollbar/> 
               

                 <Category/>
               

                 
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;