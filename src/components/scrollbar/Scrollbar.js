import React from "react";
import './Scrollbar.css';


const Scrollbar = () => {
    return ( 
        

        <ul className="flex flex-row gap-12 items-center w-11/12 h-20 mt-6 ml-auto mr-auto  bg-primary rounded-3xl overflow-y-auto hide-scrollbar ">
            <li className="flex flex-row pl-3">
                <input type="radio" id="Reactjs" value={"Reactjs"} />
                <label htmlFor="Reactjs" className="text-tertiary text-xl font-bold ml-2">Reactjs</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Symfony" value={"Symfony"} />
                <label htmlFor="Symfony" className="text-tertiary text-xl font-bold ml-2">Symfony</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Angular" value={"Angular"} />
                <label htmlFor="Angular" className="text-tertiary text-xl font-bold ml-2">Angular</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Javascript" value={"Javascript"} />
                <label htmlFor="Javascript" className="text-tertiary text-xl font-bold ml-2">Javascript</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="html/css" value={"html/css"} />
                <label htmlFor="html/css" className="text-tertiary text-xl font-bold ml-2">Html/Css</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Javascript" value={"Javascript"} />
                <label htmlFor="Javascript" className="text-tertiary text-xl font-bold ml-2">Javascript</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="CMS" value={"CMS"} />
                <label htmlFor="CMS" className="text-tertiary text-xl font-bold ml-2">CMS</label>
            </li>
            <li className="flex flex-row pr-3">
                <input type="radio" id="WebDesign" value={"WebDesign"} />
                <label htmlFor="WebDesign" className="text-tertiary text-xl font-bold ml-2">WebDesign</label>
            </li>
        </ul>
        
     );
}
 
export default Scrollbar;