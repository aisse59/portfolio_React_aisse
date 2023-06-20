import React, { useState } from "react";
import Categories from "../categories/Categories";
import './Category.css';



const Category = () => {

    const [data,setData]=useState(Categories);
    const filterResult=(category)=>{

        const result=Categories.filter((curData)=> {
            return curData.category===category;
        });
        setData(result);
}
   
    return ( 
<>


        <ul className="flex flex-row gap-12 items-center w-11/12 h-20 mt-6 ml-auto mr-auto  bg-primary rounded-3xl overflow-y-auto hide-scrollbar ">
            <li className="flex flex-row pl-3">
                <input type="radio" id="Reactjs" name="lolo" value={"Reactjs"} onClick={()=>filterResult('React')} />
                <label htmlFor="Reactjs" className="text-quaternary text-xl font-bold ml-2">Reactjs</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Symfony" name="lolo" value={"Symfony"} onClick={()=>filterResult('Symfony')} />
                <label htmlFor="Symfony" className="text-quaternary text-xl font-bold ml-2">Symfony</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Angular" name="lolo" value={"Angular"} onClick={()=>filterResult('Angular')} />
                <label htmlFor="Angular" className="text-quaternary text-xl font-bold ml-2">Angular</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Javascript" name="lolo" value={"Javascript"} onClick={()=>filterResult('Javascript')} />
                <label htmlFor="Javascript" className="text-quaternary text-xl font-bold ml-2">Javascript</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="html/css" name="lolo" value={"html/css"} onClick={()=>filterResult('Html/Css')} />
                <label htmlFor="html/css" className="text-quaternary text-xl font-bold ml-2">Html/Css</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="Certification" name="lolo" value={"Certification"} onClick={()=>filterResult('Certification')}/>
                <label htmlFor="Certification" className="text-quaternary text-xl font-bold ml-2">Certification</label>
            </li>
            <li className="flex flex-row">
                <input type="radio" id="CMS" name="lolo" value={"CMS"} onClick={()=>filterResult('CMS')}/>
                <label htmlFor="CMS" className="text-quaternary text-xl font-bold ml-2">CMS</label>
            </li>
            <li className="flex flex-row pr-3">
                <input type="radio" id="WebDesign" name="lolo" value={"WebDesign"} onClick={()=>filterResult('WebDesign')} />
                <label htmlFor="WebDesign" className="text-quaternary text-xl font-bold ml-2">WebDesign</label>
            </li>
        </ul>
        
        <div className="flex flex-wrap w-[80%] h-screen mx-auto justify-start gap-4  mt-12 ">
            
        {data.map((values)=>{
            const {id,title,image,lien}=values;
            return(
                <div className=" w-[45%] h-[327px] bg-primary  rounded-3xl" key={id}>
                    <h1 className="text-quaternary text-sm font-semibold">{title}</h1>
                    <img src={image} alt="..." className="object-cover w-[379px] h-[197px] rounded-3xl border-solid border-2 border-quaternary shadow shadow-quaternary " />
                    <a href={lien}>
                        <button >voir le projet</button>
                    </a>
                </div>
                )
            })}
        </div>
           
        </>            

     );
}
 
export default Category;