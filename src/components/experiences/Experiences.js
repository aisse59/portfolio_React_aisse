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
       <div class="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
     
         {/* <!-- right timeline --> */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
           <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
           </div>
            <div class="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-quaternary text-base flex flex-row gap-2">
              <img src={calendar} alt="calendar" />
              novembre 2022 à décembre 2022</h3>
              <p className="text-base font-semibold text-quaternary">Stage développeur web MEAN stack</p>
              <p className="text-sm font-semibold italic text-quaternary">Wihuntiz agence immobilière</p>
              <ul class="text-sm leading-snug tracking-wide text-quaternary text-opacity-100 px-6 py-2">
                <li className="font-normal list-disc text-sm">
                  Participer au développement de l'application de Wihuntiz
                </li>
                <li className="font-normal list-disc text-sm">
                  Analyser des besoins exprimés sur le cahier des charges
                </li>
                <li className="font-normal list-disc text-sm">
                  Développer la partie front-end et back-end de l'application
                </li>
              </ul>
            </div>
          </div>
      
          {/* <!-- left timeline --> */}
         <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
                
            </div>
           <div class="order-1 bg-quaternary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-primary text-base flex flex-row gap-2">
                <img src={calendar} alt="calendar" />
                avril 2022 à decembre 2022</h3>
                <p className="text-sm font-semibold text-primary">Formation de développeur web et web mobile</p>
                <p className="text-sm font-semibold italic text-primary">Centre de formation Afpa de roubaix</p>
                <ul class="text-sm leading-snug tracking-wide text-primary text-opacity-100 px-4 pt-2">
                <li className="font-normal list-disc text-sm">Création d'un projet complet en utilisant le framework Symfony pour le développement back-end</li>
                <li className="font-normal list-disc text-sm">
                  Manipulation avancée de bases de données (BDD) pour assurer la gestion et le stockage des informations
                </li>
                <li className="font-normal list-disc text-sm">
                  Utilisation du framework Bootstrap pour le développement du front-end et l'optimisation de l'interface utilisateur
                </li>
                <li className="font-normal list-disc text-sm">
                Mise en place d'un calendrier interactif pour gérer les événements et les plannings
                </li>
                <li className="font-normal list-disc text-sm">
                Utilisation de technologies web modernes telles que HTML5, CSS3 et JavaScript pour créer des interfaces dynamiques et réactives
                </li>
              </ul>
           </div>
         </div>
          
         {/* <!-- right timeline --> */}
         <div class="mb-8 flex justify-between items-center w-full right-timeline">
           <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
              
            </div>
           <div class="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-quaternary text-base flex flex-row gap-2">
                    <img src={calendar} alt="calendar" />  
                    février 2022 à avril 2022</h3>
                    <p className="text-sm font-semibold text-quaternary">Formation découverte des métiers IT</p>
                    <p className="text-sm font-semibold italic text-quaternary">Centre de formation M2I</p>
                <ul class="text-sm leading-snug tracking-wide text-quaternary text-opacity-100 px-4 pt-2">
                    <li className="font-normal list-disc text-sm">Maquettage sur Figma : Création de maquettes visuelles interactives pour représenter l'apparence et la disposition des interfaces utilisateur</li>
                    <li className="font-normal list-disc text-sm">Utilisation de Miro : Création de wireframes pour définir l'agencement des éléments et l'expérience utilisateur globale.</li>
                    <li className="font-normal list-disc text-sm">Organisation de projet à partir de Trello et Jira : Utilisation d'outils de gestion de projet tels que Trello et Jira pour planifier, organiser et suivre les différentes étapes du développement</li>
                    <li className="font-normal list-disc text-sm">Initiation à l'algorithmique : Apprentissage des concepts fondamentaux de l'algorithmique pour résoudre efficacement les problèmes et optimiser les performances des applications</li>
                    <li className="font-normal list-disc text-sm">Utilisation du langage HTML pour structurer et organiser le contenu d'une page web et application de la mise en forme aux éléments HTML en utilisant des règles CSS pour créer des interfaces visuellement attrayantes</li>
                </ul>
             </div>
          </div>
          
      
         {/* <!-- left timeline --> */}
         <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 w-5/12"></div>
           <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
             
           </div>
            <div class="order-1 bg-quaternary rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-primary text-base flex flex-row gap-2">
             <img src={calendar} alt="calendar" /> 
              novembre 2020 à janvier 2021
            </h3>
                    <p className="text-sm font-semibold text-primary">Formation Webmaster</p>
                    <p className="text-sm font-semibold italic text-primary">En mode formation</p>
                <ul class="text-sm leading-snug tracking-wide text-primary text-opacity-100 px-4 pt-2">
                    <li className="font-normal list-disc text-sm">Maîtrise de la création de sites WordPress en utilisant l'hébergement 02switch et le thème Flatsome Studio</li>
                    <li className="font-normal list-disc text-sm">Capacité à définir un plan de site clair en identifiant les différentes pages, les sections et les fonctionnalités nécessaires</li>
                    <li className="font-normal list-disc text-sm">Compétence dans la liste et l'organisation des contenus afin d'optimiser le temps de développement du site</li>
                    <li className="font-normal list-disc text-sm">Configuration avancée des modules de paiement pour permettre des transactions en ligne sécurisées et fluides</li>
                    <li className="font-normal list-disc text-sm">Maîtrise des outils et des plugins spécifiques à WordPress pour optimiser les performances, la sécurité et l'expérience utilisateur du site</li>
                    <li className="font-normal list-disc text-sm">Maîtrise de l'envoi de mails à partir d'un site WordPress, y compris la configuration des serveurs de messagerie et des formulaires de contact</li>
                    <li className="font-normal list-disc text-sm">Connaissance des bonnes pratiques en matière de référencement (SEO) pour optimiser la visibilité et le classement du site dans les moteurs de recherche</li>
                </ul>
           </div>
         </div>

      {/* <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div> */}
     {/* <!-- right timeline --> */}
     <div class="mb-8 flex justify-between items-center w-full right-timeline">
           <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
              
            </div>
           <div class="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-quaternary text-base flex flex-row gap-2">
                    <img src={calendar} alt="calendar" />  
                      février 2020 à juillet 2020
                    </h3>
                    <p className="text-sm font-semibold text-quaternary">conseillère en marketing digital</p>
                    <p className="text-sm font-semibold italic text-quaternary">Solocal</p>
                <ul class="text-sm leading-snug tracking-wide text-quaternary text-opacity-100 px-4 pt-2">
                    <li className="font-normal list-disc text-sm"> Capacité à analyser les besoins et les objectifs des clients, puis recommander les meilleures stratégies de marketing numérique pour atteindre ces objectifs</li>
                    <li className="font-normal list-disc text-sm">créer des plans d'action pour développer la visibilité en ligne des entreprises, en utilisant des canaux tels que les sites web, les réseaux sociaux, les annuaires en ligne, etc</li>
                    <li className="font-normal list-disc text-sm">Connaissance approfondie des techniques de référencement naturel (SEA) pour optimiser la visibilité des sites web dans les moteurs de recherche et augmenter leur trafic organique</li>
                    <li className="font-normal list-disc text-sm">Connaissance des outils et des pratiques pour gérer la réputation en ligne des entreprises, surveiller les avis et les commentaires</li>
                </ul>
             </div>
          </div>    
        </div>
      </div>


          
      
      </>
     );
}
 
export default Experiences;