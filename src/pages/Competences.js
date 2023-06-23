import React from "react";
import Menu from "../components/menu/Menu.component";
import ImgBG from '../../src/images/imgBG.png';
// import Diplome from "../components/diplome/Diplome";
// import Experiences from "../components/experiences/Experiences";
// import Langages from "../components/langages/Langages";
import Filter from "../components/filter/Filter";

const Competences = () => {
    return ( 
        <div className="flex ">
        <Menu/> 
        {/* backgroundImage */}
    <div className="flex-1 bg-cover bg-black relative" style={{backgroundImage: `url(${ImgBG})`,  overflowY: 'auto'}}>

        {/* background opacity */}
        <div className="absolute inset-0 bg-opacity-50 bg-black" style={{ overflowY: 'auto'}}>
            <Filter/>
        </div>
    </div>
</div>
    );
}
 
export default Competences;