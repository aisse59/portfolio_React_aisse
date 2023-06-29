import React from "react";
import Input from "../components/input/Input";
import Textarea from "../components/textarea/Textarea";


const Contact = () => {
    return ( 
        <>
            <form action="">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nom" className=" font-semibold text-sm text-quaternary ">Votre nom</label>
                        <Input 
                        type={'text'} 
                        placeholder={'Quel est votre nom'}
                        name={'nom'}
                        />
                    </div>
                    <div>
                        <label htmlFor="prenom" className="font-semibold text-sm text-quaternary">Votre prénom</label>
                        <Input 
                        type={'text'} 
                        placeholder={'Quel est votre prénom'}
                        name={'prenom'}
                        />
                    </div>
                </div>

                    <label htmlFor="email" className="font-semibold text-sm text-quaternary">Votre Email</label>
                    <Input 
                    type={'email'} 
                    placeholder={'Quel est votre email'}
                    name={'email'}
                    />

                    <label htmlFor="message" className="font-semibold text-sm text-quaternary">Votre Message</label>
                    <Textarea
                    name={'message'}
                    placeholder={'Laissez-moi un message pour discuter de vos besoins en recrutement et pour explorer comment mes compétences pourraient contribuer à votre équipe. Votre message est le premier pas vers une collaboration fructueuse.'}
                    />
                    <div className="">
                        <button className="w-48 h-16 outline-0 py-3 px-4  rounded-3xl text-primary bg-quaternary  font-semibold text-xs" type="submit">Envoyer</button>
                    </div>
            </form>
        </>
     );
}
 
export default Contact;