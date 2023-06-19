import React, { useState } from "react";
import Categories from "../categories/Categories";

const Category = () => {
    const [data,SetData]=useState(Categories);

    return ( 
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 ">
            
        {data.map((values)=>{
            const {id,title,image,lien}=values;
            return(
                <div className=" w-[436px] h-[327px] bg-primary rounded-3xl" key={id}>
                    <h1>{title}</h1>
                    <img src={image} alt="..." className="w-96 h-48 rounded-3xl" />
                    <a href={lien}>
                        <button >voir le projet</button>
                    </a>
                </div>
                )
            })}
                </div>
           
                

     );
}
 
export default Category;