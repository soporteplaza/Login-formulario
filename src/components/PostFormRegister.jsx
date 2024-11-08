import React, { useState } from 'react'
import { useGetApiCustomerPortal } from '../apis/useGetApiCustomerPortal';
import Colombia from '../images/colombia.svg'
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const PostFormRegister = () => {

    const { data } = useGetApiCustomerPortal();

    const [email, setEmail] = useLocalStorage('Correo electronico','');
    const [emailError, setEmailError] = useState('');
    const [celular, setCelular] = useLocalStorage('Celular', '');
    const [celularError, setCelularError] = useState('');
    const [nombre, setNombre] = useLocalStorage('PrimerNombre', '');
    const [nombreError, setNombreError] = useState('');
    const [nombre2, setNombre2] = useLocalStorage('SegundoNombre', '');
    const [nombre2Error, setNombre2Error] = useState('');
    const [apellido, setApellido] = useLocalStorage('PrimerApellido', '');
    const [apellidoError, setApellidoError] = useState('');
    const [apellido2, setApellido2] = useLocalStorage('SegundoApellido', '');
    const [apellido2Error, setApellido2Error] = useState('');

    const validateNombre = (e) => {

        const value = e.target.value;
        setNombre(value);

        // Validar al escribir si hay menos de 2 caracteres
        if (value.length < 2) {
            setNombreError('El nombre debe tener al menos 2 caracteres.');
        } else {
            setNombreError(''); // Limpia el mensaje de error si la longitud es válida
        }
    };
    const validateNombreBlur = () => {
        // Limpiar el input y mostrar error si tiene menos de 2 caracteres
        if (nombre.length < 2) {
            setNombre('');
            setNombreError('El nombre debe tener al menos 2 caracteres.');
        }
    };
    const validateNombre2 = (e) => {

        const value = e.target.value;
        setNombre2(value);

        // Validar al escribir si hay menos de 3 caracteres
        if (value.length < 3) {
            //vacio
        } else {
            setNombre2Error(''); // Limpia el mensaje de error si la longitud es válida
        }
    }
    const validateNombre2Blur = () => {
        // Limpiar el input y mostrar error si tiene menos de 3 caracteres
        if (nombre2.length < 3) {
            setNombre2('');
            setNombre2Error('El nombre debe tener al menos 3 caracteres.');
        }
    };
    ///////////////
    const validateApellido = (e) => {

        const value = e.target.value;
        setApellido(value);

        // Validar al escribir si hay menos de 2 caracteres
        if (value.length < 2) {
            setApellidoError('El nombre debe tener al menos 2 caracteres.');
        } else {
            setApellidoError(''); // Limpia el mensaje de error si la longitud es válida
        }
    };
    const validateApellidoBlur = () => {
        // Limpiar el input y mostrar error si tiene menos de 2 caracteres
        if (apellido.length < 2) {
            setApellido('');
            setApellidoError('El nombre debe tener al menos 2 caracteres.');
        }
    };
    const validateApellido2 = (e) => {

        const value = e.target.value;
        setApellido2(value);

        // Validar al escribir si hay menos de 3 caracteres
        if (value.length < 3) {
            //vacio
        } else {
            setApellido2Error(''); // Limpia el mensaje de error si la longitud es válida
        }
    }
    const validateApellido2Blur = () => {
        // Limpiar el input y mostrar error si tiene menos de 3 caracteres
        if (apellido2.length < 3) {
            setApellido2('');
            setApellido2Error('El nombre debe tener al menos 3 caracteres.');
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(''); // Limpiar el error al cambiar el valor

    };
    const handleEmailBlur = () => {
        // Expresión regular para validar el formato soporte@plaza.net
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|plaza\.net|plaza\.net\.co|gmail\.com\.co)$/;

        // Verificar si el correo coincide con el patrón
        if (!emailPattern.test(email)) {
            setEmailError('Este campo debe ser un formato "correo@dominio.com".');
            setEmail(''); // Limpiar el input si no cumple con el formato
        }
    };
    //***************** */
    const validateCelular = (e) => {
        const value = e.target.value.replace(/\D/g, '') // Elimina caracteres no numéricos

        setCelular(value);
        // Validar al escribir si hay menos de 3 caracteres
        if (value.length == 3) {
            //vacio
        } else {
            setCelularError(''); // Limpia el mensaje de error si la longitud es válida
        }
    }
    const celularBlur = () => {
        // Limpiar el input y mostrar error si tiene menos de 3 caracteres
        if (celular.length < 10) {
            setCelular('');
            setCelularError(' Ingrese los 10 digitos de celular');
        }
    };
    const resetLocalStorage = () => {
        localStorage.setItem("Celular", "");
        localStorage.clear();
        reload();
    }

    return (
        <div>
            <div className="flex items-center justify-center m-auto">
                <div>
                    {/* <button onClick={resetLocalStorage} className="w-1/5 rounded-lg text-white bg-red-600 p-1.5 border-r-emerald-800">Cancelar</button> */}
                    <h1 className="my-2 text-center text-3xl">{data.portalTittle}</h1>
                    <form className="mx-4 md:mx-8">
                        <div id='Columna 1' className="grid md:grid-cols-2 md:gap-4">
                            <div>
                                <label htmlFor="primerNombre">
                                    <span style={{ color: 'red' }}>* </span>Primer nombre
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingrese su primer nombre"
                                    value={nombre}
                                    onBlur={validateNombreBlur}
                                    onChange={validateNombre}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    required
                                />
                                {nombreError && <p style={{ fontSize: '10px', color: 'red' }}>{nombreError}</p>}
                            </div>
                            <div>
                                <label htmlFor="segundoNombre">Segundo nombre</label>
                                <input
                                    type="text"
                                    id="segundoNombre"
                                    placeholder='Ingrese su segundo nombre'
                                    value={nombre2}
                                    onBlur={validateNombre2Blur}
                                    onChange={validateNombre2}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                />
                                {nombre2Error && <p style={{ fontSize: '10px', color: 'red' }}>{nombre2Error}</p>}
                            </div>
                        </div>
                        <div id='Columna 2' className="grid md:grid-cols-2 md:gap-4 mt-2">
                            <div>
                                <label htmlFor="primerApellido">
                                    <span style={{ color: 'red' }}>* </span>Primer apellido
                                </label>
                                <input
                                    type="text"
                                    id="primerApellido"
                                    placeholder='Ingrese su primer apellido'
                                    value={apellido}
                                    onBlur={validateApellidoBlur}
                                    onChange={validateApellido}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    required
                                />
                                {apellidoError && <p style={{ fontSize: '10px', color: 'red' }}>{apellidoError}</p>}
                            </div>
                            <div>
                                <label htmlFor="segundoApellido">Segundo apellido</label>
                                <input
                                    type="text"
                                    id="segundoApellido"
                                    placeholder='Ingrese su segundo apellido'
                                    value={apellido2}
                                    onBlur={validateApellido2Blur}
                                    onChange={validateApellido2}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                />
                                {apellido2Error && <p style={{ fontSize: '10px', color: 'red' }}>{apellido2Error}</p>}
                            </div>
                        </div>
                        <div id='Columna 3' className=" flex mt-2">
                            <div className=" w-7/12">
                                <label className="">
                                    <span style={{ color: 'red' }}>* </span>Correo electronico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailBlur}
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder="Correo electronico"
                                    required
                                />
                                {emailError && <p style={{ color: 'red', fontSize: '10px' }}>{emailError}</p>}
                            </div>
                            <div className=" w-5/12 ml-2">
                                <label className="">
                                    Telefono fijo
                                </label>
                                <input
                                    type="number"
                                    id="text"
                                    className="  w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder="Número fijo"
                                />
                            </div>
                        </div>
                        <div id='Columna 4' className=" flex mt-2">
                            <div className=" w-5/12">
                                <label className="">
                                    <span style={{ color: 'red' }}>* </span>Código celular
                                </label>
                                <select

                                    id="typecodigo"
                                    required

                                    className=" mt-1 w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
                                >
                                    <option value="" disabled defaultValue>
                                        Seleccione el tipo
                                    </option>
                                    <option value="1">colombia</option>
                                    <option value="1">colombia</option>
                                    <option value="1">colombia</option>
                                    <option value="1">colombia</option>

                                </select>
                            </div>
                            <div className="w-7/12 ml-2">
                                <label className="">
                                    <span style={{ color: 'red' }}>* </span> Número Celular
                                </label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    id="celular"
                                    value={celular}
                                    onBlur={celularBlur}
                                    onChange={validateCelular}
                                    maxLength={10}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder="Número celular"
                                    required
                                />
                                <p id="celular-description" style={{ fontSize: '10px' }} className="mt-1 ml-1 text-gray-500">
                                    Dígitos: {celular.length}/10
                                    {celularError && <spanp style={{ fontSize: '10px', color: 'red' }}>{celularError}</spanp>}
                                </p>
                            </div>
                        </div>
                        <div id="Columna 5" className="flex flex-col lg:flex-row mt-2">
                            <div className="lg:w-1/3 w-full lg:mr-2">
                                <label>
                                    <span style={{ color: 'red' }}>* </span>País
                                </label>
                                <select
                                    id="typecodigo"
                                    required
                                    className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                >
                                    <option disabled defaultValue required>
                                        Seleccione el tipo
                                    </option>
                                    <option value="1">Colombia</option>
                                </select>
                            </div>
                            <div className="lg:w-1/3 w-full lg:mr-2 mt-2 lg:mt-0">
                                <label>
                                    <span style={{ color: 'red' }}>* </span>Departamento
                                </label>
                                <select
                                    id="typedepartamento"
                                    required
                                    className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                >
                                    <option value="" disabled defaultValue>
                                        Seleccione el tipo
                                    </option>
                                    <option value="1">Antioquia</option>
                                    <option value="2">Cundinamarca</option>
                                    <option value="3">Valle del Cauca</option>
                                    <option value="4">Santander</option>
                                </select>
                            </div>
                            <div className="lg:w-1/3 w-full mt-2 lg:mt-0">
                                <label>
                                    <span style={{ color: 'red' }}>* </span>Municipio
                                </label>
                                <select
                                    id="typemunicipio"
                                    required
                                    className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                >
                                    <option value="" disabled defaultValue>
                                        Seleccione el tipo
                                    </option>
                                    <option value="1">Medellín</option>
                                    <option value="2">Bogotá</option>
                                    <option value="3">Cali</option>
                                    <option value="4">Bucaramanga</option>
                                </select>
                            </div>
                        </div>
                        <div id='Columna 6' className=" mt-2 mb-2">
                            <label >
                                <span style={{ color: 'red' }}>* </span>Dirección de vivienda
                            </label>
                            <input
                                type="text"
                                id="text"
                                className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                placeholder="Carrera 10 # 23 Sur 10"
                                required
                            />
                        </div>
                        <div id='Columna 7' className="flex items-center mb-2">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                value=""
                                required
                                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded"
                            />
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-dark-900">
                                Autorizo el tratamiento de mis datos personales registrados en este portal con los siguientes{' '}
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">
                                    Términos y condiciones
                                </a>.
                            </label>
                        </div>
                        <button className="w-3/4 rounded-lg text-white bg-plaza-color p-2.5 mb-2 border-r-emerald-800">Continuar</button>

                        <div className="grid grid-cols-6 gap-2 pb-4">
                            <div className="col-start-1 col-end-3">
                                <p>ID Sitio:{data.idSite}</p>
                                <p>ID Canal:{data.idChannel} </p>
                            </div>
                            <div className="col-end-7 col-span-2 flex justify-end text-end">
                                <img src={Colombia} alt="Favicon" height={50} width={50} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostFormRegister