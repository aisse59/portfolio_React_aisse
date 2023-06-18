import React from "react";


const Category = () => {
    return ( 
        

        <div className="flex flex-row gap-12 items-center w-11/12 h-20 mt-6 ml-auto mr-auto bg-primary rounded-3xl snap-x ">
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="Reactjs" value={"Reactjs"} />
                <label htmlFor="Reactjs" className="text-tertiary text-xl font-bold ml-2">Reactjs</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="Symfony" value={"Symfony"} />
                <label htmlFor="Symfony" className="text-tertiary text-xl font-bold ml-2">Symfony</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="Angular" value={"Angular"} />
                <label htmlFor="Angular" className="text-tertiary text-xl font-bold ml-2">Angular</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="Javascript" value={"Javascript"} />
                <label htmlFor="Javascript" className="text-tertiary text-xl font-bold ml-2">Javascript</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="html/css" value={"html/css"} />
                <label htmlFor="html/css" className="text-tertiary text-xl font-bold ml-2">Html/Css</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="Javascript" value={"Javascript"} />
                <label htmlFor="Javascript" className="text-tertiary text-xl font-bold ml-2">Javascript</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="CMS" value={"CMS"} />
                <label htmlFor="CMS" className="text-tertiary text-xl font-bold ml-2">CMS</label>
            </div>
            <div className="scroll-ml-6 snap-start">
                <input type="radio" id="WebDesign" value={"WebDesign"} />
                <label htmlFor="WebDesign" className="text-tertiary text-xl font-bold ml-2">WebDesign</label>
            </div>
        </div>
        
     );
}
 
export default Category;