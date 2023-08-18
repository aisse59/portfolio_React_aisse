import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MenuResponsive.css';
import menu from '../../icons/Xbox Menu.svg';
import close from '../../icons/Close.svg';
import aisse from '../../images/aisseee.jpg';
import accueil from '../../icons/Home.svg';
import competences from '../../icons/Competences.svg';
import portfolio from '../../icons/Portfolio.svg';
import contact from '../../icons/Contact.svg';
import twitter from '../../icons/Twitter.svg';
import github from '../../icons/GitHub.svg';
import linkedin from '../../icons/LinkedIn.svg';
import copyright from '../../icons/Copyright.svg';


const MenuResponsive = () => {

    const [clicked, setClicked] =useState(false);

    const handleChange = () => {
        setClicked(!clicked)
       }

       const githubProfilLink = 'https://github.com/aisse59';
       const twitterProfilLink = 'https://twitter.com/aisse59';
       const linkedinProfilLink = 'https://www.linkedin.com/in/a%C3%AFss%C3%A9-camara-468a97215';
    
       const [linkActive, setLinkActive] = useState();
       
    
       const handleClick = (name) => {
        setLinkActive(name);
        
       }
    
       useEffect(() => {
        
        const currentPath = window.location.pathname;
        if ( currentPath === '/accueil') {
            setLinkActive('accueil');
        } else if ( currentPath === '/competences') {
            setLinkActive('competences');
        } else if ( currentPath === '/portfolio') {
            setLinkActive('portfolio');
        } else if ( currentPath === '/contact') {
            setLinkActive('contact');
        }
       }, []);   

    return ( 
        <nav >
            {/* MenuResponsive */}
            <div id="mobile" onClick={handleChange}>
                <div id="bar" className={clicked ? 'close-menu' : 'open-menu'}>
                    {clicked ? <img src={close} alt="close" /> : <img src={menu} alt="menu" />}
                </div>
            </div>
          

            {/* liste naviagation */}
            <div id="navbar" className={clicked ? "#navbar act" : "#navbar"}  >
            <div id="mobile" onClick={handleChange}>
                <div id="bar" className={clicked ? 'close-menu-close': 'open-menu-open'}>
                    {clicked ? <img src={close} alt="close" /> : <img src={menu} alt="menu" />}
                </div>
            </div>

                  {/* div image et nom,prenom */}
            <div className="grid justify-items-center gap-8 ">
                <img src={aisse} alt="aisse" className="w-40 h-40 border-4 rounded-full  border-quaternary object-cover mt-4" />
                <h1 className=" text-center text-quaternary font-semibold text-4xl mb-12" >Aïssé Camara</h1>
            </div>

                <ul className="grid justify-center gap-2">
                    <li > 
                        <Link 
                            to="/accueil" 
                            className={ linkActive === "accueil" 
                            ? 'flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 active'
                            : 'flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 '}
                            onClick={() => handleClick('accueil')} 
                            >
                            <img src={accueil} alt="accueil svg"  /> 
                            <span>Accueil</span>
                        </Link>
                    </li>
                    <li > 
                        <Link
                            to="/competences" 
                            className={ linkActive === "competences" 
                            ?' flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 active'
                            : 'flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 '}
                            onClick={() => handleClick('competences')} 
                            >
                            <img src={competences} alt="competence svg" /> 
                            <span >Compétences</span>
                        </Link>
                    </li>
                    <li > 
                        <Link
                            to="/portfolio" 
                            className={ linkActive === "portfolio" 
                            ?' flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 active'
                            : 'flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 '}
                            onClick={() => handleClick('portfolio')} 
                            >
                            <img src={portfolio} alt="portfolio svg" /> 
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li > 
                        <Link
                            to="/contact" 
                            className={ linkActive === "contact" ?' flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 active': 'flex flex-row gap-8 text-2xl font-semibold hover:text-tertiary duration-700 '}
                            onClick={() => handleClick('contact')} 
                            >
                            <img src={contact} alt="contact svg" /> 
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
                    
                    {/* RESEAUX SOCIAUX */}
                <div className="flex flex-row gap-5 justify-around py-8 ">
                    <div className="w-11 h-11 bg-quaternary rounded-full grid place-items-center ">
                        <a href={githubProfilLink} target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github svg"  />
                        </a>
                    </div>
                    <div className="w-11 h-11 bg-quaternary rounded-full grid place-items-center ">
                        <a href={twitterProfilLink} target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter svg" />
                        </a>
                    </div>
                    <div className="w-11 h-11 bg-quaternary rounded-full grid place-items-center ">
                        <a href={linkedinProfilLink} target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin svg" />
                        </a>
                    </div>
                </div>
                    {/* copyryght */}
                <div id="copyright" className="flex flex-row gap-2 justify-center absolute  bottom-3 ">
                    <img src={copyright} alt="copyright svg" />
                    <span className="text-quaternary text-xs">copyright,Aïssé Camara- 2023</span>
                </div>
            </div>

        </nav>

     );
}
 
export default MenuResponsive;