import React from "react";

const Input = ({type,placeholder, name}) => {
    return ( 
        <input 
        className="w-full h-16 outline-0 py-3 px-4 mt-2 mb-2 rounded-3xl text-primary bg-quaternary placeholder-primary font-semibold text-xs"
        type={type} 
        placeholder={placeholder}
        name={name}
        required
        />
     );
}
 
export default Input;