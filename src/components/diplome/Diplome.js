import React from "react";
import diplome from '../../icons/Diplome.svg';
import Filter from "../filter/Filter";
import calendar from '../../icons/Calendar.svg';



const Diplome
 = () => {

   
    return ( 
      <>
     <Filter/> 
      <div className=" flex justify-center gap-4 mt-10">
         <img src={diplome} alt="diplome svg" />
         <h1 className="text-4xl text-quaternary font-bold">Diplômes</h1>
      </div>
        {/* <!-- component --> */}
      <div className="container mt-10  mx-auto w-full ">
       <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
     
         {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
           <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
             
           </div>
            <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-5 py-5">
              <h3 className="mb-3 font-bold text-quaternary text-base flex flex-row gap-2"> 
              <img src={calendar} alt="calendar" />2022</h3>
              <ul className="text-sm leading-snug tracking-wide text-quaternary text-opacity-100 ">
               <li className="font-semibold">Développeur web et web mobile bac+2</li>
               <li className="font-semibold  italic">Centre de formation AFPA</li>
              </ul>
            </div>
          </div>
      
          {/* <!-- left timeline --> */}
         <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
           <div className="order-1 w-5/12"></div>
           <div className="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
             
           </div>
           <div className="order-1 bg-quaternary rounded-lg shadow-xl w-5/12 px-5 py-5">
             <h3 className="mb-3 font-bold text-primary text-base flex flex-row gap-2 ">
             <img src={calendar} alt="calendar" />
              2012</h3>
            <ul className="text-sm font-medium leading-snug tracking-wide text-primary text-opacity-100">
               <li className="font-semibold">BTS Assistant de Manager</li>
               <li className="font-semibold  italic">Lycée Jean Moulin à Roubaix</li>
            </ul>
           </div>
         </div>
          
         {/* <!-- right timeline --> */}
         <div className="mb-8 flex justify-between items-center w-full right-timeline">
           <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-quaternary shadow-xl w-4 h-4 rounded-full">
             
            </div>
           <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-5 py-5">
             <h3 className="mb-3 font-bold text-quaternary text-base flex flex-row gap-2 ">
             <img src={calendar} alt="calendar" />
              2010</h3>
             <ul className="text-sm leading-snug tracking-wide text-quaternary text-opacity-100">
             <li className="font-semibold  ">Baccalaureat Professionnel Secrétariat</li>
               <li className="font-semibold  italic">Lycée Jean Moulin à Roubaix</li>
             </ul>
             </div>
          </div>
      
         {/* <!-- left timeline --> */}
         {/* <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
           <div class="order-1 w-5/12"></div>
           <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
             <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
           </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
             <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
             <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
         </div> */}
        </div>
      </div>

      
      </>
     );
}
 
export default Diplome
;