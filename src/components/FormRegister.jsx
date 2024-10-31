import React from 'react'

const FormRegister = () => {
    return (
        <>
            <div className="flex items-center justify-center m-auto">
                <div>
                    <h1 className=" my-5 text-center text-3xl">Creación de cliente PuraCarnes Hogar</h1>
                    <form className="mx-4 md:mx-10">
                        {/* <div className="text-center">
                            <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="" className="text-lg"> Persona Natural</label>
                            <input type="radio" name="persona natural" id="" className="ml-5" />
                            <label htmlFor="" className="text-lg"> Persona Juridica</label>
                        </div> */}
                        <div className="text-center flex justify-center items-center gap-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="tipo_persona"
                                    className="w-5 h-5 checked:bg-red-600 checked:border-red-600 bg-gray-100 focus:ring-red-500 border-gray-300 rounded"
                                    required
                                />
                                <label className="ml-2 text-lg">Persona Natural</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="tipo_persona"
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded bg-plaza-color"
                                />
                                <label className="ml-2 text-lg">Persona Jurídica</label>
                            </div>
                        </div>

                        <div className=" mb-3 mt-3">
                            <label className="text-left content-start mb-2"><span style={{ color: 'red' }}>* </span>Tipo de documento</label>
                            <select id="typeDocumentos" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="" disabled selected >Seleccione el tipo</option>
                                <option value="US">Nit</option>
                                <option value="CA">Cedula</option>
                                <option value="FR">Tarjeta de identidad</option>
                                <option value="DE">Nuip</option>
                            </select>
                        </div>
                        <div className=" mb-3 mt-3">
                            <label htmlFor="" className="text-left content-start mb-2"><span style={{ color: 'red' }}>* </span>Número de documento</label>
                            <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Número de indentificación" required />
                        </div>
                        <div className="flex items-center mb-5">
                            <input id="link-checkbox" type="checkbox" value="" required className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                            <label for="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-dark-900">Autorizo el tratamiento de mis datos personales registrados en este portal con las siguiente <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Terminos y condiciones</a>.</label>
                        </div>
                        <button className=" w-full rounded-lg text-white bg-plaza-color p-2.5 mb-8 border-r-emerald-800">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormRegister