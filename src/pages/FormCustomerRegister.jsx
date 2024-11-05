import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormRegister from '../components/FormRegister';
import Banner from '../images/800x600.png';
import PostFormRegister from '../components/PostFormRegister';

const FormCustomerRegister = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Función para manejar el envío del formulario
    const handleFormSubmit = () => {
        setFormSubmitted(true); // Cambia el estado cuando el formulario se envía
        formSubmitted('');
    };

    return (
        <div style={{ backgroundColor: '#f0f5f9' }}> 
            <Header />
            <div className="flex gap-2">
                <div className="w-3/5 text-center justify-center items-center hidden md:block lg:flex">
                    <img className="rounded-md" src={Banner} alt="Banner" />
                </div>
                <div style={{ borderTop: '1' }} className="shadow-2xl rounded-lg bg-white justify-center flex items-center w-full md:w-2/5 lg:mr-5">
                    {formSubmitted ? (
                        <PostFormRegister /> // Muestra este componente cuando el formulario se haya enviado
                    ) : (
                        <FormRegister onSubmit={handleFormSubmit} /> // Pasa la función de envío al formulario
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FormCustomerRegister;
