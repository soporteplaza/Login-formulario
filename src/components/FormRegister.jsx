import React, { useState } from 'react';
import { useGetApiCustomerPortal } from '../apis/useGetApiCustomerPortal';

const FormRegister = () => {
    const { data } = useGetApiCustomerPortal();
    const [tipoPersona, setTipoPersona] = useState(""); // Estado para controlar el tipo de persona seleccionado

    const opcionesPersonaNatural = [
        { value: "CC", label: "Cédula de Ciudadanía" },
        { value: "TI", label: "Tarjeta de Identidad" },
        { value: "NU", label: "NUIP" },
    ];

    const opcionesPersonaJuridica = [
        { value: "NIT", label: "NIT" },
        { value: "CE", label: "Cédula de Extranjería" },
        { value: "PAS", label: "Pasaporte" },
    ];

    const handleRadioChange = (event) => {
        setTipoPersona(event.target.value);
    };

    return (
        <div className="flex items-center justify-center m-auto">
            <div>
                <h1 className="my-5 text-center text-3xl">{data.portalTittle}</h1>
                <form className="mx-4 md:mx-10">
                    <div className="text-center flex justify-center items-center gap-6">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="tipo_persona"
                                value="natural"
                                onChange={handleRadioChange}
                                className="md:mr-1 lg:mr-2 w-5 h-5 checked:bg-red-600 checked:border-red-600 bg-gray-100 focus:ring-red-500 border-gray-300 rounded"
                                required
                            />
                            <label className="md:text-sm lg:text-lg">Persona Natural</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="tipo_persona"
                                value="juridica"
                                onChange={handleRadioChange}
                                className="md:mr-1 lg:mr-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                            />
                            <label className="md:text-sm lg:text-lg">Persona Jurídica</label>
                        </div>
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="text-left content-start mb-2">
                            <span style={{ color: 'red' }}>* </span>Tipo de documento
                        </label>
                        <select
                            id="typeDocumentos"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="" disabled defaultValue>
                                Seleccione el tipo
                            </option>
                            {(tipoPersona === "natural" ? opcionesPersonaNatural : opcionesPersonaJuridica).map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="text-left content-start mb-2">
                            <span style={{ color: 'red' }}>* </span>Número de documento
                        </label>
                        <input
                            type="text"
                            id="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Número de identificación"
                            required
                        />
                    </div>

                    <div className="flex items-center mb-5">
                        <input
                            id="link-checkbox"
                            type="checkbox"
                            value=""
                            required
                            className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-dark-900">
                            Autorizo el tratamiento de mis datos personales registrados en este portal con los siguientes{' '}
                            <a href={data.dataProtectionPolicy} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">
                                Términos y condiciones
                            </a>.
                        </label>
                    </div>

                    <button className="w-full rounded-lg text-white bg-plaza-color p-2.5 mb-8 border-r-emerald-800">Continuar</button>
                    <div className="grid grid-cols-6 gap-">
                        <div className="col-start-1 col-end-3">
                            <p>ID Sitio: {data.idSite}</p>
                            <p>ID Canal: {data.idChannel}</p>
                        </div>
                        <div className="col-end-7 col-span-2 flex justify-end text-end">
                            <img src={data.favIco} alt="Favicon" height={50} width={50} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormRegister;
