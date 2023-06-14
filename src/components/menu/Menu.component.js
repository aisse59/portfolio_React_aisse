import React from "react";
import aisse from '../../images/aisse.jpg';
import '../../App.css';
import accueil from '../../icons/Home.svg';
import competences from '../../icons/Competences.svg';
import portfolio from '../../icons/Portfolio.svg';
import contact from '../../icons/Contact.svg';
import twitter from '../../icons/Twitter.svg';
import github from '../../icons/GitHub.svg';
import linkedin from '../../icons/LinkedIn.svg';
import copyright from '../../icons/Copyright.svg';

const Menu = () => {
    return ( 
    <nav className="bg-primary w-1/4 h-full">
        {/* div image et nom,prenom */}
        <div className="grid justify-items-center gap-8 ">
            <img src={aisse} alt="aisse" className="w-40 h-40 border-4 rounded-full  border-quaternary object-cover mt-10" />
            <h1 className="text-quaternary font-semibold text-4xl mb-24" style={{fontFamily:'Poppins-Semibold'}}>Aïssé Camara</h1>
        </div>
        {/* liste naviagation */}
        <div className="text-quaternary grid justify-items-center  ">
            <ul className="space-y-9"  >
                <li > 
                    <a href="./" className="flex flex-row gap-8  ">
                        <img src={accueil} alt="accueil svg" /> 
                        <span className="text-2xl font-semibold" style={{fontFamily:'Poppins-Semibold'}}>Accueil</span>
                    </a>
                </li>
                <li > 
                    <a href="./" className="flex flex-row gap-8  ">
                        <img src={competences} alt="competence svg" /> 
                        <span className="text-2xl font-semibold" style={{fontFamily:'Poppins-Semibold'}}>Compétences</span>
                    </a>
                </li>
                <li > 
                    <a href="./" className="flex flex-row gap-8 ">
                        <img src={portfolio} alt="portfolio svg" /> 
                        <span className="text-2xl font-semibold" style={{fontFamily:'Poppins-Semibold'}}>Portfolio</span>
                    </a>
                </li>
                <li > 
                    <a href="./" className="flex flex-row gap-8 ">
                        <img src={contact} alt="contact svg" /> 
                        <span className="text-2xl font-semibold" style={{fontFamily:'Poppins-Semibold'}}>Contact</span>
                    </a>
                </li>
            </ul>
        </div>
        {/* RESEAUX SOCIAUX */}
        <div className="flex flex-row gap-12 justify-center mt-28 mb-28">
            <div className="w-16 h-16 bg-quaternary rounded-full grid place-items-center ">
                <a href="./" className="  ">
                    <img src={github} alt="github svg"  />
                </a>
            </div>
            <div className="w-16 h-16 bg-quaternary rounded-full grid place-items-center ">
                <a href="./">
                    <img src={twitter} alt="twitter svg" />
                </a>
            </div>
            <div className="w-16 h-16 bg-quaternary rounded-full grid place-items-center ">
                <a href="./">
                    <img src={linkedin} alt="linkedin svg" />
                </a>
            </div>
        </div>
        {/* copyryght */}
        <div className="flex flex-row gap-2 justify-center pb-8">
            <img src={copyright} alt="copyright svg" />
            <span className="text-quaternary text-xs" style={{fontFamily:'Poppins-Regular'}}>copyright,Aïssé Camara- 2023</span>
        </div>
       
    </nav>
    );
}
 
export default Menu;