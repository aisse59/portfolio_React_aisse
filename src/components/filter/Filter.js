import React from "react";
import { Link } from "react-router-dom";
import diplome from '../../icons/Diplome.svg';
import experience from '../../icons/Experiences.svg';
import programming from '../../icons/Programming.svg'


const Filter = () => {
  return (
    <div className="flex flex-row gap-8 mt-6 mb-6 ml-8">
     <button className="flex flex-row gap-2  items-center rounded-2xl h-12 bg-primary hover:bg-quaternary text-quaternary hover:text-primary font-semibold pl-2 pr-2">
            <img src={programming} alt="diplome svg" className="h-7 w-7" />
            <Link to="/langages" className="" > Langages de programmation</Link>
      </button>
      <button className="flex flex-row gap-2  items-center rounded-2xl h-12 bg-primary hover:bg-quaternary text-quaternary hover:text-primary font-semibold pl-2 pr-2">
            <img src={diplome} alt="experience svg" className="h-7 w-7" />
            <Link to="/diplomes">  Diplômes</Link>
      </button>
      <button className="flex flex-row gap-2  items-center rounded-2xl h-12 bg-primary hover:bg-quaternary text-quaternary hover:text-primary font-semibold pl-2 pr-2">
            <img src={experience} alt="" className="h-7 w-7" />
            <Link to="/experiences">Expériences</Link>
      </button>
    </div>
  );
};

export default Filter;
