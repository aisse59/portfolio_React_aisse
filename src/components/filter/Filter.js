import React from "react";
import { Link } from "react-router-dom";
import diplome from '../../icons/Diplome.svg';
import experience from '../../icons/Experiences.svg';
import programming from '../../icons/Programming.svg'


const Filter = () => {
  return (
    <div className="flex flex-row justify-start gap-8 mt-6 mb-6 ml-8">
     <button className="flex flex-row gap-2 justify-center  items-center rounded-2xl py-2 bg-primary hover:bg-quaternary text-quaternary text-base hover:text-primary font-semibold px-5
      duration-700">
            <img src={programming} alt="diplome svg" className="h-7 w-7" />
            <Link to="/langages" className="" > Langages de programmation</Link>
      </button>
      <button className="flex flex-row gap-2 justify-center  items-center rounded-2xl py-2 bg-primary hover:bg-quaternary text-quaternary text-base hover:text-primary font-semibold px-5 duration-700">
            <img src={diplome} alt="experience svg" className="h-7 w-7" />
            <Link to="/diplomes">  Diplômes</Link>
      </button>
      <button className="flex flex-row gap-2 justify-center  items-center rounded-2xl py-2 bg-primary hover:bg-quaternary text-quaternary text-base hover:text-primary font-semibold px-5 duration-700">
            <img src={experience} alt="" className="h-7 w-7" />
            <Link to="/experiences">Expériences</Link>
      </button>
    </div>
  );
};

export default Filter;
