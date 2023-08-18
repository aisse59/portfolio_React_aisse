import React from "react";
import CVFile from '../cv/CV AISSE CAMARA DEVELOPPEUSE WEB.pdf';
import '../App.css';



const Home = () => {

    const handleDowload = () => {
        window.open(CVFile, '_blank');
    }
    
    return ( 
               <div className="pt-5 flex flex-col  gap-10 h-screen ">

                    {/* block nom,prénom et fonction */}
                    <div className="ml-10 ">
                        <h1 className="text-quaternary text-2xl md:text-4xl font-normal" >
                            Aïssé Camara
                        </h1>
                        <h2 className="text-quaternary text-3xl md:text-5xl font-semibold italic" >
                            Développeuse web
                        </h2>
                    </div>
                    {/* text de présentation */}
                    <div className="w-3/5  ml-10">
                        <p className="text-quaternary text-base md:text-xl" >
                            Bienvenue dans mon portfolio en tant que développeuse web passionnée ! Je suis dévouée à créer des expériences en ligne uniques et fonctionnelles. Parcourez mes projets variés qui allient créativité, code et innovation. Je suis ravie de partager avec vous mon parcours et mes compétences techniques. Préparez-vous à plonger dans le monde dynamique du développement web !  
                        </p>
                    </div>
                    <div>
                    <button  onClick={handleDowload} className="w-64 h-20 bg-quaternary rounded-3xl shadow-md text-secondary font-semibold text-xl  ml-10 hover:bg-secondary hover:text-quaternary duration-700 " >
                        Télécharger mon CV
                    </button>
                    </div>
               </div>
            
        
    
    );
}
 
export default Home;