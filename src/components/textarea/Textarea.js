import React from "react";

const Textarea = ({name,placeholder}) => {
    return ( 
        <textarea 
        className="w-full outline-0 py-3 px-3 rounded-3xl text-primary bg-quaternary  placeholder-primary font-semibold text-xs mt-2"
        name={name} 
        placeholder={placeholder}
        id="" cols="30" rows="10"
        required
         ></textarea>
     );
}
 
export default Textarea;