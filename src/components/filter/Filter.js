import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import diplome from '../../icons/Diplome.svg';
import experience from '../../icons/Experiences.svg';
import programming from '../../icons/Programming.svg';
import './Filter.style.css';

const Filter = () => {
  const [activeLink, setActiveLink] = useState();

  const handleClick = (name) => {
    setActiveLink(name);
  };

  useEffect(() => {
    // Mettre à jour l'état "activeLink" avec le nom du lien correspondant à l'URL actuelle
    const currentPath = window.location.pathname;
    if (currentPath === '/langages') {
      setActiveLink('langages');
    } else if (currentPath === '/diplomes') {
      setActiveLink('diplomes');
    } else if (currentPath === '/experiences') {
      setActiveLink('experiences');
    }
  }, []);

  // const activeLinkStyle = {
  //   color: "#02000D",
  //   backgroundColor: "#D9BD9C",
  // };

  return (
    <div className="flex flex-col sm:justify-center md:flex-row md:justify-start gap-2 md:gap-8 mt-6 mb-6 mx-5 md:ml-8">
      <NavLink
        to="/langages"
        className={
          activeLink === "langages"
            ? "flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700 active_styles"
            : "flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700"
        }
        onClick={() => handleClick("langages")}
      >
        <img src={programming} alt="diplome svg" className="h-7 w-7" />
        Langages de programmation
      </NavLink>
      <NavLink
        to="/diplomes"
        className={
          activeLink === "diplomes"
            ? "flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700 active_styles"
            : "flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700"
        }
        onClick={() => handleClick("diplomes")}
      >
        <img src={diplome} alt="experience svg" className="h-7 w-7" />
        Diplômes
      </NavLink>
      <NavLink
        to="/experiences"
        className={
          activeLink === "experiences"
            ? "flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700 active_styles"
            : "flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700"
        }
        onClick={() => handleClick("experiences")}
      >
        <img src={experience} alt="" className="h-7 w-7" />
        Expériences
      </NavLink>
    </div>
  );
};

export default Filter;
