import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormRegister from '../components/FormRegister'
import Banner from '../images/800x600.png'

const FormCustomerRegister = () => {
    return (
        <>
            <Header />
            <div className="flex gap-2">
                <div className=" sticky top-0 w-3/5 shadow border-solid border-2 border-sky-500 text-center justify-center items-center hidden md:block lg:flex">
                    <img className=" rounded-md" src={Banner} alt={Banner} />
                </div>
                <div className=" border-solid border-2 border-sky-500 justify-center flex items-center w-full md:w-2/5">
                    <FormRegister />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default FormCustomerRegister