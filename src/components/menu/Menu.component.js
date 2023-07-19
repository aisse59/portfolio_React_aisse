import React from "react";
import { Link } from "react-router-dom";
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

   const githubProfilLink = 'https://github.com/aisse59';
   const twitterProfilLink = 'https://twitter.com/aisse59';
   const linkedinProfilLink = 'https://www.linkedin.com/in/a%C3%AFss%C3%A9-camara-468a97215';
  

    return ( 
        
    <nav id="menu" className="bg-primary w-1/4 h-screen ">
        <div  className="flex flex-col justify-around fixed bg-primary w-1/4 h-screen pb-2">

        {/* div image et nom,prenom */}
        <div className="grid justify-items-center gap-8 ">
            <img src={aisse} alt="aisse" className="w-40 h-40 border-4 rounded-full  border-quaternary object-cover mt-4" />
            <h1 className=" text-center text-quaternary font-semibold text-4xl mb-12" >Aïssé Camara</h1>
        </div>
        {/* liste naviagation */}
        <div className="text-quaternary grid justify-items-center  ">
            <ul className="space-y-9"  >
                <li > 
                    <Link to="/accueil" className="flex flex-row gap-8  ">
                        <img src={accueil} alt="accueil svg" /> 
                        <span className="  text-2xl font-semibold hover:text-tertiary duration-700" >Accueil</span>
                    </Link>
                </li>
                <li > 
                    <Link to="/competences" className="flex flex-row gap-8  ">
                        <img src={competences} alt="competence svg" /> 
                        <span className="text-2xl font-semibold hover:text-tertiary duration-700" >Compétences</span>
                    </Link>
                </li>
                <li > 
                    <Link to="/portfolio" className="flex flex-row gap-8 ">
                        <img src={portfolio} alt="portfolio svg" /> 
                        <span className="text-2xl font-semibold hover:text-tertiary duration-700" >Portfolio</span>
                    </Link>
                </li>
                <li > 
                    <Link to="/contact" className="flex flex-row gap-8 ">
                        <img src={contact} alt="contact svg" /> 
                        <span className="text-2xl font-semibold hover:text-tertiary duration-700" >Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
        {/* RESEAUX SOCIAUX */}
        <div className="flex flex-row justify-around mt-20 mb-5">
            <div className="w-14 h-14 bg-quaternary rounded-full grid place-items-center ">
                <a href={githubProfilLink} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github svg"  />
                </a>
            </div>
            <div className="w-14 h-14 bg-quaternary rounded-full grid place-items-center ">
                <a href={twitterProfilLink} target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter svg" />
                </a>
            </div>
            <div className="w-14 h-14 bg-quaternary rounded-full grid place-items-center ">
                <a href={linkedinProfilLink} target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin svg" />
                </a>
            </div>
        </div>
        {/* copyryght */}
        <div className="flex flex-row gap-2   justify-center  ">
            <img src={copyright} alt="copyright svg" />
            <span className="text-quaternary text-xs">copyright,Aïssé Camara- 2023</span>
        </div>
        </div>
        
        
      

    </nav>
    );
}
 
export default Menu;