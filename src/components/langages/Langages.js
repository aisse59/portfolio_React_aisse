import React from "react";
import figma from '../../icons/figma-plain.svg';
import illustrator from '../../icons/illustrator-line.svg';
import photoshop from '../../icons/photoshop-line.svg';
import html from '../../icons/html5-plain.svg';
import css from '../../icons/css3-plain.svg';
import js from '../../icons/JS.svg';
import sass from '../../icons/sass-original.svg';
import bootstrap from '../../icons/bootstrap-plain.svg';
import tailwind from '../../icons/tailwindcss-plain.svg';
import react from '../../icons/react-original.svg';
import symfony from '../../icons/symfony.svg';
import php from '../../icons/php-plain.svg';
import mysql from '../../icons/mysql-original.svg';
import mongoDB from '../../icons/mongodb-plain.svg';
import postman from '../../icons/postman.svg';
import nodejs from '../../icons/nodejs-plain.svg';
import webpack from '../../icons/webpack-plain.svg';
import Filter from "../filter/Filter";
import programming from '../../icons/Programming.svg';

const Langages = () => {
    return (  
        <div className="w-full">
        <Filter />
        <div className=" flex justify-center gap-4 mt-10">
         <img src={programming} alt="experience svg" />
         <h1 className="text-4xl text-quaternary font-bold">Langages de programmation</h1>
      </div>
        {/* front-end */}
            <h2 className="text-2xl font-bold ml-6 mt-10"><span className="text-secondary font-bold text-xl">01. </span> Front-End  </h2>
            <div className="flex flex-wrap w-[80%] mt-12 mb-24 mx-auto justify-start gap-2">
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={html} alt="html svg" className="h-10 w-10" />
                    <span className="font-semibold">Html</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={css} alt="css svg" className="h-10 w-10" />
                    <span className="font-semibold">Css</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={js} alt="js svg" className="h-10 w-10" />
                    <span className="font-semibold">Javascript</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={sass} alt="sass svg" className="h-10 w-10" />
                    <span className="font-semibold">Sass</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={bootstrap} alt="bootstrap svg" className="h-10 w-10" />
                    <span className="font-semibold">Bootstrap</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={tailwind} alt="tailwind svg" className="h-10 w-10" />
                    <span className="font-semibold">Tailwind</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={react} alt="react svg" className="h-10 w-10" />
                    <span className="font-semibold">React</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={webpack} alt="webpack svg" className="h-10 w-10" />
                    <span className="font-semibold">Webpack</span>
                </div>
            </div>

            {/* back-end */}
            <h2 className="text-2xl font-bold ml-6"><span className="text-secondary font-bold text-xl">02. </span> Back-End  </h2>
            <div className="flex flex-wrap w-[80%] mt-12 mb-24 mx-auto justify-start gap-2">
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={symfony} alt="symfony svg" className="h-10 w-10" />
                    <span className="font-semibold">Symfony</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={php} alt="php svg" className="h-10 w-10" />
                    <span className="font-semibold">Php</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={mysql} alt="mysql svg" className="h-10 w-10" />
                    <span className="font-semibold">MySQL</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={nodejs} alt="nodejs svg" className="h-10 w-10" />
                    <span className="font-semibold">Nodejs</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={mongoDB} alt="mongoDB svg" className="h-10 w-10" />
                    <span className="font-semibold">MongoDB</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={postman} alt="postman svg" className="h-10 w-10" />
                    <span className="font-semibold">Postman</span>
                </div>
            </div>
           
            {/* design */}
            <h2 className="text-2xl font-bold ml-6"><span className="text-secondary font-bold text-xl">03. </span> Design  </h2>
            <div className="flex flex-wrap w-[80%] mt-12 mb-12 mx-auto justify-start gap-2">
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={figma} alt="figma svg" className="h-10 w-10" />
                    <span className="font-semibold">Figma</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={illustrator} alt="illustrator svg" className="h-10 w-10" />
                    <span className="font-semibold">Illustrator</span>
                </div>
                <div className="grid justify-items-center gap-1 content-center h-32 w-32 bg-quaternary rounded-3xl ">
                    <img src={photoshop} alt="photoshop svg" className="h-10 w-10" />
                    <span className="font-semibold">Photoshop</span>
                </div>
            </div>
            
        </div>
    );
}
 
export default Langages;