import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    } else {setActiveLink('langages')}
  }, []);

  console.log(activeLink);

  

  return (
    <div className="flex flex-col sm:justify-center md:flex-row md:justify-start gap-2 md:gap-8 mt-6 mb-6 mx-5 md:ml-8">
      <Link
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
      </Link>
      <Link
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
      </Link>
      <Link
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
      </Link>
    </div>
  );
};

export default Filter;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import diplome from '../../icons/Diplome.svg';
// import experience from '../../icons/Experiences.svg';
// import programming from '../../icons/Programming.svg';
// import './Filter.style.css';

// const Filter = () => {
//   const [activeLink, setActiveLink] = useState('langages'); // Définir une valeur par défaut

//   const [links,setLinks] = useState([
//     { name: "langages", label: "Langages de programmation", icon: programming },
//     { name: "diplomes", label: "Diplômes", icon: diplome },
//     { name: "experiences", label: "Expériences", icon: experience },
//   ]);

  


//   useEffect(() => {
//     // Mettre à jour l'état "activeLink" avec le nom du lien correspondant à l'URL actuelle
//     const currentPath = window.location.pathname;
//     const linkName = links.find(link => link.name === currentPath.substr(1))?.name;
//     setActiveLink(linkName || 'langages');
//   }, [links]);

//   console.log(activeLink);
//   return (
//     <div className="flex flex-col sm:justify-center md:flex-row md:justify-start gap-2 md:gap-8 mt-6 mb-6 mx-5 md:ml-8">
//       {links.map(({ name, label, icon }) => (
//         <Link
//           key={name}
//           to={`/${name}`}
//           className={`flex flex-row gap-2 justify-center items-center rounded-2xl py-2 bg-primary text-quaternary text-base hover:text-primary hover:bg-quaternary font-semibold px-5 duration-700 ${activeLink === name ? 'active_styles' : ''}`}
//           onClick={() => setActiveLink(name)}
//         >
//           <img src={icon} alt={`${name} svg`} className="h-7 w-7" />
//           {label}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Filter;

