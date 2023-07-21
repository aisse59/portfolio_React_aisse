import React from "react";
import experience from '../../icons/Experiences.svg';
import Filter from "../filter/Filter";
import calendar from "../../icons/Calendar.svg";


const Experiences = () => {
    return ( 
        <>
        <Filter/>
      <div className=" flex justify-center gap-4 mt-10">
         <img src={experience} alt="experience svg" />
         <h1 className="text-4xl text-quaternary font-bold">Expériences</h1>
      </div>
        {/* <!-- component --> */}
      <div class="container mt-10  mx-auto w-full ">
       <div class="relative wrap overflow-hidden p-2 md:p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full md:border left-1/2"></div>
     
         {/* <!-- right timeline --> */}
          <div class="mb-8 flex justify-center md:justify-between  items-center w-full right-timeline">
           <div class="order-1 md:w-5/12"></div>
            <div class=" -z-20 md:z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
           </div>
            <div class="order-1 bg-primary rounded-lg shadow-xl md:w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-quaternary text-xs  md:text-base flex flex-row gap-2">
              <img src={calendar} alt="calendar" />
              novembre 2022 à décembre 2022</h3>
              <p className=" text-xs md:text-base font-semibold text-quaternary">Stage développeur web MEAN stack</p>
              <p className="text-xs md:text-sm font-semibold italic text-quaternary mt-2">Wihuntiz agence immobilière</p>
              <ul class=" text-xs md:text-sm leading-snug tracking-wide text-quaternary text-opacity-100 px-2 py-2">
                <li className="font-normal list-disc ">
                  Participer au développement de l'application de Wihuntiz
                </li>
                <li className="font-normal list-disc">
                  Analyser des besoins exprimés sur le cahier des charges
                </li>
                <li className="font-normal list-disc ">
                  Développer la partie front-end et back-end de l'application
                </li>
              </ul>
            </div>
          </div>
      
          {/* <!-- left timeline --> */}
         <div class="mb-8 flex justify-center  md:justify-between  flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 md:w-5/12"></div>
            <div class="-z-20 md:z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
                
            </div>
           <div class="order-1 bg-quaternary rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                <h3 class="text-xs md:text-base mb-3 font-bold text-primary text-base flex flex-row gap-2">
                <img src={calendar} alt="calendar" />
                avril 2022 à decembre 2022</h3>
                <p className="text-xs md:text-base font-semibold text-primary">Formation de développeur web et web mobile</p>
                <p className="text-xs md:text-sm font-semibold mt-2 italic text-primary">Centre de formation Afpa de roubaix</p>
                <ul class="text-xs md:text-sm leading-snug tracking-wide text-primary text-opacity-100 px-2 pt-2">
                <li className="font-normal list-disc ">Création d'un projet complet en utilisant le framework Symfony pour le développement back-end</li>
                <li className="font-normal list-disc ">
                  Manipulation avancée de bases de données (BDD) pour assurer la gestion et le stockage des informations
                </li>
                <li className="font-normal list-disc">
                  Utilisation du framework Bootstrap pour le développement du front-end et l'optimisation de l'interface utilisateur
                </li>
              </ul>
           </div>
         </div>
          
         {/* <!-- right timeline --> */}
         <div class="mb-8 flex justify-center md:justify-between  items-center w-full right-timeline">
           <div class="order-1 md:w-5/12"></div>
            <div class="-z-20 md:z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
              
            </div>
           <div class="order-1 bg-primary rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-quaternary text-xs  md:text-base flex flex-row gap-2">
                    <img src={calendar} alt="calendar" />  
                    février 2022 à avril 2022</h3>
                    <p className="text-xs md:text-base  font-semibold text-quaternary">Formation découverte des métiers IT</p>
                    <p className="text-xs md:text-sm mt-2 font-semibold italic text-quaternary">Centre de formation M2I</p>
                <ul class="text-xs md:text-sm  leading-snug tracking-wide text-quaternary text-opacity-100 px-2 pt-2">
                    <li className="font-normal list-disc">Maquettage sur Figma : Création de maquettes visuelles interactives</li>
                    <li className="font-normal list-disc ">Organisation de projet à partir de Trello et Jira </li>
                    <li className="font-normal list-disc ">Initiation à l'algorithmique : Apprentissage des concepts fondamentaux de l'algorithmique</li>
                    <li className="font-normal list-disc ">Utilisation du langage HTML et des règles CSS pour créer des interfaces visuellement attrayantes</li>
                </ul>
             </div>
          </div>
          
      
         {/* <!-- left timeline --> */}
         <div class="mb-8 flex justify-center md:justify-between flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 md:w-5/12"></div>
           <div class="-z-20 md:z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
             
           </div>
            <div class="order-1 bg-quaternary rounded-lg shadow-xl md:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-primary text-xs  md:text-base flex flex-row gap-2">
             <img src={calendar} alt="calendar" /> 
              novembre 2020 à janvier 2021
            </h3>
                    <p className="text-xs md:text-base  font-semibold text-primary">Formation Webmaster</p>
                    <p className="text-xs md:text-sm mt-2 font-semibold italic text-primary">En mode formation</p>
                <ul class="text-xs md:text-sm leading-snug tracking-wide text-primary text-opacity-100 px-2 pt-2">
                    <li className="font-normal list-disc ">Maîtrise de la création de sites WordPress </li>
                    <li className="font-normal list-disc ">Capacité à définir un plan de site clair</li>
                    <li className="font-normal list-disc ">Configuration avancée des modules de paiement </li>
                    <li className="font-normal list-disc ">Maîtrise des outils et des plugins spécifiques à WordPress</li>
                    <li className="font-normal list-disc ">Maîtrise de l'envoi de mails et configuration des serveurs de messagerie et des formulaires de contact</li>
                    <li className="font-normal list-disc ">Référencement SEO pour optimiser la visibilité et le classement du site dans les moteurs de recherche</li>
                </ul>
           </div>
         </div>

      {/* <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div> */}
     {/* <!-- right timeline --> */}
     <div class="mb-8 flex justify-center md:justify-between items-center w-full right-timeline">
           <div class="order-1 md:w-5/12"></div>
            <div class="-z-20 md:z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
              
            </div>
           <div class="order-1 bg-primary rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-quaternary text-xs  md:text-base flex flex-row gap-2">
                    <img src={calendar} alt="calendar" />  
                      février 2020 à juillet 2020
                    </h3>
                    <p className="text-xs md:text-base font-semibold text-quaternary">conseillère en marketing digital</p>
                    <p className="text-xs md:text-sm mt-2 font-semibold italic text-quaternary">Solocal</p>
                <ul class="text-xs md:text-sm leading-snug tracking-wide text-quaternary text-opacity-100 gap-2 px-2 pt-2">
                    <li className="font-normal list-disc"> Capacité à analyser les besoins et les objectifs des clients, puis recommander les meilleures stratégies de marketing numérique pour atteindre ces objectifs</li>
                    <li className="font-normal list-disc">Connaissance approfondie des techniques de référencement naturel (SEA) pour optimiser la visibilité des sites web dans les moteurs de recherche et augmenter leur trafic organique</li>
                    <li className="font-normal list-disc">Connaissance des outils et des pratiques pour gérer la réputation en ligne des entreprises, surveiller les avis et les commentaires</li>
                </ul>
             </div>
          </div>    
        </div>
      </div>


          
      
      </>
     );
}
 
export default Experiences;