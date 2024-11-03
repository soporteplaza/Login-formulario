import React from 'react'

const PostFormRegister = () => {
    return (
        <div>
            <div className="flex items-center justify-center m-auto">
                <div>
                    <h1 className="my-5 text-center text-3xl">titulo</h1>
                    <form className="mx-4 md:mx-8">
                        <div id='Columna 1' className="grid md:grid-cols-2 md:gap-4">
                            <div className="">
                                <label className="">
                                    <span style={{ color: 'red' }}>* </span>Primer nombre
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="">
                                <label className="">
                                    Segundo nombre
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    className="  w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>
                        <div id='Columna 2' className="grid md:grid-cols-2 md:gap-4 mt-2">
                            <div className="">
                                <label className="">
                                    <span style={{ color: 'red' }}>* </span>Primer apellido
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="">
                                <label className="">
                                    <span style={{ color: 'red' }}>* </span>Segundo apellido
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    className="  w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder=""
                                    required
                                />
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
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder="Correo electronico"
                                    required
                                />
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
                                    Número Celular
                                </label>
                                <input
                                    type="number"
                                    id="celular"
                                    className="  w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-1"
                                    placeholder="Número fijo"
                                    required
                                />
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
                        <div id='Columna 7' className="flex items-center mb-5">
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
                        <button className="w-full rounded-lg text-white bg-plaza-color p-2.5 mb-8 border-r-emerald-800">Continuar</button>
                        <div className="grid grid-cols-6 gap-2 pb-5">
                            <div className="col-start-1 col-end-3">
                                <p>ID Sitio: </p>
                                <p>ID Canal: </p>
                            </div>
                            <div className="col-end-7 col-span-2 flex justify-end text-end">
                                <img src="" alt="Favicon" height={50} width={50} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostFormRegister