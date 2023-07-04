import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Input from "../components/input/Input";
import Textarea from "../components/textarea/Textarea";
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
    
    const recaptchaRef = useRef();
    const formRef = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const keyRecaptcha = process.env.REACT_APP_RECAPTCHA_KEY;


    // function onChange(value) {
    //     console.log("Captcha value:", value);
    // }
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
      
    const sendEmail = (e) => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        // onSubmit(recaptchaValue);
        // recaptchaRef.current.execute()  
        
        if (recaptchaValue) {
            
            emailjs
            .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID, 
            formRef.current, 
            process.env.REACT_APP_PUBLIC_KEY
            )
            .then((result) => {
                console.log(result.text);
                setMessageSent(true); // Mettre à jour l'état messageSent à true
                formRef.current.reset(); // Réinitialiser le formulaire
                setTimeout(() => {
                    window.location.reload(); // Recharger la page après un délai de 2 secondes
                }, 2000);
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    // const handleReset = () => {
    //     formRef.current.reset(); // Réinitialiser le formulaire sans modifier l'état messageSent
    // };

    

    if (messageSent) {
        return (
            <div className="grid justify-items-center w-full h-screen bg-black-500 px-4 ">
                <h2 className="text-quaternary font-bold text-2xl mt-5 ">Message envoyé avec succès !</h2>
                
            </div>
        );
    }

    return ( 
        <>
            <div className="grid justify-items-center w-full h-screen bg-black-500 px-4 ">
                <div className="w-3/5 grid justify-items-center">
                    <h1 className="text-quaternary font-bold text-2xl mt-5 ">Me Contacter</h1>
                    <p className="text-quaternary text-sm font-base mt-5 mb-10 text-center">Je suis ouverte à de nouvelles opportunités professionnelles passionnantes ! Si vous souhaitez collaborer avec une développeuse web motivée, n'hésitez pas à me contacter. Je serai ravie d'échanger avec vous sur les projets à venir.</p>
                </div>
                <form ref={formRef} onSubmit={sendEmail }>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="nom" className=" font-semibold text-sm text-quaternary ">Votre nom</label>
                            <Input 
                            type={'text'} 
                            placeholder={'Quel est votre nom'}
                            name={'user_name'}
                            />
                        </div>
                        <div>
                            <label htmlFor="prenom" className="font-semibold text-sm text-quaternary">Votre prénom</label>
                            <Input 
                            type={'text'} 
                            placeholder={'Quel est votre prénom'}
                            name={'user_surname'}
                            />
                        </div>
                    </div>

                    <label htmlFor="email" className="font-semibold text-sm text-quaternary">Votre Email</label>
                    <Input 
                        type={'email'} 
                        placeholder={'Quel est votre email'}
                        name={'user_email'}
                    />

                    <label htmlFor="message" className="font-semibold text-sm text-quaternary">Votre Message</label>
                    <Textarea
                        name={'message'}
                        placeholder={'Laissez-moi un message pour discuter de vos besoins en recrutement et pour explorer comment mes compétences pourraient contribuer à votre équipe. Votre message est le premier pas vers une collaboration fructueuse.'}
                    />
                        
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={keyRecaptcha}
                        onChange={onChange}
                    />
                    <span>
                      {!messageSent ?
                            'Cochez la case je ne suis pas un robot!'   : ''
                    }
                    </span>
                    <div className="grid justify-items-center">
                        <button className="w-48 h-16 outline-0 py-3 px-4  rounded-3xl text-primary bg-quaternary  font-semibold text-xs mt-2" type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default Contact;