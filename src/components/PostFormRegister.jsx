import React, { useState } from 'react'
import { useGetApiCustomerPortal } from '../apis/useGetApiCustomerPortal';
import Colombia from '../images/colombia.svg'
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const PostFormRegister = () => {

    const { data } = useGetApiCustomerPortal();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [celular, setCelular] = useLocalStorage('Celular', '');

    const [formValues, setFormValues] = useState({
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: ''
    });

    const [errors, setErrors] = useState({
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormValues({
            ...formValues,
            [id]: value
        });

        // Limpiar el mensaje de error si cumple con la longitud mínima
        if ((id.includes('Nombre') && value.length >= 2) || (id.includes('Apellido') && value.length >= 3)) {
            setErrors({
                ...errors,
                [id]: ''
            });
        }
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        const minLength = id.includes('Nombre') ? 2 : 3;

        // Validación: si el valor tiene menos del mínimo requerido, muestra el error y borra el campo
        if (value.length < minLength) {
            setErrors({
                ...errors,
                [id]: `El campo debe tener mas de ${minLength} caracteres.`
            });
            setFormValues({
                ...formValues,
                [id]: ''
            });
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(''); // Limpiar el error al cambiar el valor

        // Guardar el valor en localStorage
        localStorage.setItem('email', value);


    };
    const handleEmailBlur = () => {
        // Expresión regular para validar el formato soporte@plaza.net
        const emailPattern = /^soporte@plaza\.net$/.co;

        // Verificar si el correo coincide con el patrón
        if (!emailPattern.test(email)) {
            setEmailError('Este campo debe ser un formato "correo@dominio.com".');
            setEmail(''); // Limpiar el input si no cumple con el formato
        }
    };
    const handleChangeCelular = (e) => {
        const value = e.target.value.replace(/\D/g, '') // Elimina caracteres no numéricos
        if (value.length <= 10) {
            setCelular(value)
        }
    }

    const resetLocalStorage = () => {
        localStorage.setItem("Celular", "");
        localStorage.clear();
        reload();
    }



    return (
        <div>
            <div className="flex items-center justify-center m-auto">
                <div>
                    <h1 className="my-2 text-center text-3xl">{data.portalTittle}</h1>
                    <button onClick={resetLocalStorage} className="w-1/5 rounded-lg text-white bg-red-600 p-2.5 mb-2 ml-5 border-r-emerald-800">Cancelar</button>
                    <form className="mx-4 md:mx-8">
                        <div id='Columna 1' className="grid md:grid-cols-2 md:gap-4">
                            <div>
                                <label htmlFor="primerNombre">
                                    <span style={{ color: 'red' }}>* </span>Primer nombre
                                </label>
                                <input
                                    type="text"
                                    id="primerNombre"
                                    value={formValues.primerNombre}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    required
                                />
                                {errors.primerNombre && <p style={{ color: 'red', fontSize: '12px' }}>{errors.primerNombre}</p>}
                            </div>
                            <div>
                                <label htmlFor="segundoNombre">Segundo nombre</label>
                                <input
                                    type="text"
                                    id="segundoNombre"
                                    value={formValues.segundoNombre}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                />
                                {errors.segundoNombre && <p style={{ color: 'red', fontSize: '12px' }}>{errors.segundoNombre}</p>}
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
                                    value={formValues.primerApellido}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    required
                                />
                                {errors.primerApellido && <p style={{ color: 'red', fontSize: '12px' }}>{errors.primerApellido}</p>}
                            </div>
                            <div>
                                <label htmlFor="segundoApellido">Segundo apellido</label>
                                <input
                                    type="text"
                                    id="segundoApellido"
                                    value={formValues.segundoApellido}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                />
                                {errors.segundoApellido && <p style={{ color: 'red', fontSize: '12px' }}>{errors.segundoApellido}</p>}
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
                                {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
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
                                    onChange={handleChangeCelular}
                                    maxLength={10}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder="Número celular"
                                    required
                                />
                                <p id="celular-description" style={{ fontSize: '10px' }} className="mt-1 ml-1 text-gray-500">
                                    Dígitos ingresados: {celular.length}/10
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
                                    <option value="" disabled defaultValue>
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