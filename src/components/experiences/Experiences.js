import React from "react";
import experience from '../../icons/Experiences.svg';
import Filter from "../filter/Filter";


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
              <h3 class="mb-3 font-bold text-quaternary text-xl">2022</h3>
              <p className="text-lg font-semibold text-quaternary">Poste</p>
              <p className="text-sm font-semibold italic text-quaternary">Nom de la société</p>
              <ul class="text-sm leading-snug tracking-wide text-quaternary text-opacity-100">
               <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
               <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
              </ul>
            </div>
          </div>
      
          {/* <!-- left timeline --> */}
         <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
                
            </div>
           <div class="order-1 bg-quaternary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-primary text-xl">2022</h3>
                <p className="text-lg font-semibold text-primary">Poste</p>
                <p className="text-sm font-semibold italic text-primary">Nom de la société</p>
                <ul class="text-sm leading-snug tracking-wide text-primary text-opacity-100">
                <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
                <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
              </ul>
           </div>
         </div>
          
         {/* <!-- right timeline --> */}
         <div class="mb-8 flex justify-between items-center w-full right-timeline">
           <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
              
            </div>
           <div class="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-quaternary text-xl">2022</h3>
                    <p className="text-lg font-semibold text-quaternary">Poste</p>
                    <p className="text-sm font-semibold italic text-quaternary">Nom de la société</p>
                <ul class="text-sm leading-snug tracking-wide text-quaternary text-opacity-100">
                    <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
                    <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
                </ul>
             </div>
          </div>
          
      
         {/* <!-- left timeline --> */}
         <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 w-5/12"></div>
           <div class="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
             
           </div>
            <div class="order-1 bg-quaternary rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-primary text-xl">2022</h3>
                    <p className="text-lg font-semibold text-primary">Poste</p>
                    <p className="text-sm font-semibold italic text-primary">Nom de la société</p>
                <ul class="text-sm leading-snug tracking-wide text-primary text-opacity-100">
                    <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
                    <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
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
                    <h3 class="mb-3 font-bold text-quaternary text-xl">2022</h3>
                    <p className="text-lg font-semibold text-quaternary">Poste</p>
                    <p className="text-sm font-semibold italic text-quaternary">Nom de la société</p>
                <ul class="text-sm leading-snug tracking-wide text-quaternary text-opacity-100">
                    <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
                    <li className="font-normal list-disc text-sm">Développeur web et web mobile bac+2</li>
                </ul>
             </div>
          </div>    
        </div>
      </div>


          
      
      </>
     );
}
 
export default Experiences;